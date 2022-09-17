const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Contact {
        _id: ID!
        email: String!
        name: String!
        message: String!
    }

    type Query {
        getContacts: [Contact]
    }

    type Mutation {
        createContact(email: String!, name: String!, message: String!): Contact
        deleteContact(contactId: ID!): Contact
    }
`;

module.exports = typeDefs;