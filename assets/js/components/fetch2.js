document.addEventListener("DOMContentLoaded", function () {
const projectContainer = document.getElementById('projects');
console.log(projectContainer);

fetch('newcards.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        projectContainer.innerHTML = '';

        data.cards.forEach(item => {
            projectContainer.innerHTML += `
    <div class="col-lg-6 col-md-8 mix ${item.category}">
        <div class="single-portfolio" loading="auto" style="background-image: url(${item.img})">
            <a target="_blank" class="visit-btn" href="${item.link}">
                Visit <i class="fas fa-external-link-alt"></i>
            </a>

            <div class="portfolio-icon text-center">
                <a data-lightbox='lightbox' loading="auto" href="${item.img}">
                    <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </div>
            
            <div class="portfolio-hover">
                <h4>${item.Title}</h4>
                <p class="text-white px-3">${item.text}</p>
            </div>
        </div>
    </div>
                `;
        });

        /* IMPORTANT: After dynamically adding items, 
           we must re-initialize MixItUp so it "sees" the new cards.
        */
        if ($('.portfolio-area').data('mixItUp')) {
            $('.portfolio-area').mixItUp('destroy');
        }
        $('.portfolio-area').mixItUp();

    })
    .catch(error => {
        console.error("Error occurred extracting data from json: " + error);
        projectContainer.innerHTML = `<p class="text-center w-100">Failed to load projects.</p>`;
    });
console.log(projectContainer);
});