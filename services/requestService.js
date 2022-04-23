const axios = require('axios').default;
const inquireService = require('./inquireService');

const axiosConfig = () => ({
  headers: {
    'Accept': 'application/json',
    'Authorization': `Basic ${Buffer.from(`:${process.env.ADO_PAT}`).toString('base64')}`,
  },
});

module.exports.get = url => axios.get(url, axiosConfig(inquireService.getToken()));
module.exports.post = (url, body) => axios.post(url, body, axiosConfig(inquireService.getToken()));
module.exports.all = requests => axios.all(requests);
