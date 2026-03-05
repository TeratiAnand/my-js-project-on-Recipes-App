let outer=document.querySelector("#outer")
let inner=document.querySelector("#inner")

// events in bubbling phase
outer.addEventListener("click",()=>{
    alert("outer box clicked ")
},false)
inner.addEventListener("click",()=>{
    alert("inner box clicked ")
},false)
// evevts in capturing phase
// outer.addEventListener("click",()=>{
//     alert("outer box clicked ")
// },true)
// inner.addEventListener("click",()=>{
//     alert("inner box clicked ")
// },true)

// Stop propagation

// outer.addEventListener("click",()=>{
//     alert("outer box clicked ")
// },false)
// inner.addEventListener("click",(e)=>{
//     alert("inner box clicked ")
//     e.stopPropagation
// },false)

