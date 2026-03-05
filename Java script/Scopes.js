// Global scope
// var a= 10;
// let b=20;
// const c=30;
// Access directly id possible for all
// console.log(a)
// console.log(b)
// console.log(c)
//Accessing inside function is possible for all 
// function anand(){
//     console.log("(Accessing inside function") 
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// anand()
//accessing inside block is possible for all 
// {
//     console.log("accessing inside block ")
//     console.log(a)
//     console.log(b) 
//      console.log(c)
// }
// Local or function scope 
function home(){
    var kid1="Anand"
    let kid2="vinod"
    const kid3="Abhinay"
   
    
    console.log(kid1)
    console.log(kid2)
    console.log(kid3)

}
home();
// Accessomg pitsode fimctopm
console.log("Accessing outside function")
//console.log(kid1)
//console.log(kid2)
//console.log(kid3)
