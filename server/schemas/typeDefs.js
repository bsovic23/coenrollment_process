const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Participant {
        _id: ID
        first_name: String
        last_name: String
        dob: String
        digits: Int
        site: String
        study: String
        zipcode: Int
        entered_by: String
        entered_at: String
    }
    type Question {
        _id: ID
        q_body: String
    }
    type Study {
        _id: ID
        study_name: String
        study_year: Int
    }
    type User {
        id: ID
        user_fn: String
        user_ln: String
        user_email: String
        user_password: String
    }
    type Site {
        _id: ID
        site_name: String
        site_email: String
        site_coordinator: String
    }
    type Query {
        getParticipants: [Participant]
        participantByName(first_name: String!): [Participant]
        participantByEnter(entered_by: String!): [Participant]
        participantByStudy(study: String!): [Participant]
    }
    type Mutation {
        addUser(user_fn: String!, user_ln: String!, user_email: String!, user_password: String!): User
        addParticipant(first_name: String!, last_name: String!, dob: String!, digits: Int!, site: String!, study: String!, zipcode: String!, entered_by: String!): Participant
    }
`;

module.exports = typeDefs;