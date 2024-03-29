const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=';


class Countries{

    constructor(url){
        if(typeof url !== "string"){
            throw new Error("Not a string!")
        }
        this.url = url;
    }

    send(oneParameter=2){
        if(typeof oneParameter !== "number"){
            throw new Error("oneParameter is not a number!")
        }
        let newUrl = this.url + oneParameter
        console.log(newUrl)
        return new Promise((resolve,reject)=>{
            get(newUrl, (error, meta, body) => {
                const { data } = JSON.parse(body);
                let statusCode = meta.status
                if(meta.status === 200){
                    resolve(data)
                }
                else{
                    reject(`We have error, status code: ${statusCode}`)
                }
            });
        })
    }

}

const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(4);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();

