const Participant = require("../models/Participant");
const User = require("../models/User");

const resolvers = {
    
    Query: {
      // Get All Participants By Descending Date Entered
      getParticipants: async () => {
        return Participant.find().sort({ enteredAt: -1 });
      },

      // Get All Participants By First Name Entered
      participantByName: async (parent, { firstName }) => {
        const params = first_name ? { firstName } : {};
        return Participant.find(params);
      },

      // Get All Participants By User Who Entered
      participantByEnter: async (parent, { enteredBy }) => {
        const params = entered_by ? { enteredBy } : {};
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
      addParticipant: async () => {

      }
  }
  };
  
  module.exports = resolvers;