class DB{

    constructor(){
        this.users = new Map()
    }

    create(obj) {
        if(typeof obj !== "object" || obj instanceof Array || obj instanceof Map
        || obj instanceof WeakMap|| obj instanceof Set || obj instanceof WeakSet){
            throw new Error("Not an Object")
        }else if(typeof obj.name !== "string" || typeof obj.age !== "number"
        || typeof obj.country !== "string" || typeof obj.salary !== "number"
        ){
            throw new Error("Not a correct Object")
        }
        let objKeys = Object.keys(obj)
        for(const item of objKeys){
            if(item !== "name" && item !== "age" && item !== "country" && item !== "salary"){
                throw new Error("Invalid Object")
            }
        }


        let id = Symbol()
        obj.id = id

        this.users.set(id,obj)

        return id
    }


    read(id){
        if(typeof id === "undefined"){
            throw new Error("Please pass a parameter.")
        }else if(typeof id !== "symbol"){
            throw new Error("Not a Symbol")
        }

        let user = this.users.get(id)
        if(typeof user === "undefined"){
            return null
        }
        return this.users.get(id);
    }

    readAll(){
        if (arguments.length >0){
            throw new Error("Should not pass an argument")
        }
         return [...this.users.values()]
    }

    update(id,objChange){
        if(typeof id !== "symbol"){
            throw new Error("Not a symbol")
        } else if(!this.users.has(id)){
            throw new Error("Id ar moidzebna")
        }
        //mgoni kidea dasamatebeli checkebi
        let objKeys = Object.keys(objChange)
        for(const item of objKeys){
            if(item !== "name" && item !== "age" && item !== "country" && item !== "salary"){
                throw new Error("Invalid Object")
            }
        }
        
        let currObj = this.users.get(id)
        Object.assign(currObj,objChange)
    }

    delete(id){
        if(typeof id !== "symbol"){
            throw new Error("Not a symbol")
        } else if(!this.users.has(id)){
            throw new Error("Id ar moidzebna")
        }
        this.users.delete(id)
    }
}

let db = new DB()

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500, // required field with type number
};


const id = db.create(person);

db.update(id, { age: 22 });

console.log(db.readAll())

console.log(db.read(Symbol()))