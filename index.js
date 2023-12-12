const containerEl = document.querySelector(".container");

const sliderEl = document.querySelector(".slider");

const articlesEl = document.querySelectorAll("article");

const nexttEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const toggleBtn = document.querySelector(".toggle-btn");

const closeBtn = document.querySelector(".close");

const dropSideMenu = document.querySelector(".dropside-menu");

let index = 0

display(index)
function display(index){
    articlesEl.forEach(article=>{
        article.style.display = "none";
    });
    articlesEl[index].style.display = 'flex';
}

nexttEl.addEventListener("click", ()=>{
    index++
    if(index > articlesEl.length - 1){
        index = 0;
    }else if(index < 0){
        index = articlesEl.length - 1
    }
    display(index);
});

prevEl.addEventListener("click", ()=>{
    index--
    if(index > articlesEl.length - 1){
        index = 0;
    }else if(index < 0){
        index = articlesEl.length - 1;  
    }
    display(index);
});

toggleBtn.addEventListener("click", ()=>{
    containerEl.classList.add("active")
    dropSideMenu.classList.add("open");
});
closeBtn.addEventListener("click", ()=>{
    containerEl.classList.remove("active")
    dropSideMenu.classList.remove("open")
});