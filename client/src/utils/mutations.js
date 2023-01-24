import { gql } from '@apollo/client';

export const ADD_PARTICIPANT = gql`
    mutation AddParticipant($firstName: String!, $lastName: String!, $dob: String!, $digits: Int!, $site: String!, $study: String!, $zipcode: String!, $enteredBy: String!) {
        addParticipant(firstName: $firstName, lastName: $lastName, dob: $dob, digits: $digits, site: $site, study: $study, zipcode: $zipcode, enteredBy: $enteredBy) {
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