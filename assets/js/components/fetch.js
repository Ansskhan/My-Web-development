document.addEventListener("DOMContentLoaded", function () {
  fetch("blogCards.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then(data => {
      const blogSection = document.getElementById("blog-section");

      blogSection.innerHTML = ""; 

      data.forEach(card => {
        const blogCard = document.createElement("div");
        blogCard.className = "col-lg-4 col-md-6";

        blogCard.innerHTML = `
          <div class="single-blog">
            <div class="blog-thumb" style="background-image: url('${card.image}')"></div>
            <h4 class="blog-title"><a href="single-blog.html">${card.title}</a></h4>
            <p>${card.description}</p>
            <a href="single-blog.html" class="button">Read More</a>
          </div>
        `;

        blogSection.appendChild(blogCard);
      });
    })
    .catch(error => {
      console.error("Error loading blog cards:", error);
    });
});
