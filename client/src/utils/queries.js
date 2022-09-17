import { gql } from '@apollo/client';

export const GET_CONTACTS = gql`
    query getContacts {
        getContacts {
        _id
        email
        name
        message
        }
    }
`;