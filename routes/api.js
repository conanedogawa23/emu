console.log('in api.js');
const cors = require('cors'),
    testing = require('../handlers/test'),
    vendorRegister = require('../handlers/vendor/vendorRegister'),
    vendorLogin = require('../handlers/vendor/vendorLogin');

module.exports = (app, express)=> {
    const api = express.Router();

    api.get('/path', testing.test);

    api.post('/path', vendorRegister.twilio_message_service);

    api.post('/vendorRegister', vendorRegister.registerValuesStandard);

    api.post('/vendorLogin', vendorLogin.vendorLoginStandard);

    // api.post('/checkin)

    return api;
}