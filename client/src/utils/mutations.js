import { gql } from '@apollo/client';

export const CREATE_CONTACT = gql`
mutation createContact($email: String!, $name: String!, $message: String!) {
    createContact(email: $email, name: $name, message: $message) {
      _id
      email
      name
      message
    }
  }
`;

export const DELETE_CONTACT = gql`
    mutation deleteContact($contactId: ID!) {
        deleteContact(contactId: $contactId) {
        _id
        email
        name
        message
        }
    }
`;