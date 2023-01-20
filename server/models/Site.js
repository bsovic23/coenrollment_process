const { Schema, model } = require('mongoose');

const siteSchema = new Schema(
    {
        siteName: String
    },
    {
        siteEmail: String
    },
    {
        siteCoordinator: String
    }
);

const Site = model('Site', siteSchema);

module.exports = Site;