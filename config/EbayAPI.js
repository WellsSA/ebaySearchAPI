const axios = require('axios')

const sandbox = true

const url = (sandbox) ? 'https://api.sandbox.ebay.com' : 'https://api.ebay.com';

const api = axios.create({
    baseURL: url
})

module.exports = api