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
      getParticipants: async () => {
        return Participant.find().sort({ enteredAt: -1 });
      },

      // Get All Participants By First Name Entered
      participantByFirstName: async (parent, { firstName }) => {
        const params = firstName ? { firstName } : {};
        return Participant.find(params);
      },

      // Get All Participants By Last Name Entered
      participantByLastName: async (parent, { lastName }) => {
        const params = lastName ? { lastName } : {};
        return Participant.find(params);
      },

      // Get All Participants By User Who Entered
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
      // Login
      login: async (parent, { userEmail, userPassword }) => {
        const user = await User.findOne({ userEmail });

        if (!user) {
          throw new AuthenticationError('There is no user');
        }
        
        const correctUser = await user.isCorrectPassword(userPassword);

        if (!correctUser) {
          throw new AuthenticationError('Incorrect password');
        }
        
        return user
      },

      // Add User
      addUser: async (parent, args) => {
        const user = await User.create(args);

        return user;
      },

      // Add Participant
      addParticipant: async (parent, args) => {
        const person = await Participant.create(args);

        return person;
      }
  }
  };
  
  module.exports = resolvers;