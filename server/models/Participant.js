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
            type: String
        },
        digits: {
            type: String
        },
        site: {
            type: String
        },
        study: {
            type: String
        },
        zipcode: {
            type: String
        },
        enteredBy: {
            type: String
        },
        enteredAt: {
            type: Date,
            default: Date.now
        }
    }
);

const Participant = model('Participant', participantSchema);

module.exports = Participant;