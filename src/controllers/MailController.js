const { EbayHelper } = require('./EbayAPIController')
const { transport, hostMail } = require('./../../config/smtp')

class MailHelper {

    async prepareToSendMail(item) {
        const { email, searchPhrase, interval } = item
        const sortBy = 'price', limitIn = 3

        // setInterval(async () => {

            //@ToDo chamar API Ebay e pegar produtos para gerar o corpo do e-mail
            const ebay = new EbayHelper()
            const ebayResponse = await ebay.get(searchPhrase, sortBy, limitIn)
            const { itemSummaries } = ebayResponse

            let mailBody = (!itemSummaries) ? this.negativeMailBody(searchPhrase, interval) 
                                            : this.PositiveMailBody(itemSummaries, searchPhrase, interval)

            const mailTitle = `${searchPhrase} deals on eBay right now!`                                
            console.log('---------------------')
            console.log(mailBody)
            //@ToDo mandar e-mail
            //@Note descomentar envio de emails para testes
            const from = hostMail
            this.sendMail(from, email, mailTitle, mailBody)
            console.log(`Enviar email a cada ${interval} minutos para ${email} sobre palavra_chave ${searchPhrase}`)
        // }, interval * 1000)
    }

    PositiveMailBody(itemSummaries, searchPhrase, interval) {
        
        let productsBody = ''
        itemSummaries.map(item => {
            const { title, price, itemWebUrl } = item
            productsBody += `<h2><a href="${itemWebUrl}"><strong>${title}</strong> just for ${price.currency} ${price.value}</a></h2>\n`
            return item
        })

        return `
            The boss went crazy! It's just TODAY!

            ${searchPhrase} deals on eBay with the LOWEST PRICES!!

            ${productsBody}
            
            Click and check it out! :D

            Note: You will receive updates at every ${interval} minutes!

            you can manage it at https://localhost:3000
        `
    }

    negativeMailBody(searchPhrase, interval){
        return `
            Come peacefully! Come peacefully!
            
            We haven't ${searchPhrase} deals on Ebay for now!
            
            But don't worry, you will receive updates at every ${interval} minutes!

            It's cool, isn't it? Haha

            you can manage it at https://localhost:3000
        `
    }
    /**
     * @param { from, to, subject, html } email 
     */
    async sendMail(from, to, subject, html) {

        const email = { from, to, subject, html }

        // const email = {
        //     from: 'startupenvia@envia.io', // @ToDo pegar da variável de ambiente
        //     to: email,
        //     subject: 'Node.js ♥ unicode',  // Um assunto bacana :-) 
        //     html: 'E-mail foi enviado do <strong>Node.js</strong>' // O conteúdo do e-mail
        // }
        transport.sendMail(email, function(err, info){
        if(err)
            throw err; // Oops, algo de errado aconteceu.

        console.log('Email enviado! Leia as informações adicionais: ', info);
        });
    }
}

module.exports = MailHelper