const fs = require('fs')

class Contenedor{
    constructor(filename){
        this.filename=filename
    }

 save(obj){
   return this.getData()
    .then(data => {
            let nextId=1  
            if(data.length>0){
              
            nextId = data[data.length-1].id+1
          }
          obj.id=nextId
          data.push(obj)
     return this.whriteData(data)
     .then(() => (obj))

    })
    .then(() => obj)  
    .catch(e =>{
        obj.id=1
        return this.whriteData([obj]).then(() =>obj)  
    }  
    )
 }

 getData(){
return fs.promises.readFile(this.filename,'utf-8')
.then(d =>JSON.parse(d))
        }

 whriteData(data){
 const stringdata = JSON.stringify(data)
    return fs.promises.writeFile(this.filename,stringdata)
         }
               
    
 }





module.exports = Contenedor