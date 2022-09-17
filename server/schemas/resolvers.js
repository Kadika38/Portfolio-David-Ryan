const { Contact } = require('../models');

const resolvers = {
    Query: {
        getContacts: async () => {
            return Contact.find({});
        }
    },
    Mutation: {
        deleteContact: async (parent, { contactId }) => {
            return Contact.findByIdAndDelete(
                { _id: contactId }
            );
        }
    }
};

module.exports = resolvers;