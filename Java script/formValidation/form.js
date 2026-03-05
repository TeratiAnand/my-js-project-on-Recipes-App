let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name=document.getElementById("name").value
    let password=document.getElementById( "password").value
    let cpassword=document.getElementById("cpassword").value
    let mob=document.getElementById("mob").value
    if(name.length<3 ||name.length>20){
        alert("please enter the name value between the range")
    }else{
        console.log(name)
    }
    console.log(mob)
    if(password!=cpassword){
        alert("password mis match")
    }else{
  
        console.log(password)  
    }
  
      console.log(cpassword)
      // mobile
let output=isNaN(mob);
output?alert("stupid fellow enter only numericals values")
:
console.log(mob);

});





// password eye
let p_eye=document.getElementById("p_eye");
// console.log(p_eye)
// console.log(cp_eye)
let passwordField= document.getElementById("password");
let pthere=false;
p_eye.addEventListener("click",()=>{
    if(pthere){
        passwordField.type="password"
        pthere=false;
    }else{
        passwordField.type="text"
        pthere=true;
    }
})
// c_eye

let cp_eye=document.getElementById("cp_eye")
let cpasswordField= document.getElementById("cpassword");
let cpthere=false;

cp_eye.addEventListener("click",()=>{
    if(cpthere){
        cpasswordField.type="password"
        cpthere=false
    }else{
        cpasswordField.type="text"
        cpthere=true;
    }
})