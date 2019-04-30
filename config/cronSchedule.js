const cron = require('node-cron')
const Alert = require('./../src/models/AlertModel')
const MailHelper = require('./../src/controllers/MailController')

class CronSchedule {
    startSchedule() {
        
        this._prepareScheduleInMinutes(2)
        this._prepareScheduleInMinutes(10)
        this._prepareScheduleInMinutes(30)
    
    }

    _prepareScheduleInMinutes(minutes) {
        cron.schedule(`*/${minutes} * * * *`, async () => {
            try{
                const alerts = await Alert.find({interval : minutes})
                this._prepareMail(alerts)
                console.log(`Executando a tarefa a cada ${minutes} minuto`)
            } catch(err){
                if(err){
                    console.log(`Erro ao preparar consulta em ${minutes} min`, err)
                }
            }
        })
    }
    
    _prepareMail(alerts) {
        const mailHelper = new MailHelper()
        alerts.map((item) => mailHelper.prepareToSendMail(item))
    }
}

module.exports = new CronSchedule