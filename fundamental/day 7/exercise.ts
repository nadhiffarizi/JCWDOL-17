// NO 1 check 2 objects are equal -------------------
// Example
// Input : { a: 2 } & { a: 1 }
// Output: false
// Example
// Input : { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input : { a: 1 } & { a: 1 }
// Output: true

// function checkObject(obj:Object, obj2:Object){

//     // first option
//     // let objKeys1:string = JSON.stringify(obj)
//     // let objKeys2:string = JSON.stringify(obj2)

//     // if (objKeys1 !== objKeys2){
//     //     return false
//     // }

//     // second option (for one dimension object)
//     let objKeys1:string = Object.keys(obj).join()
//     let objKeys2:string = Object.keys(obj2).join()
    
//     if (objKeys1 !== objKeys2){
//         return false
//     }

//     let objVal1:string = Object.values(obj).join()
//     let objVal2:string = Object.values(obj2).join()

//     if(objVal1 !== objVal2){
//         return false
//     } 

//     return true
// }

// console.log(checkObject({a:{g: 6}}, {a:{g: 8}}));


// NO 2 intersection 2 objects ---------------------
// function intersection(obj:any, obj2:any){
//     let Dict:Record<any, any> = {};

//     for (const [key, val] of Object.entries(obj)){
//         if (obj[key] === obj2[key]){
//             Dict[key] = val
//         }
//     }

//     return Dict
    
// }

// console.log(intersection({a:1, b:2}, {a:1, c:3}));


// NO 3 merge two arrays an remove duplicate data
// type $Stud = {
//     name?: string,
//     email?: string
// }

// function mergeObj(arr1:$Stud[], arr2:$Stud[]):$Stud[]{
//     const notArr2 = arr1.filter((o, i)=>{
//         const indexFind = arr2.findIndex((o2, i2)=>{
//             return o.name === o2.name && o.email === o2.email
//         })

//         if(indexFind !== -1){ // has the same object
//             return false
//         } else{
//             return true
//         }
        
//     })

//     return [...notArr2, ...arr2]
// }

// console.log(mergeObj([{name:"student1", email: "a@gmail.com"}, {name:"student2", email:"b@gmail.com"}], [{name:"student1", email: "a@gmail.com"}, {name:"student3", email:"b@gmail.com"}]));

// NO 4 Switches property to value
// function switchProps(obj:Object):Object{

//     type Dict = Record<any, any>;
//     let myDict:Dict = {}

//     for (const [key, val] of Object.entries(obj)){
//         myDict[val] = key
//     }   
//     return Object.assign({}, myDict)
// }

// console.log(switchProps({name: 'David', age: 20}));

// NO 5 factorial
// function myFactor(n:number):number{
//     if (n === 1){
//         return 1
//     }
//     return n* myFactor(n-1)
// }

// console.log(myFactor(3));



 