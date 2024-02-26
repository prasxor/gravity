
// for menubar

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}



// navbar progress 

const scrollProgress = document.getElementById('scroll-progress');
const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});

// btn smooth scroll 

document.getElementById('home').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('home').addEventListener('click', function (e) {
    // Handle your logic for going back
});


// poster changes 


document.addEventListener("DOMContentLoaded", function () {
    let image = document.getElementById('image');
    let images = ['./images/poster_1.jpg', './images/poster_2.jpg', './images/poster_3.jpg', './images/poster_4.jpg', './images/poster_5.jpg'];

    setInterval(function () {
        let random = Math.floor(Math.random() * 5);
        image.src = images[random];
    }, 5000);
});


