
let account = document.querySelector(".account")
let accountDefaultIcon = document.querySelector(".icon")
let accountActiveIcon = document.querySelector(".active-icon")
let heading = document.querySelector(".heading")
let header = document.querySelector("header")
let registerDiv = document.querySelector(".register")
let registerLink = document.querySelector(".register-link")
let isAccountOptions = false;
let isAccountOptionsClicked = false;
let optionsContainer;

account.onmouseover = () => {
    accountDefaultIcon.style.opacity = 0;
    CreatingOptions()
    CleanCounting();
    accountActiveIcon.style.opacity = 1;


}
let interval;
let leavingTime;
account.onmouseleave = async () => {
    accountDefaultIcon.style.opacity = 1;
    accountActiveIcon.style.opacity = 0;
    RemoveAccountOptions();
};
window.onload = () => {
    Loading();
}
function CleanCounting() {
    if (interval != null) {
        clearInterval(interval)
    }
}
async function RemoveAccountOptions() {
    leavingTime = 0;
    CleanCounting();

    interval = setInterval(() => {
        leavingTime++
        console.log(leavingTime)

    }, 1000)
    await new Promise(time => setTimeout(time, 1000));


    if (isAccountOptions && !isAccountOptionsClicked && leavingTime >= 1) {
        optionsContainer.style.transition = "opacity 0.5s ease";
        optionsContainer.style.opacity = "0";
        setTimeout(() => {
            optionsContainer.remove();
            CleanCounting()
        }, 500);

        isAccountOptions = false;
    }
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
            els.forEach(el => {
                setTimeout(() => {
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

registerDiv.onmouseover = () => {
    registerLink.style.color = "#00ffff"

}
registerDiv.onmouseleave = () => {
    registerLink.style.color = "#2854C5"
}
function CreatingOptions() {
    if (isAccountOptions) {
        return;
    }
    isAccountOptions = true
    let options =
        [
            { className: "account-info", htmlTag: "div", delayTime: 300 },
            { className: "settings", htmlTag: "div", delayTime: 600 },
            { className: "help", htmlTag: "div", delayTime: 900 }
        ]


    optionsContainer = document.createElement("div")
    optionsContainer.style.opacity = "0";
    setTimeout(() => {
        optionsContainer.style.opacity = "1"
    }, 50)
    header.appendChild(optionsContainer)
    optionsContainer.classList.add("account-options")
    let x = 0;
    options.forEach(o => {
        x++
        let option = document.createElement(o.htmlTag);
        optionsContainer.appendChild(option)
        option.style.opacity = "0";
        setTimeout(() => {
            option.style.opacity = "1"
        }, o.delayTime)
        option.classList.add(o.className)
        option.classList.add("account-option")
        option.textContent = `opcja ${x}`

        if (optionsContainer) {
            Array.from(optionsContainer.children).forEach(child => {
                child.onmouseover = () => {
                    CleanCounting();
                };
                child.onmouseleave = RemoveAccountOptions;
            });
        }


    })

}
