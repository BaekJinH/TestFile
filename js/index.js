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
    // snow_flake.style.zIndex = -1

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 5000)
}



// 마지막 페이지에서 눈이 뒷 페이지로 이동하기

function detectBottom() {
    var scrollTop = $(window).scrollTop();
    var innerHeight = $(window).innerHeight();
    var scrollHeight = $('body').prop('scrollHeight');
    if (scrollTop + innerHeight >= scrollHeight) {
        return true;
    } else {
        return false;
    }
}