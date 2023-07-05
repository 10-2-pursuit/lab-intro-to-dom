// Add a class of "featured" to the first section element
const firstSection = document.querySelector("section");
firstSection.classList.add("featured");

// Create and append a new article element to the section.posts element
const newArticle = document.createElement("article");
newArticle.innerHTML = `
  <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
  <h3>Stop Planning</h3>
  <p>
    You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?
  </p>
  <aside>
    <p>
      <span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a>
    </p>
  </aside>
`;

const sectionPosts = document.querySelector("section.posts");
sectionPosts.appendChild(newArticle);

// Move the first article to become the second article and vice versa
const articles = document.querySelectorAll("article");
sectionPosts.insertBefore(articles[1], articles[0]);

// Remove the "All Posts" link from the header
const headerLink = document.querySelector("header nav ul li");
headerLink.remove();

// Remove the span element containing "Read Time" in the featured post
const featuredPost = document.querySelector("article.featured");
const readTimeSpan = featuredPost.querySelector("span");
readTimeSpan.remove();

// Remove the last post titled "Stop Planning"
const lastPost = sectionPosts.querySelector("article:last-of-type");
lastPost.remove();

// Remove all titles from non-featured posts
const nonFeaturedPosts = sectionPosts.querySelectorAll("article:not(.featured) h3");
nonFeaturedPosts.forEach((post) => {
  post.remove();
});
