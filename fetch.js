let cardContainer = document.getElementById("cardCont") 
fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.Card.forEach(indexNo => {
            cardContainer.innerHTML += `
<div class="card " data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay="00"
    data-aos-easing="cubic-bezier(0.55, 0.055, 0.675, 0.19)">


        <img src="${indexNo.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${indexNo.Title}</h5>
            <p class="card-text">${indexNo.text}</p>
            <a href="${indexNo.link}" class="btn btn-primary">Visit </a>
        </div>

</div>            
        `

        });
    })
    .catch(error => {
        console.log("Error has been occured" + error)
    })

