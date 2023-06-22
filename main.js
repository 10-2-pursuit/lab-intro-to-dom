let section = document.querySelector("section");
section.classList.add("featured");

let article = document.createElement("article");
let image = document.createElement("img");
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";
let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
let p = document.createElement("p");
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`;
let aside = document.createElement("aside");
let p2 = document.createElement("p");
let span = document.createElement("span");
let strong = document.createElement("strong");
let a = document.createElement("a");
strong.textContent = "Read Time: ";
span.textContent = "4 Minutes ";
span.prepend(strong);
a.href = "#";
a.textContent = "Read more...";
span.append(a);
p2.append(span);
aside.append(p2);
article.append(image, h3, p, aside);
let sectionPost = document.querySelector("section.posts");
sectionPost.append(article);

let architectureArticle = sectionPost.children[1];
sectionPost.prepend(architectureArticle);

let header = document.querySelector("header");
let allPosts = header.children[1].children[0].children[0];
allPosts.remove();

let readTimeSpan = section.children[1].children[2].children[0].children[0];
readTimeSpan.remove();

article.remove();

let architectureTitle = sectionPost.children[0].children[1];
architectureTitle.remove();

let gamesTitle = sectionPost.children[1].children[1];
gamesTitle.remove();