console.log("Main is linked");

const section = document.querySelector("section")
console.log(section)
section.classList.add("featured")


const article = document.createElement("article");

article.className = "create-article";

article.innerHTML = '<img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake.">';
console.log(article);

const createArticle = document.querySelector(".create-article");

const h3 = document.createElement("h3");
h3.innerHTML = "Stop Planning";
article.appendChild(h3)

const p = document.createElement("p");
p.innerHTML = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.appendChild(p)

const aside = document.createElement("aside");
article.appendChild(aside)

const p2 = document.createElement("p");
aside.appendChild(p2)

const span = document.createElement("span");
p2.appendChild(span)

const strong = document.createElement("strong");
strong.innerHTML = "Read Time:";
span.appendChild(strong)

const time = document.createTextNode(" 4 Minutes");
span.appendChild(time)

const a = document.createElement("a");
p2.appendChild(a)
a.innerHTML =  "Read more..."
a.href = "#"
console.log(article)


const sectionPost = document.querySelector(".posts");
sectionPost.appendChild(article);
console.log(sectionPost);


const sectionPosts = document.querySelector(".posts")
const articleOne = sectionPosts.querySelector("article")
const articleTwo =articleOne.nextElementSibling
sectionPosts.insertBefore(articleTwo, articleOne)
console.log(sectionPosts)


const nav = document.querySelector("nav")
const li = nav.querySelector("li")
li.parentNode.removeChild(li)
console.log(nav)


const sectionOneArticle = document.querySelector("article")
const spanOne = document.querySelector("span")
spanOne.parentNode.removeChild(spanOne)
console.log(sectionOneArticle)


const sectionCall = document.querySelector(".posts")
articleRemoval = sectionCall.querySelector(".create-article")
sectionCall.removeChild(articleRemoval)
console.log(sectionCall)

const removeTitles = document.querySelectorAll("h3")
removeTitles.forEach(element => {element.parentNode.removeChild(element);})
console.log(sectionPosts)
