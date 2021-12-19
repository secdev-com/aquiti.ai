$(document).foundation()

$('.left-bar').hide();

if ($(window).scrollTop() > 310) $('.left-bar').fadeIn();

$(document).scroll(function() {
    var y = $(this).scrollTop();
    
    if (y > 310) {
        $('.left-bar').fadeIn();
    } else {
        $('.left-bar').fadeOut();
    }

    var items = document.getElementsByClassName("menu-item");
    
    var windowHeight = window.innerHeight;

    if (windowHeight <= 720) {
        if (y >= 2800 && y < 3100) {    
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "white";
            } 
        } else {
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "black";
            } 
        }

        if (y < 720) items[0].style.color = "#E03400";
        if (y >= 720 && y < 1200) items[1].style.color = "#E03400";
        if (y >= 1200 && y < 1900) items[2].style.color = "#E03400";
        if (y >= 1900 && y < 2400) items[3].style.color = "#E03400";
        if (y >= 2400 && y < 2800) items[4].style.color = "#E03400";
        if (y >= 2800) items[5].style.color = "#E03400";

    } else if (windowHeight <= 900) {
        if (y > 2900) {    
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "white";
            } 
        } else {
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "black";
            } 
        }

        if (y < 900) items[0].style.color = "#E03400";
        if (y >= 900 && y < 1400) items[1].style.color = "#E03400";
        if (y >= 1400 && y < 1900) items[2].style.color = "#E03400";
        if (y >= 1900 && y < 2400) items[3].style.color = "#E03400";
        if (y >= 2400 && y < 2800) items[4].style.color = "#E03400";
        if (y >= 2800) items[5].style.color = "#E03400";
    } else if (windowHeight <= 1080) {
        if (y > 3100) {    
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "white";
            } 
        } else {
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "black";
            } 
        }

        if (y < 1080) items[0].style.color = "#E03400";
        if (y >= 1080 && y < 1400) items[1].style.color = "#E03400";
        if (y >= 1400 && y < 2100) items[2].style.color = "#E03400";
        if (y >= 2100 && y < 2600) items[3].style.color = "#E03400";
        if (y >= 2600 && y < 3000) items[4].style.color = "#E03400";
        if (y >= 3000) items[5].style.color = "#E03400";
    } else if (windowHeight <= 1260) {
        if (y > 3100) {    
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "white";
            } 
        } else {
            for (let i=0; i < items.length; i++) {
                items[i].style.color = "black";
            } 
        }

        if (y < 1260) items[0].style.color = "#E03400";
        if (y >= 1260 && y < 1600) items[1].style.color = "#E03400";
        if (y >= 1600 && y < 2300) items[2].style.color = "#E03400";
        if (y >= 2300 && y < 2700) items[3].style.color = "#E03400";
        if (y >= 2700 && y < 3100) items[4].style.color = "#E03400";
        if (y >= 3100) items[5].style.color = "#E03400";
    }

    
});
