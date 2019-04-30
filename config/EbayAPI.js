const axios = require('axios')

// env
const sandbox = process.env.EBAY_USE_SANDBOX
// env
const sandboxEbayToken = process.env.EBAY_TOKEN_SANDBOX
const productionEbayToken = process.env.EBAY_TOKEN_PRODUCTION
const ebayAuthToken = (sandbox) ? sandboxEbayToken : productionEbayToken

const url = (sandbox) ? 'https://api.sandbox.ebay.com/' : 'https://api.ebay.com/';

const EbayAPI = axios.create({
    baseURL: url
})

const ebayAuthHeaders = {
    'Authorization': 'Bearer ' + ebayAuthToken,
    'Content-Type':'application/json',
    'X-EBAY-C-ENDUSERCTX':'contextualLocation=country=<2_character_country_code>,zip=<zip_code>,affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>'
}

module.exports = { EbayAPI, ebayAuthHeaders }