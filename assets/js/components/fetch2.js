document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById('projects');

    if (!projectContainer) {
        if (typeof window.hidePortfolioPreloader === "function") {
            window.hidePortfolioPreloader();
        }
        return;
    }

    fetch('newcards.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }
            return response.json();
        })
        .then(data => {
            projectContainer.innerHTML = '';

            data.cards.forEach(item => {
                const projectCard = document.createElement('div');
                projectCard.className = `col-lg-6 col-md-8 mix ${item.category}`;

                projectCard.innerHTML = `
                    <div class="single-portfolio" loading="lazy" style="background-image: url(${item.img})">
                        <a target="_blank" class="visit-btn" href="${item.link}">
                            Visit <i class="fas fa-external-link-alt"></i>
                        </a>

                        <div class="portfolio-icon text-center">
                            <a data-lightbox='lightbox' loading="lazy" href="${item.img}">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </div>

                        <div class="portfolio-hover">
                            <h4>${item.Title}</h4>
                            <p class="text-white px-3">${item.text}</p>
                        </div>
                    </div>
                `;

                projectContainer.appendChild(projectCard);
            });

            if ($('.portfolio-area').data('mixItUp')) {
                $('.portfolio-area').mixItUp('destroy');
            }
            $('.portfolio-area').mixItUp();

            if (typeof window.hidePortfolioPreloader === "function") {
                window.hidePortfolioPreloader();
            }
        })
        .catch(error => {
            console.error("Error occurred extracting data from json: " + error);
            projectContainer.innerHTML = '<p class="text-center w-100">Failed to load projects.</p>';

            if (typeof window.hidePortfolioPreloader === "function") {
                window.hidePortfolioPreloader();
            }
        });
});