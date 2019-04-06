'use strict'
// Import Packages
const axios = require('axios')

//Import Custom Packages
const logger = require('./Logger')

class Kavenegar {

    constructor(){
        this.api_key = process.env.SMS_KEY;
    }

    static newInstance(){
        return new Kavenegar()
    }

    async simple(receptor, message){
        try{
            const url = `https://api.kavenegar.com/v1/${this.api_key}/sms/send.json`
            const response = await axios.get(url, {
                params:{
                    receptor,
                    message
                }
            })

            return response.status === 200
        } catch(err) {
            logger.error(err)
            return false;
        }
    }

    async send(receptor, message){
        try{
            const url = `https://api.kavenegar.com/v1/${this.api_key}/verify/lookup.json`
            const response = await axios.get(url, {
                params:{
                    receptor,
                    token:message,
                    template: 'arkadverify'
                }
            })

            return response.status === 200
        } catch(err) {
            logger.error(err)
            return false;
        }
    }

    async sendPassword(receptor, message){
        try{
            const url = `https://api.kavenegar.com/v1/${this.api_key}/verify/lookup.json`
            const response = await axios.get(url, {
                params:{
                    receptor,
                    token:message,
                    template: 'arkad-send-password'
                }
            })

            return response.status === 200
        } catch(err) {
            logger.error(err)
            return false;
        }
    }

    async tracking(receptor, message){
        try{
            const url = `https://api.kavenegar.com/v1/${this.api_key}/verify/lookup.json`
            const response = await axios.get(url, {
                params:{
                    receptor,
                    token:message,
                    template: 'payment'
                }
            })

            return response.status === 200
        } catch(err) {
            logger.error(err)
            return false;
        }
    }

    async sendForPassword(receptor, message) {
        try{
            const url = `https://api.kavenegar.com/v1/${this.api_key}/verify/lookup.json`
            const response = await axios.get(url, {
                params:{
                    receptor,
                    token:message,
                    template: 'arkadverify'
                }
            })

            return response.status === 200
        } catch(err) {
            logger.error(err)
            return false;
        }
    }
}

module.exports = Kavenegar