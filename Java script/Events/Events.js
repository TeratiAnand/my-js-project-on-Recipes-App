//click
// 1st way
//

// // 2nd way
// let btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//     btn.style.padding="15px 100px"
//     btn.style.color="white"
//     btn.style.background="royalblue"
// })
// db click
// let para=document.querySelector("p")
//     para.addEventListener("dblclick",()=>{
//         para.style.textAlign="justify"
//         para.style.color="red"
//         para.style.backgroundColor="blue"

//     }

    // )


    // mouse enter

    // let h2=document.querySelector("h2")
    // h2.style.border="2px solid green"
    // h2.addEventListener("mouseenter",()=>{
    //     h2.style.color="yellow"
    //     h2.style.background="green"
    //     h2.style.textAlign="center"
    // })

    // // mouse leave
    // h2.addEventListener("mouseleave",()=>{
    //     h2.style.color="green"
    //     h2.style.background="pink"
    //     h2.style.textAlign="center"

    // })


    // mouse move

    // let body=document.body
    // body.style.height="100vh"
    // body.style.border="2px solid black"
    // body.addEventListener("mousemove", ()=>{
    //     let red=Math.floor(Math.random()*255)
    //     let green=Math.floor(Math.random()*255)
    //     let blue= Math.floor(Math.random()*255)
    //     body.style.background=`rgb(${red},${green},${blue})`
    // })


    // input
    let nameField=document.querySelector("input")
    nameField.addEventListener("input",()=>{
            let red=Math.floor(Math.random()*255)
            let green=Math.floor(Math.random()*255)
            let blue= Math.floor(Math.random()*255)
         nameField.style.background=`rgb(${red},${green},${blue})`
    })
    // change
  let body=document.body
  nameField.addEventListenerI("change",()=>{
    body.style.background="purple"
  })