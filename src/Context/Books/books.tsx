import React, {createContext, useContext, useState} from 'react';

import {useAuth} from '../Auth/auth';
import {api} from '../../services/api';
import {AxiosResponse} from 'axios';

interface BooksContextData {
  getAllBooks(): Promise<void>;
  filterBooksByOption(options: ArrayOptionsProps[]): Promise<void>;
  books: BooksData[];
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

const DEFAULT_VALUE: BooksState = {
  itemsBook: [],
};

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider: React.FC = ({children}) => {
  const {authorization} = useAuth();

  const [item, setItem] = useState<BooksState>(DEFAULT_VALUE);
  const [books, setBooks] = useState<BooksData[]>([]);
  const [page, setPage] = useState<number>(1);

  async function getAllBooks() {
    const responseBooks: AxiosResponse = await api.get(
      `books?page=${page}&amount=5`,
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

  return (
    <BooksContext.Provider
      value={{books: books, getAllBooks, filterBooksByOption}}>
      {children}
    </BooksContext.Provider>
  );
};

export function useBooks(): BooksContextData {
  const context = useContext(BooksContext);

  return context;
}
