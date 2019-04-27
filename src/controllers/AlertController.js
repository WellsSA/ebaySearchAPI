const Alert = require('../models/AlertModel')
const MailHelper = require('./MailController')

module.exports = {
    // Cria o alerta na base de dados
    async create(req, res) {
        const save = await Alert.create(req.body)
        
        req.io.emit('alertCreated', save)
        
        return res.json(save)
    },

    async read(req, res) {
        const list = await Alert.find({})

        return res.json(list)
    },

    async update(req, res) {
        const update = await Alert.updateOne({ _id : req.params._id }, req.body)

        req.io.emit('alertUpdated', { _id: req.params._id, ...req.body})

        return res.json(update)
    },

    async delete(req, res) {
        const del = await Alert.findByIdAndRemove(req.params._id)

        req.io.emit('alertDeleted', del)

        return res.json(del)
    },
    // Prepara para enviar alertas por email
    async notify(req, res){
        const alerts = await Alert.find({})
        const mailHelper = new MailHelper()
        alerts.map((item) => mailHelper.prepareToSendMail(item))
        return res.send('Preparando para disparar alertas')
    }
}