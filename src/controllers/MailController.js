const { EbayHelper } = require('./EbayAPIController')
const transport = require('./../../config/smtp')

class MailHelper {

    async prepareToSendMail(item) {
        const { email, searchPhrase, interval } = item
        const sortBy = 'price', limitIn = 3

        setInterval(async () => {

            //@ToDo chamar API Ebay e pegar produtos para gerar o corpo do e-mail
            // const ebay = new EbayHelper()
            // const products = await ebay.get(searchPhrase, sortBy, limitIn)
            
            //@ToDo mandar e-mail
            //@Note descomentar envio de emails para testes
            // sendMail({
            //     from: 'startupenvia@envia.io', // @ToDo pegar da variável de ambiente
            //     to: email,
            //     subject: 'Node.js ♥ unicode',  // Um assunto bacana :-) 
            //     html: 'E-mail foi enviado do <strong>Node.js</strong>' // O conteúdo do e-mail
            // })
            console.log(`Enviar email a cada ${interval} minutos para ${email} sobre palavra_chave ${searchPhrase}`)
        }, interval * 1000)
    }
    /**
     * @param { from, to, subject, html } email 
     */
    async sendMail(email) {

        transport.sendMail(email, function(err, info){
        if(err)
            throw err; // Oops, algo de errado aconteceu.

        console.log('Email enviado! Leia as informações adicionais: ', info);
        });
    }
}

module.exports = MailHelper