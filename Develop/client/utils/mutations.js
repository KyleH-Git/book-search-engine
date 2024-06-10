import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql `
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql `
mutation saveBook($bookData: BookInput) {
  saveBook(bookData: $bookData) {
    _id
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const REMOVE_BOOK = gql `
mutation RemoveBook($bookId: String!) {
    removeBook(bookID: $bookId) {
      _id
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;