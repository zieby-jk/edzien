
let account = document.querySelector(".account")
let accountDefaultIcon = document.querySelector(".icon")
let accountActiveIcon = document.querySelector(".active-icon")
let heading = document.querySelector(".heading") 
let header = document.querySelector("header")
let registerDiv = document.querySelector(".register")
let registerLink = document.querySelector(".register-link")
let isAccountOptions = false;
account.onmouseover = () =>{
    accountDefaultIcon.style.opacity = 0;
    CreatingOptions()
    accountActiveIcon.style.opacity = 1;
    
}
account.onmouseleave= () =>{
    accountDefaultIcon.style.opacity = 1;
    accountActiveIcon.style.opacity = 0;
    
}

window.onload = () =>{
    Loading();
}

function Loading() {
    let dots = 0;
    let els = [];
    setInterval(() => {
        dots++;
        let el = document.createElement("p");
        el.style.display = "inline";
        el.style.gap = "small"
        el.textContent = ".";
        el.style.transition = ".3s ease-in";
        heading.appendChild(el);
        els.push(el);

        
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.opacity = "1";
        }, 100);

        
        if (dots == 3) {
            els.forEach(el=>{
                setTimeout(()=>{
                    el.style.opacity = "0";
                    setTimeout(() => {
                        heading.removeChild(el);
                    }, 300);
                }, 500);
            });
            dots = 0;
            els = [];
        }
    }, 900);
}

registerDiv.onmouseover = () =>{
    registerLink.style.color = "#00ffff"

}
registerDiv.onmouseleave = () => {
    registerLink.style.color = "#2854C5"
}
function CreatingOptions(){
    if(isAccountOptions){
        return;
    }
    isAccountOptions = true
    let options = 
    [
        {className: "account", htmlTag: "div"},
        {className: "settings", htmlTag: "div"},
        {className: "help", htmlTag: "div"},
    ]
    let option;
    
    let optionsContainer = document.createElement("div")
    optionsContainer.style.opacity = "0";
    setTimeout(()=>{
        optionsContainer.style.opacity = "1"
    }, 50)
    header.appendChild(optionsContainer)
    optionsContainer.classList.add("account-options")
    options.forEach(o=>{
        option = document.createElement(o.htmlTag);
        option.classList.add(o.className)
        optionsContainer.appendChild(option)
        console.log(option)
    })
}