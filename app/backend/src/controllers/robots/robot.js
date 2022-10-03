const
START       = true
, TSE       = require('./tse')
, CronJob   = require('cron').CronJob
, cronTimer = "5 * * * * *" // a cada 5 segundos
;;

module.exports = class Robot {
    static init(){
        const job = new CronJob(cronTimer, function () {
            TSE.init();
        }, null, true, 'America/Sao_Paulo')
    }
}
