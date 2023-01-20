const { Schema, model } = require('mongoose');

const studySchema = new Schema(
    {
        studyName: String
    }
);

const Study = model('User', studySchema);

module.exports = Study;