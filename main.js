console.log("script is connected")
//adds a class of featured to first section element on page 
section = document.querySelector("section");
section.classList.add("featured");
//building article formatted as in readme

let article = document.createElement("article");

let image = document.createElement("img");

image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";

let p = document.createElement("p")
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`;

let aside = document.createElement("aside");

let newP = document.createElement("p");

let span = document.createElement("span");

let strong = document.createElement("strong");

let a = document.createElement("a");

strong.textContent = "Read Time:";
span.textContent = " 4 minutes";
span.prepend(strong);



a.href = "#";
a.textContent = "Read More...";


newP.append(span);
//puts span inside newP
newP.append(a)
//puts a inside of newP

aside.append(newP);
//puts newP inside of aside

article.append(image, h3, p, aside);
//puts image, h3, p, aside into article, in that order from top to
//bottom on the page 

let posts = document.querySelector("section.posts");

posts.append(article);
//puts our article into posts; which we declared was section.posts


let buildingArticle = posts.children[1];

posts.prepend(buildingArticle);

let header = document.querySelector("header");
let allPosts = header.children[1].children[0].children[0];

allPosts.remove();

let featuredSection = document.querySelector("section.featured");
let removeSpan = featuredSection.children[1].children[2].children[0].children[0];

removeSpan.remove();

article.remove();
// let lastPost = article.children[2];

// lastPost.remove();

let buildingTitle = posts.children[0].children[1];

buildingTitle.remove();


let gamingTitle = posts.children[1].children[1];
gamingTitle.remove();













