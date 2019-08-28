
import * as methods from "./methods"
const express =  require("express"),

// fs = require('fs'),
// randomstring = require("randomstring"),
jsonfile = require('jsonfile'),
path = require('path'),
bodyParser = require('body-parser');

// const app = express()
// import notifier from './notifier'


class Server{
  
  
  constructor(sandbox){

    this.sb = sandbox 
    this.xpress = express
    this.http = this.xpress() 
    this.path = path
    this.html = []
    this.request = null
    this.componentCount = 0
    this.componentId = [] 
    this.ssrComponentLen = 0
    this.componentRefLen = 0 
    this.fixedCompS = {
    	
    	 before: [],
    	 after: []
    	
    } 
    this.compData = []
    this.dependiks = {

     
      jsonfile: jsonfile,
      bodyParser: bodyParser
    }
    
    



    // // methods

   

     this.init = methods.init
     this.listens = methods.listens
     this.emit = methods.emit
     this.startServer = methods.startServer
     this.startPreRoutes = methods.startPreRoutes
     this.startRouting = methods.startRouting
     this.runServer = methods.runServer
     this.renderHtml = methods.renderHtml
     this.sendHtml = methods.sendHtml 
     
  }


  

}

export default Server