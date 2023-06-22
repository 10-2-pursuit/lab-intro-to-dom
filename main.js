const sec = document.querySelector('section');

sec.classList.add("featured");

function createArticle(){
    let section = document.getElementsByClassName("posts");

    let article = document.createElement("article");
    
    let img = document.createElement("img");
    img.src = "./images/paul-gilmore-unsplash.jpg";
    img.alt="Image of a mountain in front of a lake.";

    let h3 = document.createElement("h3");
    h3.textContent="Stop Planning";
    
    let p1 = document.createElement("p");
    p1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop\nplanning so much and instead focusing on relaxing. Taking a break at all is\nso stressful these days; why add to the stress by overworking yourself?`;
    
    let aside = document.createElement("aside");
    let p2 = document.createElement("p");
    
    let span = document.createElement("span");
    let strong = document.createElement("strong");
    strong.textContent = "Read Time:";
    span.appendChild(strong);
    span.appendChild(document.createTextNode("4 Minutes"));
    let a = document.createElement("a");
    a.href="#";
    a.textContent = "Read more...";
    span.appendChild(a);

    p2.appendChild(span);
    aside.appendChild(p2);

    article.append(img, h3, p1, aside);
    section[0].appendChild(article);
}

createArticle();

function wrapping(){
    let arr = [1,0,2];
    let sec = document.getElementsByClassName("posts");
    let art = sec[0].children;
    let elem = document.createDocumentFragment();
    arr.forEach(i => { elem.appendChild(art[i].cloneNode(true))});

    sec[0].innerHTML = null;
    sec[0].appendChild(elem);
}

wrapping();

function removeElem(){
    let sec = document.getElementsByClassName("posts");

    let links = document.querySelectorAll('a');
    links[0].remove();

    let span = document.querySelectorAll('span');
    //span.forEach(i => i.remove());
    span[0].remove();
    
    let child = sec[0].children;
    child[2].remove();

    let h3 = document.querySelectorAll("h3");
    h3.forEach(i => i.remove());
}

removeElem();