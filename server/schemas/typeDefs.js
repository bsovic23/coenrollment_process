const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Participant {
        _id: ID
        first_name: String
        last_name: String
        dob: String
        digits: Int
        zipcode: Int
        entered_by: String
        entered_at: String
    }

    type Query {
        getParticipants: [Participant]
    }
`;

module.exports = typeDefs;