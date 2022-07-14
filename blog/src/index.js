var myModule = require('./function.js');
var fs = require('fs');
var path = require('path')

  async function main() {
  
    var input = await myModule.Ask("Nhap so : ").then(function(a){return a}).catch(function(a){return a})
  
    if(typeof input == "number"){
        if(myModule.isprime(input)){
            list = await myModule.fileName(__dirname)
            console.log(list.join(', '))
        }else{
            list = await myModule.fileName(path.join(__dirname,'..'))
            data = await myModule.readfile(path.join(path.join(__dirname,'..'),list[1]))
            console.log(data)
        }
    }
    else{
        console.log("Nhap sai dinh dang yeu cau")
    }
  }
  
main()