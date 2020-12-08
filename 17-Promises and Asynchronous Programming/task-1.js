const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countriesbaro';


function send(myURL){

    return new Promise((resolve,reject)=>
    {
        get(url, (error, meta, body) => {
            const { data } = JSON.parse(body);
            let statusCode = meta.status
            if(meta.status === 200){
                resolve(data)
            }
            else{
                reject(`We have error, status code: ${statusCode}`)
            }
        });
    }
    )}

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });



    