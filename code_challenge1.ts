// 01. LENGTH OF ARGUMENT --------------------

// const argumentsLength = function(...args:any[]) {
//     return args.length
// };

// /**
//  * argumentsLength(1, 2, 3); // 3
//  */

// console.log(argumentsLength([1, 2, 3])); // 3

// 02. COUNTER II using type object as an output------------------------------
// type Counter = {
//     increment: () => number,
//     decrement: () => number,
//     reset: () => number,
// }


// var createCounter = function(init:number) {
//     const resetVal:number = init;

//     let currValue:number = init;

//     const output:Counter ={
//         decrement: ()=>{
//             currValue --
//             return currValue
//         },

//         increment: ()=>{
//             currValue ++
//             return currValue
//         },
//         reset: () => {currValue =resetVal; return currValue}

//     }

//     return output

// };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


// 03. COUNTER Function as an output------------------------------

// function createCounter(n: number): () => number {

//     let currVal:number = n;
//     return function():number {
//         return currVal++
//     }
// }


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// const counter = createCounter(10)
// console.log(counter(), counter(), counter());


// 04. SLEEP Asynchronous promise------------------------------
// async function sleep(millis: number): Promise<void> {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve()    
//         }, millis);
        
//     })
// }   

// /** 
//  * let t = Date.now()
//  * sleep(100).then(() => console.log(Date.now() - t)) // 100
//  */

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100

// 05.  Array Reduce Transformation ---------------------
// type Fn = (accum: number, curr: number) => number

// function reduce(nums: number[], fn: Fn, init: number): number {

//     if (nums.length >=1 && init ===0){
//         return nums.reduce((a, c)=>{
//             return a + c
//         })
//     } else if (nums.length >=1 && init !==0){
//         return nums.reduce(fn, init)
//     } else {
//         return init
//     }
    
// };

// let callback:Fn = (accum: number, curr: number)=>{
//     return accum + curr*curr
// }

// console.log(reduce([1, 2, 3, 4], callback, 0));

// 06. array last use pop ---------------------------------
// interface Array<T> {
//     last(): T | -1;
// }

// Array.prototype.last = function() {
//     if (this.length >0){
//         return this.pop()
//     } else {
//         return -1
//     }
// };

// /**
//  * const arr = [1, 2, 3];
//  * arr.last(); // 3
//  */

// const $arr = [1, 2, 3];
//  // 3
// console.log($arr.last());


// NO 7 chunked array
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type Obj = Record<string, JSONValue> | Array<JSONValue>;

// function chunk(arr: Obj[], size: number): Obj[][] {
//     let temp:Obj[] = []
//     let result:Obj[][] = []
//     let i =0; 
    
//     while (arr.length > size){
//         temp = arr.splice(0, size)
//         result.push(temp)
//         temp = []
//     }

//     if (arr.length !== 0){
//         result.push(arr)
//     }

//     return result

// };

// console.log('----',chunk(JSON.parse('[8,5,3,2,6]'), 6));

// NO 8 Function Composition -------------------------------------------
// type F = (x: number) => number;

// function compose(functions: F[]): F {
    
//     return function(x) {
//         let temp:number = x
//         for (let i=functions.length-1; i>= 0; i--){         
//             temp = functions[i](temp)
//         }

//         return temp
//     }
// };

// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4));

// NO 9 array wrapper  ---- write class return sum and stringify
// class ArrayWrapper {
//     $arr:number[];
    
//     constructor(nums: number[]) {
//         this.$arr = nums
//     }
    
//     valueOf(): number {
//         if (this.$arr.length!==0) return this.$arr.reduce((accum, curr) => accum+curr)
//         else return 0
        
//     }
    
//     toString(): string {
//         let temp:string = this.$arr.join(',')
//         return '['+temp+']'
//     }
// };


// NO 10. Fibonacci sequence using yield and resume function
// function* fibGenerator(): Generator<number, any, number> {
//     let temp1:number =0
//     yield temp1

//     let temp2:number=1
//     yield temp2

//     let result:number;
//     while (true){
//         result = temp1+temp2
//         temp1 = temp2
//         temp2 = result
//         yield result
//     }
    
    
// };

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

// const gen = fibGenerator();
// console.log(gen.next().value); //0
// console.log(gen.next().value); //1
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3

// NO 11.  Create Hellow world function
// function createHelloWorld() {
    
//     return function(...args:any): string {
//         return "Hello World"
//     };
// };

// /**
//  * const f = createHelloWorld();
//  * f(); // "Hello World"
//  */
// const f = createHelloWorld();
// console.log(f());

// NO. 12 Filer elements from an array
// type Fn = (n: number, i: number) => any

// function filter(arr: number[], fn: Fn): number[] {

//     return arr.filter(fn)
// };

// NO. 13 Apply transform over each element in array
// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
//     return arr.map(fn)
// };

// NO. 14 To be or not to be
// type ToBeOrNotToBe = {
//     toBe: (val: any) => boolean;
//     notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//     const result:ToBeOrNotToBe = {
//         toBe: (p:any) =>{
//             if (p === val){
//                 return true
//             } else{
//                 throw new Error("Not Equal")
//             }
//         },

//         notToBe: (p:any) =>{
//             if (p !== val){
//                 return true
//             } else {
//                 throw new Error("Equal")
//             }
//         }
//     }

//     return result
// };

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// NO 15 check if object instance of class
// function checkIfInstanceOf(obj: any, classFunction: any): boolean {

//     if(obj==null || classFunction==null || !(classFunction instanceof Function)) {
//         return false;
//     } else{ // primitive values and object
//         let protoNow = Object.getPrototypeOf(obj)

//         while (protoNow!== null && protoNow!== undefined){
//             if (protoNow === classFunction.prototype){
//                 return true
//             }
//             protoNow = Object.getPrototypeOf(protoNow)
//         }

//         return  false
//     }

// };

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

// NO 16 Join two array by id
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type ArrayType = { "id": number } & Record<string, JSONValue>;

// function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    
//     // dictionary
//     type Dict = Record<number, ArrayType>

//     let records:Dict = {}

//     // populate dict 1 for arr1
//     for (let obj of arr1){
//         records[obj.id] = obj
//     }

//     // populate dict 2 for arr2
//     for(let obj of arr2){
//         records[obj.id] = {... records[obj.id], ...obj}
//     }

//     return Object.values(records)
// };

// let $data1:ArrayType[] = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]

// let $data2:ArrayType[] = [{"id":1,"b":{"c": 84},"v":[1,3]}]

// console.log(join($data1, $data2));

// NO. 17 Memoised function (caching) ----------------------
// type Fn = (...params: number[]) => number

// function memoize(fn: Fn): Fn {
//     type Dict = Record<string, number>

//     let cacheFn:Function = ()=> {}
//     let cacheArgs: Dict = {} // store previous 
//     let cacheResult: number =0;
//     return function(...args) {
//         if (fn.prototype === cacheFn.prototype && (cacheArgs[args.toString()] !== undefined)){
//             console.log("cache");
//             //search for record 
//             cacheResult = cacheArgs[args.toString()]
//             return cacheResult
//         } else{
//             console.log("no cache");
            
//             cacheFn = fn
//             cacheResult = fn(...args)
//             cacheArgs[args.toString()] = cacheResult
//             return cacheResult
//         }
//     }
// }

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
//  let callCount = 0;
//  const memoizedFn = memoize(function (a, b) {
//  	callCount += 1;
//     return a + b;
// })

// console.log(memoizedFn(2, 2));         // 4
// console.log(memoizedFn(2, 2));         // 4
// console.log("call count:", callCount) // 1 
// console.log(memoizedFn(1, 2));         // 3
// console.log("call count:", callCount) // 2 
// console.log(memoizedFn());         // 
// console.log("call count:", callCount) //  


let s:string[] = "javascript, sdba".split(',')
for (let i =0; i<s.length; i+=1){
    // s.push(s[i])
    console.log(s[i]);
    
    
}

console.log(s);









