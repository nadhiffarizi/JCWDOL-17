// populate object MUST use dictionary RECORD in typescript

// let $arr:(number|string)[] = [1, 2, 3, "hahaha"]

// type Dict = Record<number|string, number|string>

// let $obj:Dict = {}


// for (const [i, val] of $arr.entries()){
//     // console.log(`index ${i}, val ${val}`);
//     $obj[val] = val.toString() + "recorded"
    
// }

// console.log($obj["hahaha"]);

// NO. 1 -------------------------------------------------
// type $Stud = {
//     name:string,
//     email:string,
//     age:string,
//     score:number
// }

// type $Age= {
//     highest:number,
//     lowest:number,
//     average:number
// }

// type $Score = {
//     highest:number,
//     lowest:number,
//     average: number
// }


// const studs:$Stud[] = []

// function calculateStud(input:$Stud[]):($Age & $Score)[]{
//     let tempAges:number[] = []
//     let tempScore:number[] = []
//     for (let stud of input){
//         tempAges.push(Number(stud.age))
//         tempScore.push(Number(stud.score))
//     }

//     // calc ages
//     let max:number = Math.max(...tempAges)
//     let min:number = Math.min(...tempAges)
//     let total:number = tempAges.reduce((acc, val)=> acc+val, 0)
//     let avg:number = total / tempAges.length
    
    
//     const objAge:$Age = {
//         highest:max,
//         lowest:min,
//         average:avg
//     }

//     // Calc Score
//     max = Math.max(...tempScore)
//     min = Math.min(...tempScore)
//     total = tempScore.reduce((acc, val)=> acc+val, 0)
//     avg = total / tempScore.length

    
//     const objScore:$Score = {
//         highest:max,
//         lowest:min,
//         average:avg
//     }

//     return [objAge, objScore]
    
    
// }

// NO 2 ----------------------------------------------
// class MyProduct{
//     public name:string;
//     public price:string;
//     constructor(name:string, price:string){
//         this.name = name;
//         this.price = price
//     }
// }

// class MyTransaction extends MyProduct{
//     public total:number;
//     public product:Record<string, any>
    
//     constructor(name:string, price:string, total:number){
//         super(name, price)
//         this.total = total
//         this.product = {
//             prodData: [new MyProduct(name, price)],
//             qtyTotal: 0
//         }
//     }

//     public addCart(prod:MyProduct, qty:number){
//         this.product.prodData.push(prod)
//         this.product.qtyTotal += qty
//     }

//     public totalTransaction():number{
//         return this.product.prodData.length
//     }

//     public checkout():MyProduct[]{
//         return this.product.prodData
//     }

// }

// const example:MyTransaction = new MyTransaction("tshirt", "1000", 2)

// example.addCart(new MyProduct("tshirt", "5000"), 300)

// console.log(example.totalTransaction());
// console.log(example.checkout());


