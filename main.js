const firstSection = document.querySelector('.firstSection');
firstSection.classList.add('featured');

const article = document.createElement('article');
article.textContent = 'You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all is
    so stressful these days; why add to the stress by overworking yourself?';

const sectionPosts = document.querySelector('section.posts');
sectionPosts.appendChild(article);


const sectionPosts = document.querySelector('section.posts');
const firstArticle = sectionPosts.querySelector('article');
const secondArticle = firstArticle.nextElementSibling;

sectionPosts.insertBefore(firstArticle, secondArticle.nextSibling);

const header = document.querySelector('header');
const allPostLink = document.querySelector('.header .allPostLink');
if (allPostLink) {
    header.removeChild(allPostLink);
}

const p2 = document.querySelector('.main .section .article .p2');
const span = p2.querySelector('span');
if (span) {
p2.removeChild(span);
}

const lastPost = document.querySelector('.posts .post:last-child');
if lastPost) {
    lastPost.remove();
}


const nonFeaturedPosts = document.querySelectorAll('.post:not(.featured)');
nonFeaturedPosts.forEach((post) => {
  const titleElement = post.querySelector('.title');
  if (titleElement) {
    titleElement.remove();
  }
});

