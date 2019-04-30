const cron = require('node-cron')
const Alert = require('./../src/models/AlertModel')
const MailHelper = require('./../src/controllers/MailController')

/**
 * 
 * @class CronSchedule
 * @description set up the configuration to use cron to send mails 
 *              every 2, 10 or 30 minutes
 */
class CronSchedule {
    /**
     * @description function used to starts the cron scheduling
     */
    startSchedule() {
        //defining scheduling for 2, 10 or 30 minutes
        this._prepareScheduleInMinutes(2)
        this._prepareScheduleInMinutes(10)
        this._prepareScheduleInMinutes(30)
    
    }
    /**
     * @description function to define how cron get database information and
     *              start to send mails
     * @param { int } minutes the interval to schedule cron 
     */
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
    /**
     * @description private function to call MailHelper and prepare mails
     * @param { object } alerts the item of database that will be used to define searchPhrase, email n' interval 
     */
    _prepareMail(alerts) {
        const mailHelper = new MailHelper()
        alerts.map((item) => mailHelper.prepareToSendMail(item))
    }
}
/**
 * @exports CronSchedule instance ready to use
 */
module.exports = new CronSchedule