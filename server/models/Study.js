const { Schema, model } = require('mongoose');

const studySchema = new Schema(
    {
        studyName: {
            type: String
    }
}
);

const Study = model('User', studySchema);

module.exports = Study;