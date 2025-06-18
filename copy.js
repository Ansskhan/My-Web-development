let navbar,footer;
navbar = document.getElementById('navbar');
navbar.innerHTML = `
    <div class="container-fluid" >
      <a class="navbar-brand fs-2" href="./index.html">Anas <span
          style="font-weight: bolder;">Ashraf</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse fs-5 " id="navbarNav">
        <ul class="navbar-nav ms-auto  ">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./index.html#featured">PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./index.html#end">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./index.html#end">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
`

