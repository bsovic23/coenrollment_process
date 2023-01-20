const Participant = require("../models/Participant");
const User = require("../models/User");

const resolvers = {
    
    Query: {
      // Get All Participants By Descending Date Entered
      getParticipants: async () => {
        return Participant.find().sort({ entered_at: -1 });
      },

      // Get All Participants By First Name Entered
      participantByName: async (parent, { first_name }) => {
        const params = first_name ? { first_name } : {};
        return Participant.find(params);
      },

      // Get All Participants By User Who Entered
      participantByEnter: async (parent, { entered_by }) => {
        const params = entered_by ? { entered_by } : {};
        return Participant.find(params);
      },

      // Get Participants By Study
      participantByStudy: async (parent, { study }) => {
        Participant.find(params);
      }
  },

  Mutation: {
      // Add User
      addUser: async () => {
        const user = await User.create(args);

        return user;
      },

      // Add Participant
      addParticipant: async () => {

      }
  }
  };
  
  module.exports = resolvers;