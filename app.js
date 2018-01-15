const mysql = require("mysql");
const inquirer = require("inquirer");
const dbConnection = require("config/config.json");

function run(){
    if (dbConnection.password === "" || dbConnection.database === ""){
        // run prompt asking for password and db and set inside the dbConnection variable 
        connectionPrompt();
    } else{
        // run normal 
    }
}

function connectionPrompt(){
    inquirer
        .prompt([
            {
                name: "PW",
                type: "input",
                message: "Please provide your password to connect to your SQL database"
            },
            {
                name:"DB",
                type:"input",
                message:"Please provide the name of the DB you're using"
            }
        ]).then(function(answers){
            dbConnection.password = answers.PW;
            dbConnection.database = answers.DB;
            mysql.createConnection(dbConnection);
            connection.connect(function(err){
                if (err) {
                    console.log(err);
                    console.log(`There seems to be an error, please check the config.json file to configure your DB connection manually and rerun the app`);
                }
            })
        })
}

function chooseSource(){
    inquirer
        .prompt({
            name:"source",
            type:"list",
            message:"Which source file is being used?",
            choices:[
                "TRAXSOURCE CSV",
                "BEATPORT CSV"
            ]
        }).then(function(answer){
            if(answer.source === "TRAXSOURCE CSV"){
                TRAXchooseAction();
            } else {
                BEATchooseAction();
            }
        })
}

function TRAXchooseAction(){
    inquirer
        .prompt({
            name:"action",
            type:"list",
            message:"What would you like to do?",
            choices: [
                "Search by Track Artist(s)",
                "Search by Track Version"
            ]
        }).then(function(answer){
            switch(answer.action){
                case "Search by Track Artist(s)":
                    artistSearch();
                    break;
                
                case "Search by Track Version":
                    trackSearch();
                    break;
            }
        })
}

function BEATchooseAction(){
    inquirer
        .prompt({
            name:"action",
            type:"list",
            message:"What would you like to do?",
            choices: [
                "Search by TRACK_ARTIST",
                "Search by REMIXER_NAME"
            ]
        }).then(function(answer){
            switch(answer.action){
                case "Search by TRACK_ARTIST":
                    artistSearch();
                    break;
                
                case "Search by REMIXER_NAME":
                    RemixerSearch();
                    break;
            }
        })
}