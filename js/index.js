const body = document.body;

setInterval(createSnowFlake, 80);

function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fa-solid');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 5 + 3 + 's'; // between 2 - 5 seconds
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snow_flake.style.color = 'white';
    // snow_flake.style.zIndex = -1

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 5000)
}


// 현 페이지는 실험 Branch 페이지임


// 마지막 페이지에서 눈이 잠시 사라지도록 만들기

let underFloor = document.querySelector('.s9');
let snow = document.querySelectorAll('.fa-snowflake');


if (underFloor >= detectBottom) {
    snow.style.display = 'none';
}
else {
    snow.style.display = 'block'
}


// 제이쿼리 자바스크립트로 변경

function detectBottom() {
    var scrollTop = document.window.scrollTop();
    var innerHeight = document.window.innerHeight();
    var scrollHeight = document.getElementsByTagName('body').val('scrollHeight')
    if (scrollTop + innerHeight >= scrollHeight) {
       console.log ('바닥에 도착')
       return true;
    } else {
        return false;
    }
}