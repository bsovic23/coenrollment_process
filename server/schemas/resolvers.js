const Participant = require("../models/Participant");

const resolvers = {
    // Get All Participants By Descending Date Entered
    Query: {
        getParticipants: async () => {
        return Participant.find().sort({ entered_at: -1 });
      }
    }
  };
  
  module.exports = resolvers;