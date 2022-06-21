/*实现广告的关闭*/

let close = document.querySelector(".icon-icon-cross-squre");
let advertise = document.querySelector(".activity-top");
close.onclick = function () {
    advertise.style.display = "none";
};
/*渐变式轮播图*/
//1.自动轮播
//2.点击按钮
//3.鼠标进入下方导航切换对应图片
let banner = document.getElementById("banner");
banner.onmouseenter = function () {
    clearInterval(t);
}
banner.onmouseleave = function () {
    t = setInterval(function () {
        if (index == 7) {
            index = 0;
        } else {
            index++;
        }
        for (let i = 0; i < bannerImgs.length; i++) {
            bannerImgs[i].className = "";
        }
        bannerImgs[index].className = "show";
        for (let i = 0; i < bannerNavList.length; i++) {
            bannerNavList[i].className = "";
        }
        bannerNavList[index].className = "active";
    }, 2000)
}


let bannerImgs = banner.getElementsByTagName("img");
let bannerNav = document.getElementById("bannerNav");
let bannerNavList = bannerNav.getElementsByTagName("li");
let index = 0;
let t = setInterval(function () {
    if (index == 7) {
        index = 0;
    } else {
        index++;
    }
    for (let i = 0; i < bannerImgs.length; i++) {
        bannerImgs[i].className = "";
    }
    bannerImgs[index].className = "show";
    for (let i = 0; i < bannerNavList.length; i++) {
        bannerNavList[i].className = "";
    }
    bannerNavList[index].className = "active";
}, 2000)

let bannerLeft = document.getElementById("bannerLeft");
bannerLeft.onclick = function () {
    if (index == 0) {
        index = 7;
    } else {
        index--;
    }
    for (let i = 0; i < bannerImgs.length; i++) {
        bannerImgs[i].className = "";
    }
    bannerImgs[index].className = "show";
    for (let i = 0; i < bannerNavList.length; i++) {
        bannerNavList[i].className = "";
    }
    bannerNavList[index].className = "active";
}

let bannerRight = document.getElementById("bannerRight");
bannerRight.onclick = function () {
    if (index == 7) {
        index = 0;
    } else {
        index++;
    }
    for (let i = 0; i < bannerImgs.length; i++) {
        bannerImgs[i].className = "";
    }
    bannerImgs[index].className = "show";
    for (let i = 0; i < bannerNavList.length; i++) {
        bannerNavList[i].className = "";
    }
    bannerNavList[index].className = "active";
}

for (let i = 0; i < bannerNavList.length; i++) {
    bannerNavList[i].index = i;
    bannerNavList[i].onmouseenter = function () {
        for (let i = 0; i < bannerNavList.length; i++) {
            bannerNavList[i].className = "";
        }
        this.className = "active";
        index = this.index;
        for (let i = 0; i < bannerImgs.length; i++) {
            bannerImgs[i].className = "";
        }
        bannerImgs[index].className = "show";
    }
}

let jiadian = document.getElementById("jiadian");
let centerlist = document.getElementsByClassName("centerlist");

jiadian.onmouseenter = function () {
    centerlist[0].style.display = "block";
}
jiadian.onmouseleave = function () {
    centerlist[0].style.display = "none";
}


















