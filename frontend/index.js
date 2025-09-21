
let account = document.querySelector(".account")
let accuntDefaultIcon = document.querySelector(".icon")
let accuntActiveIcon = document.querySelector(".active-icon")
let heading = document.querySelector(".heading") 
let registerDiv = document.querySelector(".register")
let registerLink = document.querySelector(".register-link")
console.log(account)
account.onmouseover = () =>{
    accuntDefaultIcon.style.opacity = 0;
    accuntActiveIcon.style.display = "block";
    accuntActiveIcon.style.opacity = 1;
    
}
account.onmouseleave= () =>{
    accuntDefaultIcon.style.opacity = 1;
    accuntActiveIcon.style.opacity = 0;
    
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

        
        if (dots > 3) {
            els.forEach(el=>{
                setTimeout(()=>{
                    el.style.opacity = "0";
                    setTimeout(() => {
                        heading.removeChild(el);
                    }, 300);
                }, 300);
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