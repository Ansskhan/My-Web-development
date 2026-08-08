document.addEventListener("DOMContentLoaded", function () {
  const blogSection = document.getElementById("blog-section");

  if (!blogSection) {
    if (typeof window.hidePortfolioPreloader === "function") {
      window.hidePortfolioPreloader();
    }
    return;
  }

  fetch("blogCards.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      return response.json();
    })
    .then(data => {
      blogSection.innerHTML = "";

      data.forEach(card => {
        const blogCard = document.createElement("div");
        blogCard.className = "col-lg-4 col-md-6";

        blogCard.innerHTML = `
          <div class="single-blog">
            <div class="blog-thumb" loading="lazy" style="background-image: url('${card.image}')"></div>
            <h4 class="blog-title"><a href="single-blog.html">${card.title}</a></h4>
            <p>${card.description}</p>
          </div>
        `;

        blogSection.appendChild(blogCard);
      });

      if (typeof window.hidePortfolioPreloader === "function") {
        window.hidePortfolioPreloader();
      }
    })
    .catch(error => {
      console.error("Error loading blog cards:", error);
      blogSection.innerHTML = '<p class="text-center w-100">Unable to load blog posts right now.</p>';

      if (typeof window.hidePortfolioPreloader === "function") {
        window.hidePortfolioPreloader();
      }
    });
});
