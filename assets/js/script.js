"use strict";

let state = false;
let element = document.getElementById("eye");

function toggle(){
  if(state){
    document.getElementById("passWord").setAttribute("type","password");
    element.classList.remove("fa-eye-slash");
    state = false;
  }else{
    document.getElementById("passWord").setAttribute("type", "text");
    element.classList.add("fa-eye-slash");
    state = true;
  }
}