const { Schema, model } = require('mongoose');

const userSchema = new Schema(
{
    userFn: {
        type: String
    },
    userLn: {
        type: String
    },
    userEmail: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    userPassword: {
        type: String
    },
    userPxEnter: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant'
        }
    ]
},
{
    tojSON: {
        virtuals: true
    }
}
);

// Number of Participants Entered
userSchema.virtual('participantCount').get(function() {
    return this.userPxEnter.length;
});

const User = model('User', userSchema);

module.exports = User;