const fs = require('fs');
module.exports = {
    isprime: function isprime(n){       
        var result = 1;
        if (n < 2) return result = 0; 
        for(var i = 2 ; i <= Math.sqrt(n) ; i++){
            if(n % i == 0){
                result = 0;
                break;
            }
        }
        return result;
    },

    Ask: function Ask(query) {
        var readln = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout
        })
        return new Promise((resolve,reject) => readln.question(query, ans => {
        readln.close();
        input = parseInt(ans)
        if( !isNaN(input) ){
            resolve(input);
        }
        else{
            reject(ans);
        }
      }))
    },

    fileName: function fileName (path){
        return new Promise(async (resolve)=>{
            const File = []
            fs.readdir(path,{withFileTypes : true}, (err, files)=>{
                for(const file of files){
                    if(file.isFile()){
                        File.push(file.name)
                    }
                }
                resolve(File)
            })
        })
    },
    
    readfile: function readfile(path){
        return new Promise (async (resolve)=>{
            fs.readFile(path,"utf8", (err,data)=>{
                if(err){
                    console.error(err);
                    return;
                }
                resolve(data)
            })
        })
    }
}