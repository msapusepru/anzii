
import * as methods from "./methods"
let config = null

try {

  const conif = require('/confy/') 
  config = conif.default
  console.log('Config file has been successfully required')
  
} catch (error) {
  
  console.log('No configuration file has been configured')
  config = null
}
// const config = require('/confy').default

// import config from '/confy'
console.log('THE CONFIG IN CONFIG')
console.log(config)

// Dependecies 


const envObserver = require('config')
const supportsColor = require('supports-color');
 




class Config{
  
  
  constructor(pao){

    this.pao = pao
    this.config = config 
    this.envObserver = envObserver 
    this.supportsColor = supportsColor
    this.env = 'development'
    this.aliases = {development: 'dev',production: 'prod',staging: 'stage'}


    this.init = methods.init
    this.configure = methods.configure
    this.enviroment = methods.enviroment
  }


  

}

export default Config