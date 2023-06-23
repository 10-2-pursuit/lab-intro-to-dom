// console.log("nugget")

document.querySelectorAll("section")[0].setAttribute(
    "class",
    "featured"
)


//Create article with Js and add to section.posts

function createArticle () {
    let newArticle = document.createElement("article")
    newArticle.img = document.createElement('img')
    newArticle.img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
    newArticle.img.setAttribute("alt", "Image of a mountain in front of a lake")
    
    newArticle.h3 = document.createElement('h3')
    newArticle.h3.innerText = "Stop Planning"

    newArticle.p_1 = document.createElement("p")
    newArticle.p_1.innerText = "   You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
   

let aside = document.createElement("aside")
    aside.p_1 = document.createElement('p')
    aside.p_1.span = document.createElement("span")
    aside.p_1.span.innerText = "4 Minutes"

    aside.p_1.span.strong = document.createElement('strong')
    aside.p_1.span.strong.innerText = "Read Time: "
    
    aside.append(aside.p_1)
    aside.p_1.append(aside.p_1.span)
    aside.p_1.span.prepend(aside.p_1.span.strong)

    aside.p_1.a = document.createElement('a')
    aside.p_1.a.innerText = "Read more..."
    aside.p_1.a.setAttribute("href", "#")
    aside.p_1.append(aside.p_1.a)

    newArticle.appendChild(newArticle.img)    
    newArticle.appendChild(newArticle.h3)
    newArticle.appendChild(newArticle.p_1)
    newArticle.appendChild(aside)

    return newArticle
    
}
let postsElement = document.getElementsByClassName("posts")[0]
let newArticle = createArticle()
postsElement.appendChild(newArticle)

// Swap first and second article.
let post2 = postsElement.querySelectorAll("article")[1]
post2.remove()
postsElement.prepend(post2)

// Remove all posts link from header
let nav = document.querySelector("nav")
nav.querySelectorAll('li')[0].remove()


//Remove span from featured post
let featuredSection = document.getElementsByClassName("featured")[0]
featuredSection.querySelector('span').remove()


//Remove last post

newArticle.remove()

console.log(featuredSection)
