const Participant = require("../models/Participant");

const resolvers = {
    Query: {
        getParticipants: async () => {
        return Participant.find();
      }
    }
  };
  
  module.exports = resolvers;