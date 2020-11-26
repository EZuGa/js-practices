const data = {
    name: 'fred',
    age: 10,
    jabaxa:{
        name:"jabaxa"
    },
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    },
    mergeDeepRight(obj,self=this){
        for(keys in obj){
            if(keys in self){
            if(obj[keys] instanceof Object && !(obj[keys] instanceof Array)){
                this.mergeDeepRight(obj[keys],self[keys])
            }else if(obj[keys] instanceof Array){
                self[keys]=self[keys].concat(obj[keys])
            }
            else{
                self[keys]= obj[keys]
            }
        }else{
            self[keys] = obj[keys]
        }
        }
    },
};
Object.defineProperty(data,"mergeDeepRight",{
    enumerable: false,
})


data.mergeDeepRight({
    age: 40,
    gio:{
        name:"gio"
    },
    contact: {
        email: 'baa@example.com',
        beru:{
            name:"beru"
        },
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});


console.log(data)
