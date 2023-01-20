const { Schema, model } = require('mongoose');

const participantSchema = new Schema(
    {
        firstName: {
            type: String
        },
        lastName: {
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
        enteredBy: {
            type: String        // User model
        },
        enteredAt: {
            type: Date,
            default: Date.now
        }
    }
);

const Participant = model('Participant', participantSchema);

module.exports = Participant;