<!-- Título -->
# IoasysBank  ![](android/app/src/main/res/mipmap-hdpi/logo.png) 
> Biblioteca de livros da empresa Ioasys.

<!-- Descrição -->
Esse projeto foi feito para a entrevista da empresa Ioasys, utilizando React-Native cli, styled-component, TypeScript, Eslint, Prettier, ContextAPI, etc...
Foram utilizadas algumas bibliotecas que auxiliaram no controle de dados e no front-end, como o component "TextInputFlat", usado na tela de login, na qual fornece a animação após o clique. Além disso, a lib "React-Native-Hook-forms" foi utilzada para controlar os dados recebidos no input da tela de login, pois ela entrega ótima perfomace e praticidade.

 
<!-- Tecnologias utilizadas -->
## 🏗 Tecnologias utilizadas & Dependências
- React-Native CLI
- TypeScript
- Eslint
- Code Formatter - Prettier
- Styled-Components
- ContextAPI
- React-hook-form
- React-Native-Paper
- React-Native-Neomorph-Shadows ( biblioteca para sombra )
- Yarn

## 🕵🏻‍♂️  Guia 
1. Faça FORK desse projeto.
2. Faça o clone.
5. Recomendo instalar o yarn, baixando no link. <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable"> Clique aqui! <a/>
4. Instalar todas as dependências utilizando o comando `yarn`.
5. Após o fim da instalação, digite `yarn start` iniciar o projeto.
6. Abra o emulador AVD no Android Studio.
7. Digite `yarn android` para buildar o app.

 <hr/>
 
# Componentes
 
## BoxSelectBook
- Esse componente é usado para exibir cada card da listagem de livros.

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
| `data`                      | `BooksData[]`               | required                     | Passar os dados de cada livro [ id: string;
|                             |                             |                              |       title: string;
|                             |                             |                              |       description: string;
|                             |                             |                              |       authors: string[];
|                             |                             |                              |       pageCount: string;
|                             |                             |                              |       category: string;
|                             |                             |                              |       imageUrl: string;
|                             |                             |                              |       isbn10: string;
|                             |                             |                              |       isbn13: string;
|                             |                             |                              |       language: string;
|                             |                             |                              |       publisher: string;
|                             |                            |                            |       published: string; ]                        


## BoxShadow
- Esse componente é usado para colocar sombra dentro de elementos.

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
| `children`                  | `React.ReactNode`           | required                     |  Recebe o elemento JSX.
|  `color`                    | `string`                    | required                     |  Recebe a cor.
|  `width`                    | `number`                    | required                     |  Recebe a largura.
|  `height`                   | `number`                    | required                     |  Recebe a altura



## Header
- Esse componente representa o cabeçalho da aplicação.

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
| `colorTheme`                  | `["black","white"]`       | not required                 |  Define a cor da logo.
|  `showButtonExit`             | `boolean`                 | not required                 |  Define se o botão de sair vai aparecer.
|  `handleSubmit()`             | `() => void`              | not required                 |  Função do botão de sair.


## Input
- Esse componente é um textInput personalizado, utilizando a biblioteca React-Native-paper

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
| `password`                  | `boolean`                   | not required                 |  Define se o input vai ter o formato de senha.
|  `showEnterButton`          | `boolean`                   | not required                 |  Define se vai aparecer o botão para alguma ação.
|  `label`                    | `string`                    | required                     |  Define o label do input.
|  `value`                    | `string`                    | required                     |  Define o valor do input.
|  `loading`                  | `(text:string) => void`     | required                     |  Caso passe true, aparece um spinner no lugar do text do botão.
|  `onChangeText`             | `boolean`                   | not required                 |  Função para pegar o texto digitado pelo usuário no input.



## ModalOptions
- Esse componente é um modal personalizado das opções de filtragem.

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
| `handleExitModal'           | ()  => void                 | not required                 |  Função para manipular o estado do botão de sair.
|  `visible`                  | `boolean`                   | required                     |  Define se o modal vai aparecer ou não.


## RoundedButton
- Esse componente é um botão em formato redondo.

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
| `name`                      | `string`                    | required                     |  Define o nome do icone.
|  `size`                     | `number`                    | required                     |  Define o tamanho do icone.
| `color`                     | `string`                    | required                     |  Define a cor do icone.
|  `handleSubmit()`           | `()  => void`               | required                     |  Função responsavel por realizar a ação do botão.


## SearchInput
- Esse componente é um textInput feito para pesquisa.

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
|  `label`                    | `string`                    | required                     |  Define o label do textInput.


## SubmitButton
- Esse componente é um botão usando para ações. Ele foi utilziado no component INPUT e no ModalOptions

### Props

| **Prop**                    | **Type**                    | **Required(Default Value)**  | **Description**                                     |
| --------------------------- | ----------------------------| ---------------------------- | --------------------------------------------------- |
|  `borderButton`             | `boolean`                   |  not required                |  Define se o botão vai ter a borda rosa ou não.
|   `loading`                   | `boolean`                   |  not required                |  Caso passe true, aparece um spinner no lugar do text do botão.
|  `handleSubmit()`           | `()  => void`               |  not required                |  Função responsavel por realizar a ação do botão.

 
<hr/>
 
 ### Exemplos
 
  ![Basic Exemple](https://media.giphy.com/media/5NG1nqQBfyk8KqFUeN/giphy.gif)
  ![Basic NorFound](https://media.giphy.com/media/hTPWwcuoTq9moQXsNg/giphy.gif)
  ![Basic listagem](https://media.giphy.com/media/TZ49d4lmLv0ciuNZkK/giphy.gif)

<hr/>
 
# Créditos
- Aplicação desenvolvida por Marcelo Antônio.
 #### [![LinkedIn][linkedin-shield]][linkedin-url1]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url1]: https://www.linkedin.com/in/marcelochmendes/
[linkedin-url2]: https://www.linkedin.com/in/monique-a-rodrigues/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADTbEtoBU2NoL-ADvXRVLcxVeOqXYwP15ig
[product-screenshot]: images/screenshot.png


