const { Schema, model } = require('mongoose');

const studySchema = new Schema(
    {
        study_name: String
    }
);

const Study = model('User', studySchema);

module.exports = Study;