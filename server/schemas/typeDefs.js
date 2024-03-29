const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Participant {
        _id: ID
        firstName: String
        lastName: String
        dob: String
        digits: String
        site: String
        study: String
        zipcode: String
        enteredBy: String
        enteredAt: String
    }

    type Site {
        _id: ID
        siteName: String
        siteEmail: String
        siteCoordinator: String
    }

    type Study {
        _id: ID
        studyName: String
        studyYear: Int
    }

    type User {
        _id: ID
        userFn: String
        userLn: String
        userEmail: String
        userPassword: String
        userPxEnter: [Participant]
    }

    type Query {
        getParticipants: [Participant]
        participantByFirstName(firstName: String!): [Participant]
        participantByLastName(lastName: String!): [Participant]
        participantByEnter(enteredBy: String!): [Participant]
        participantByStudy(study: String!): [Participant]
    }

    type Mutation {
        addUser(userFn: String!, userLn: String!, userEmail: String!, userPassword: String!): User
        addParticipant(firstName: String!, lastName: String!, dob: String!, digits: String!, site: String!, study: String!, zipcode: String!, enteredBy: String!): Participant
    }
`;

module.exports = typeDefs;