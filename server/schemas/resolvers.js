const { Contact } = require('../models');

const resolvers = {
    Query: {
        getContacts: async () => {
            return Contact.find({});
        }
    },
    Mutation: {
        createContact: async (parent, { email, name, message }) => {
            return Contact.create({ email, name, message });
        },
        deleteContact: async (parent, { contactId }) => {
            return Contact.findByIdAndDelete(
                { _id: contactId }
            );
        }
    }
};

module.exports = resolvers;