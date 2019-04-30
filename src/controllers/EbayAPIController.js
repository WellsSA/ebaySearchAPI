const { EbayAPI, ebayAuthHeaders } = require('./../../config/EbayAPI')
/**
 * @class EbayHelper
 * @description defines helper class to handle searchs to Ebay API
 */
class EbayHelper {
    /** 
     * @description method to search in ebay API by a keyword, sorting by some ebay object attribute
     * @param searchPhrase keyword to search
     * @param sortBy sort by some eba object attribute. ~ like price
     * @param limit limit search to time optimization
     * @returns JSON data object with search results or error
     */
    async get(searchPhrase, sortBy, limit){
        let result;
        await EbayAPI.get(`buy/browse/v1/item_summary/search?q=${searchPhrase}&sort=${sortBy}&limit=${limit}`, {
                headers: ebayAuthHeaders
            })
            .then((response) => {
                result = response.data
            })
            .catch((err) => {
                console.log('Erro ao consultar EbayAPI:',err.response.data.errors[0].longMessage)
                result = err.response.data
            })
        
        return result
    }
}
/**
 * @exports EbayHelper class
 * @exports get() function to permit API calls from client
 */
module.exports = {
    EbayHelper,
    async get(req, res) {
        
        const ebayHelper = new EbayHelper()
        const { searchPhrase, sort, limit } = req.params
        const result = await ebayHelper.get(searchPhrase, sort, limit)

        return res.json(result)
    }
}