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


        find(query){
            if(query.age){
                if(!(query.age.min || query.age.max)){
                    throw new Error("Age: Min or Max should be included.")
                }
            }

            if(query.salary){
                if(!(query.salary.min || query.salary.max)){
                    throw new Error("Salary: Min or Max should be included.")
                }
            }

            if(typeof query.name !== "string" && typeof query.name !== "undefined" ||
                typeof query.country !== "string" && typeof query.country !== "undefined"
            
            ){
                throw new Error("Not a String")
            }

            let queryKeys = Object.keys(query)

            for (let item of queryKeys){
                console.log(item)
                if(item !== "name" && item !== "country" && item !== "age" && item !=="salary"){
                    throw new Error("Query Validation Failed!")
                }
            }
            

            let usersArray = this.readAll()
            console.log(usersArray)
    
            usersArray=usersArray.filter((obj)=>{
             
                if((query.name === obj.name || typeof query.name === "undefined") &&
                   (query.country === obj.country || typeof query.country === "undefined") &&
                   (typeof query.age === "undefined" || typeof query.age.min === "undefined" || query.age.min<obj.age) &&
                   (typeof query.age === "undefined" || typeof query.age.max === "undefined" || query.age.max>obj.age) &&
                   (typeof query.salary === "undefined" || typeof query.salary.min === "undefined" || query.salary.min<obj.salary) &&
                   (typeof query.salary === "undefined" || typeof query.salary.max === "undefined" || query.salary.max>obj.salary)
                ){
                    return obj
                }
            })
            console.log("new")
            console.log(usersArray)
        }
    
}

let db = new DB()

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'de', // required field with type string
    salary: 500, // required field with type number
};
const jabaxa = {
    name: 'Jabaxa', // required field with type string
    age: 50, // required field with type number
    country: 'ge', // required field with type string
    salary: 3000, // required field with type number
};


const id = db.create(person);
const id2 = db.create(jabaxa);

db.update(id, { age: 22 });


const query = {
    country: 'ge',
    age:{
        min:20,
        max:100
    },
    salary:{
        min:10,
        max:11200
    }

};

const customers = db.find(query); // array of users

console.log(customers)


