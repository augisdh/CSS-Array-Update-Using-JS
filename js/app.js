"use strict";

const initScreenHeight = window.innerHeight;
const htmlBody = document.getElementsByTagName("body")[0];

function screenHeight(){
    const h = window.innerHeight;
    htmlBody.style.height = h + "px";
}

if(screenHeight() !== true){
    htmlBody.style.height = initScreenHeight + "px";
}

const inputs = document.querySelectorAll("input");

function updateCss(){
    const sizing = this.dataset.unit || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

inputs.forEach(input => input.addEventListener("change", updateCss));
inputs.forEach(input => input.addEventListener("mousemove", updateCss));