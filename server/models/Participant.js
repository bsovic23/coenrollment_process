const { Schema, model } = require('mongoose');

const participantSchema = new Schema(
    {
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        dob: {
            type: Date
        },
        digits: {
            type: Number
        },
        site: {
            type: String        // site model
        },
        study: {
            type: String
        },
        zipcode: {
            type: Number
        },
        entered_by: {
            type: String        // User model
        },
        entered_at: {
            type: Date,
            default: Date.now
        }
    }
);

const Participant = model('Participant', participantSchema);

module.exports = Participant;