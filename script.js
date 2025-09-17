let plusBtn;
let buttonsPlus;
let currentPage;
let lastExem;
window.addEventListener("load", ()=> {
    plusBtn = document.getElementById("plus-button");
    plusBtn.addEventListener("click", plusBtnManager);
    buttonsPlus = document.getElementsByClassName("plus-button-spec");
    getTimeOfDay();
    document.getElementById("menu-button").addEventListener("click", openSideMenu);
    document.getElementById("close-menu-button").addEventListener("click", closeSideMenu);
    currentPage = window.location.href;
    currentPage = currentPage.split("/");
    currentPage = currentPage[currentPage.length -1];
    if (currentPage === "exemptions-page.html") {
        document.getElementById("current-exemption-btn").addEventListener("click", exemptionPageManager);
        document.getElementById("last-exemption-btn").addEventListener("click", exemptionPageManager);
        document.getElementById("last-exemption-link").addEventListener("click", () => { window.location.href = "last-exemption.html"});
        document.getElementById("exemption-link").addEventListener("click", () => { window.location.href = "exemption.html"})
    }
    if (currentPage === "exemption.html" || currentPage === "last-exemption.html") {
        document.getElementById("plus-button").style.display="none";
        document.getElementById("time-text-name").style.display="none";
    }
    if (currentPage === "exemptions-page.html") {
        document.getElementById("time-text-name").style.display="none";
        console.log(lastExem);
        if (lastExem) {
            document.getElementById("current-exemption-btn").style.fontWeight = "500";
            document.getElementById("last-exemption-btn").style.fontWeight = "700";
            document.getElementById("page-white-arrow").style.right = "156px";
            document.getElementById("current-exemptions-div").style.transform = "translate(100%, 0px)"
        }
    } else {
        lastExem = false;
    };

    if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.log("Service Worker error:", err));
}
});

const plusBtnManager = () => {
    plusBtn.removeEventListener("click", plusBtnManager);
    document.getElementById("plus-text").style.transform = "rotate(45deg)";
    plusBtn.style.width = "195px";
    document.getElementById("blur-div").style.visibility = "visible";
    document.getElementById("blur-div").style.opacity = "1";
    for (i=0; i < buttonsPlus.length; i++) {
        buttonsPlus[i].style.opacity = "1";
        buttonsPlus[i].style.transform = "scale(1)";
    };
    document.getElementById("plus-btn-text").style.opacity = "1";
    document.getElementById("plus-btn-text").style.transform = "translateX(0px)";
    plusBtn.addEventListener("click", closePlusBtn);
    document.getElementById("blur-div").addEventListener("click", closePlusBtn);
}

const closePlusBtn = () => {
    plusBtn.removeEventListener("click", closePlusBtn);
    document.getElementById("plus-text").style.transform = "rotate(0deg)";
    plusBtn.style.width = "64px";
    document.getElementById("blur-div").style.visibility = "hidden";
    document.getElementById("blur-div").style.opacity = "0";
    for (i=0; i < buttonsPlus.length; i++) {
        buttonsPlus[i].style.opacity = "0";
        buttonsPlus[i].style.transform = "scale(0)";
    };
    document.getElementById("plus-btn-text").style.opacity = "0";
    document.getElementById("plus-btn-text").style.transform = "translateX(-7px)";
    plusBtn.addEventListener("click", plusBtnManager);
};

const getTimeOfDay = () => {
    let now = new Date();
    let hours = now.getHours();
    if (hours > 5 && hours < 12) {
        document.getElementById("time-text-name").innerText = "בוקר טוב פריאל";
    } else if (hours > 12 && hours < 17) {
        document.getElementById("time-text-name").innerText = "צהריים טובים פריאל";
    } else {
        document.getElementById("time-text-name").innerText = "ערב טוב פריאל";
    };
    if (currentPage === "exemptions-page.html") {
        document.getElementById("time-text-name").style.display="none";
    }
};


const openSideMenu = () => {
    document.getElementById("side-menu").style.transform = "translateX(0)";
    document.getElementById("side-menu").style.visibility = "visible";
    document.getElementById("blur-div").style.visibility = "visible";
    document.getElementById("blur-div").style.opacity = "1";
};

const closeSideMenu = () => {
    document.getElementById("side-menu").style.transform = "translateX(100%)"
    document.getElementById("side-menu").style.visibility = "hidden";
    document.getElementById("blur-div").style.visibility = "hidden";
    document.getElementById("blur-div").style.opacity = "0";
};

const exemptionPageManager = (event) => {
    let wanted = event.target.id;
    document.getElementById("current-exemption-btn").style.fontWeight = "500";
    document.getElementById("last-exemption-btn").style.fontWeight = "500";
    document.getElementById(wanted).style.fontWeight = "700";
    if (wanted === "current-exemption-btn") {
        document.getElementById("page-white-arrow").style.right = "0";
        document.getElementById("current-exemptions-div").style.transform = "translate(0, 0px)"
    } else {
        document.getElementById("page-white-arrow").style.right = "156px";
        document.getElementById("current-exemptions-div").style.transform = "translate(100%, 0px)"
        // document.getElementById("current-exemptions-div").style.width = "0";
    }
}

//  transform: translate(100%, 0px)

const backFromLastExem = () => {
    window.location.href="exemptions-page.html";
    lastExem=true;
    document.getElementById("current-exemption-btn").style.fontWeight = "500";
    document.getElementById("last-exemption-btn").style.fontWeight = "700";
    document.getElementById("page-white-arrow").style.right = "156px";
    document.getElementById("current-exemptions-div").style.transform = "translate(100%, 0px)";
}




















