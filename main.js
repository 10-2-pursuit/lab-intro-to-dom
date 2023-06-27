document.addEventListener("DOMContentLoaded", function () {
	const firstSection = document.querySelector("section");
	firstSection.classList.add("featured");
	const newArticle = document.createElement("article");
	newArticle.innerHTML = `
	  <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
	  <h3>Stop Planning</h3>
	  <p>You -- yes you! You're an over-planner, I can tell. It's time to stop
	  planning so much and instead focusing on relaxing. Taking a break at all is
	  so stressful these days; why add to the stress by overworking yourself?</p>
	  <aside>
		<p>
		  <span><strong>Read Time:</strong> 4 Minutes</span
		  ><a href="#">Read more...</a>
		</p>
	  </aside>
	`;
	const postsSection = document.querySelector(".posts");
	postsSection.appendChild(newArticle);
	const firstArticle = postsSection.querySelector("article");
	const secondArticle = firstArticle.nextElementSibling;
	postsSection.insertBefore(secondArticle, firstArticle);
	const headerLink = document.querySelector("header a");
	headerLink.remove();
	const featuredPost = document.querySelector(".featured");
	const readTimeSpan = featuredPost.querySelector("span");
	readTimeSpan.remove();
	const lastPost = document.querySelector(".posts article:last-child");
	lastPost.remove();
	const nonFeaturedPosts = document.querySelectorAll(".posts article:not(.featured)");
	for (let i = 0; i < nonFeaturedPosts.length; i++) {
	  const title = nonFeaturedPosts[i].querySelector("h3");
	  title.remove();
	}
  });
  console.log('available');
// const firstSection = document.querySelector("section");
// firstSection.classList.add("featured");

// const postsSection = document.querySelector("main section.posts");
// const firstArticle = postsSection.querySelector("article:first-child");
// const secondArticle = postsSection.querySelector("article:nth-child(2)");
// postsSection.insertBefore(firstArticle, secondArticle.nextSibling);


// const articleElement = document.createElement("article");

// articleElement.innerHTML = `
//   <img
//     src="./images/paul-gilmore-unsplash.jpg"
//     alt="Image of a mountain in front of a lake."
//   />
//   <h3>Stop Planning</h3>
//   <p>
//     You -- yes you! You're an over-planner, I can tell. It's time to stop
//     planning so much and instead focusing on relaxing. Taking a break at all is
//     so stressful these days; why add to the stress by overworking yourself?
//   </p>
//   <aside>
//     <p>
//       <span><strong>Read Time:</strong> 4 Minutes</span
//       ><a href="#">Read more...</a>
//     </p>
//   </aside>
// `;

// sectionPosts.appendChild(articleElement);

// const header = document.querySelector("header");
// const allPostsLink = header.querySelector("a");
// allPostsLink.remove('All Post');

// const featuredPost = document.querySelector("main section:first-child article");
// const readTimeSpan = featuredPost.querySelector("aside p span");
// readTimeSpan.remove();

// const lastPost = postsSection.querySelector("article:last-child");
// lastPost.remove();


// const nonFeaturedPosts = postsSection.querySelectorAll("article:not(:first-child) h3");
// nonFeaturedPosts.forEach(post => {
//   post.remove();
// });


// const sectionPosts = document.querySelector('section.posts');
// const articles = sectionPosts.querySelectorAll('article');
// const firstArticle = articles[0];
// const secondArticle = articles[1];
// const image = document.createElement('img');
// image.src = './images/paul-gilmore-unsplash.jpg';
// image.alt = 'Image of a mountain in front of a lake.';
// const heading = document.createElement('h3');
// heading.textContent = 'Stop Planning';
// const paragraph = document.createElement('p');
// paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
// const aside = document.createElement('aside');
// const asideParagraph = document.createElement('p');
// const span = document.createElement('span');
// span.innerHTML = '<strong>Read Time:</strong> 4 Minutes';
// const anchor = document.createElement('a');
// anchor.href = '#';
// anchor.textContent = 'Read more...';

// const script = document.createElement('script');

// script.src = 'main.js';
// document.head.appendChild(script);
// document.querySelector('section').classList.add('featured');

// console.log('available');

// const sectionPosts = document.querySelector('section.posts');
// const articles = sectionPosts.querySelectorAll('article');
// const firstArticle = articles[0];
// const secondArticle = articles[1];
// sectionPosts.insertBefore(secondArticle, firstArticle);
//  const article = document.createElement('article');

//  const image = document.createElement('img');
//  image.src = './images/paul-gilmore-unsplash.jpg';
//  image.alt = 'Image of a mountain in front of a lake.';
//  const heading = document.createElement('h3');
//  heading.textContent = 'Stop Planning';

//  const paragraph = document.createElement('p');
//  paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

//  const aside = document.createElement('aside');

// const asideParagraph = document.createElement('p');

//  const span = document.createElement('span');
//  span.innerHTML = '<strong>Read Time:</strong> 4 Minutes';

//  const anchor = document.createElement('a');
//  anchor.href = '#';
//  anchor.textContent = 'Read more...';

//  const header = document.querySelector('header');
//  const allPostsLink = header.querySelector('a');
//  header.removeChild(allPostsLink);

//  console.log('available');




// articles.appendChild(image);
// articles.appendChild(heading);
// articles.appendChild(paragraph);
// articles.appendChild(aside);
// aside.appendChild(asideParagraph);
// asideParagraph.appendChild(span);
// asideParagraph.appendChild(anchor);
