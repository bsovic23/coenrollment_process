const { Schema, model } = require('mongoose');

const siteSchema = new Schema(
{
    siteName: {
        type: String
    },
    siteEmail: {
        type: String
    },
    siteCoordinator: {
        type: String
    }
}
);

const Site = model('Site', siteSchema);

module.exports = Site;