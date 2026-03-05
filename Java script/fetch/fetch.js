// let data = fetch("https://fakestoreapi.com/products")
// console.log(data);
// data.then((something)=>{
//     console.log(something);
// })

//!FETCH()
//then()
// let data1 = fetch("https://fakestoreapi.com/products")
 // console.log(data1);
// data1.then((something)=>{
//     return something.json()
// }).then((finalData)=>{
//     console.log(finalData);
// })

//async and await
// let fetchData = async()=>{
// let data2 = await fetch("https://fakestoreapi.com/products");
// let finalData2 = await data2.json();
// let container = document.querySelector("#container")
// console.log(container);
// finalData2.forEach((element,index,array) =>{
//     container.innerHTML +=`
//     <h1>${element.id}</h1>
//     <h1>${element.title}</h1>
//     <img src = ${element.image}>
//     <p>${element.description}</p>
//     <h2>${element.price}</h2>
//  `
// })
// }
// fetchData()



let container = document.getElementById("container");
let fetchData = async()=>{
    let data2 = await fetch("https://fakestoreapi.com/products");
    let finalData2 = await data2.json();
    let container = document.querySelector("#container")
    console.log(container);
    finalData2.forEach((element,index,array) =>{
      
    //    cart cart-title  cart-img   cart-description cart-price
        let cart = document.createElement("div")
        let cartTitle = document.createElement("div")
        let cartImg= document.createElement("div")
        let cartDescription = document.createElement("div")
        let cartPrice = document.createElement("div")

        cart.classList.add("cart");
        cartTitle.classList.add("cart-title");
        cartImg.classList.add("cart-img");
        cartDescription.classList.add("cart-description")
        cartPrice.classList.add("cart-price")

        let h1 = document.createElement("h1")
        h1.textContent=element.title;
        cartTitle.append(h1);
        let img = document.createElement("img")
        img.setAttribute("src", element.image);
        // img.style.src = element.image;
        cartImg.append(img);
        cartDescription.textContent = element.description;
        cartPrice.textContent = element.price;

        cart.append(cartTitle, cartImg, cartDescription, cartPrice);
        container.append(cart);
    })
}
fetchData();