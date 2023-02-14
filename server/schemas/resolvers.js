// Models
const {
  Participant,
  User,
  Site, 
  Study
} = require('../models');

// Other Const
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    
    Query: {
      // Get All Participants By Descending Date Entered
      //  ! confirmed work [ X ]
      getParticipants: async () => {
        return Participant.find().sort({ enteredAt: -1 });
      },

      // Get All Participants By First Name Entered
      //  ! confirmed work [ X ]
      participantByFirstName: async (parent, { firstName }) => {
        const params = firstName ? { firstName } : {};
        return Participant.find(params);
      },

      // Get All Participants By Last Name Entered
      //  ! confirmed work [ X ]
      participantByLastName: async (parent, { lastName }) => {
        const params = lastName ? { lastName } : {};
        return Participant.find(params);
      },

      // Get All Participants By User Who Entered
      //  ! confirmed work [ X ]
      participantByEnter: async (parent, { enteredBy }) => {
        const params = enteredBy ? { enteredBy } : {};
        return Participant.find(params);
      },

      // Get Participants By Study
      participantByStudy: async (parent, { study }) => {
        const params = study ? { study } : {};
        return Participant.find(params);
      }
  },

  Mutation: {
      // Add User
      addUser: async (parent, args) => {
        const user = await User.create(args);

        return user;
      },

      // Add Participant
      //  ! confirmed work [ X ]
      addParticipant: async (parent, args) => {
        const person = await Participant.create(args);

        return person;
      }
  }
  };
  
  module.exports = resolvers;