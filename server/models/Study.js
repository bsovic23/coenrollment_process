const { Schema, model } = require('mongoose');

const studySchema = new Schema(
    {
        studyName: {
            type: String
        },
        studyYear: {
            type: String
        }
    }
);

const Study = model('Study', studySchema);

module.exports = Study;