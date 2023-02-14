import { gql } from '@apollo/client';

export const QUERY_ALL_PX = gql`
    query Query {
        getParticipants {
        _id
        firstName
        lastName
        dob
        digits
        site
        study
        zipcode
        enteredBy
        enteredAt
        }
    }
`;