const { Schema, model } = require('mongoose');

const siteSchema = new Schema(
    {
        site_name: String
    },
    {
        site_email: String
    },
    {
        site_coordinator: String
    }
);

const Site = model('Site', siteSchema);

module.exports = Site;