// let divison=document.getElementById("target");
// console.log(divison)
// console.log(`INNERtEXT:${divison.innerText}`);


//  let divison=document.getElementById("target");
//  console.log(divison)
//  console.log(`TEXTCONTENT:${divison.TEXTCONTENT}`);

// console.log(`INNER HTML:${divison.textContent}`);

// console.log(`${divison.innerText}`)
// console.log(`${divison.innerHTML}`)


// let section=document.querySelector("section")
// console.log(section)
// let setting=()=>{


// section.innerText="hello anand"

// section.innerHTML=`<h1>hello </h1> <p>hello and isam isma<p/>`
// };


// let heading =document.querySelector("h1")
// console.log(heading)
// console.log(heading.className)
// let h1=document.querySelector("h1")

// h1.classList.toggle("one","two","three")

// h1.classList.length
// console.log(heading.getAttribute("id"))
// console.log(heading.getAttribute("class"))
// console.log(heading.getAttribute("title"))

// console.log(heading.getAttributeNode("id"))
// console.log(heading.getAttributeNode("class"))
// console.log(heading.getAttributeNode("title"))
// console.log(heading.attributes)
// let divison=document.querySelector("div")
// console.log(divison)
// let what=()=>{
    
//     divison.setAttribute("id","anything")
// divison.setAttribute("class","any")
// divison.setAttribute("title","thing")
// }



// let h1=document.createElement("h1")
// let p=document.createElement("p")
// let button=document.createElement("button")
// console.log(h1)
// let h1Text=document.createTextNode("hello")
// let pText=document.createTextNode("hell")
// let buttonText=document.createTextNode("hllo")
// console.log(h1Text)
// let comment=document.createComment("comment")
// console.log(comment)
// h1.append(h1Text,pText,buttonText)

// p.appendChild(pText)
// console.log(p)
// let body=document.body
// console.log(body)
// body.append(h1,p,button)
// let mother=document.body
// // console.log(mother.children)
// console.log(mother.childNodes)

// body.appendChild(button)
// let btn=document.createElement("button")
// // console.log(btn)
// btn.innerText="hello"
// // console.log(`${btn.innerText}`)
//  btn=addEventListener("click",()=>{

// btn.style.padding="15px"
// btn.style.color="pink"
// })

// let data=fetch("https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json")

// data.then((data1)=>{
//     return data1.json();

// })
// .then((data3)=>{
//     console.log(data3)
//      let container=document.getElementById("container")
//      data3.array.forEach(element => {
//         container.innerHTML=`<h1>`${element.id}</h1> `
        
//      });
// })
// let fetchData1=async()=>{
//     let data=await fetch("https://api.github.com/users")
   
//     let finalData=await data.json()
//     let container=document.getElementById("container")
//     finalData.forEach(element => {
//         container.innerHTML+=`<h1>${element.id}</h1><h1>${element.login}</h1><img src=${element.avatar_url}`
    
        
//     });

// }
// fetchData1()
let data= fetch("https://api.github.com/users")
console.log(data)
 data1.then((data2)=>{
    return data1.json();
 })
    .then((data2)=>{
console.log(data2)

    })

