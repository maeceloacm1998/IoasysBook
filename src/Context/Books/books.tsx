import React, {createContext, useContext, useState} from 'react';

import {useAuth} from '../Auth/auth';
import {api} from '../../services/api';
import {AxiosResponse} from 'axios';

interface BooksContextData {
  getAllBooks(): Promise<void>;
  filterBooksByOption(options: ArrayOptionsProps[]): Promise<void>;
  searchBooks(text: string): Promise<void>;
  books: BooksData[];
  filterBooks: BooksData[];
  loading: boolean;
  notFound: boolean;
}

interface BooksState {}

interface BooksData {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: string;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: string;
}

interface ArrayOptionsProps {
  type: string;
  value: string;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider: React.FC = ({children}) => {
  const {authorization} = useAuth();

  const [booksAux, setBooksAux] = useState<BooksData[]>([]);
  const [books, setBooks] = useState<BooksData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [notFound, setNotFound] = useState<boolean>(false);

  async function getAllBooks() {
    setLoading(true);

    const responseBooks: AxiosResponse = await api.get(
      `books?page=${page}&amount=8`,
      {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      }
    );

    const {data} = responseBooks.data;

    setBooks([...books, ...data]);

    setPage(oldValue => oldValue + 1);

    setLoading(false);
  }

  async function filterBooksByOption(options: ArrayOptionsProps[]) {
    if (books.length) {
      setPage(1);
      setBooks([]);
    }

    const responseBooks: AxiosResponse = await api.get(
      `books?page=${page}&amount=30&category=${options[0]}`,
      {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      }
    );

    const {data} = responseBooks.data;

    setBooks([...books, ...data]);

    setPage(oldValue => oldValue + 1);
  }

  async function searchBooks(text: string) {
    setLoading(true);

    if (text === '') {
      setNotFound(false);
      setBooksAux([]);
    } else {
      if (booksAux.length === 0) {
        const responseBooks: AxiosResponse = await api.get(
          `books?page=${1}&amount=500`,
          {
            headers: {
              Authorization: `Bearer ${authorization}`,
            },
          }
        );

        const {data} = responseBooks.data;

        const books: BooksData[] = data;

        const newArray: BooksData[] = books;

        handleSearch(text, newArray);
      } else {
        handleSearch(text, booksAux);
      }

      setLoading(false);
    }
  }

  function handleSearch(text: string, newArray: BooksData[]) {
    let aux = newArray.filter(item => {
      let titleBook = item.title.toLowerCase();

      if (text !== ' ') {
        return titleBook.match(text.toLowerCase());
      }
    });

    if (aux.length === 0) {
      setNotFound(true);
    } else {
      setBooksAux(aux);
    }
  }

  return (
    <BooksContext.Provider
      value={{
        books: books || [],
        filterBooks: booksAux || [],
        notFound: notFound,
        loading,
        getAllBooks,
        filterBooksByOption,
        searchBooks,
      }}>
      {children}
    </BooksContext.Provider>
  );
};

export function useBooks(): BooksContextData {
  const context = useContext(BooksContext);

  return context;
}
