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
