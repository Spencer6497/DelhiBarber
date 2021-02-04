class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top mainTheme">
      <a class="navbar-brand" href="index.html#begin">Delhi Barbers</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- collapsible navbar -->
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html#begin">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#carddeck">Services</a>
          </li>
        </ul>
      </div>
      <a href="https://www.facebook.com/DelhiBarber/" class="nav-link nav-item d-none d-lg-block" id="facebookLink"><i class="fa fa-facebook-f"></i></a>
  </nav>
        `;
    }
}

class FooterTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Begin page footer -->
  <footer class="page-footer font-small pt-4 mainTheme">
    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Brand column -->
        <div class="col-md-3 d-flex justify-content-center align-items-center" id="footerBrand">

          <!-- Content -->
          <a href="index.html#begin"><h3>Delhi Barbers</h3></a>

        </div>
        <!-- Brand column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Link column -->
        <div class="col mb-md-0 d-flex justify-content-md-start justify-content-center align-items-center">

          <!-- Links -->
          <ul class="list-unstyled mb-0">
            <li class="pt-1 pb-1">
              <strong><a href="index.html#begin">Home</a></strong>
            </li>
            <li class="pt-1 pb-1">
              <strong><a href="index.html#about">About</a></strong>
            </li>
            <li class="pt-1 pb-1">
              <strong><a href="index.html#carddeck">Services</a></strong>
            </li>
          </ul>

        </div>
        <!-- Link column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Hours column -->
        <div class="col-md-4 mb-md-0" id="hours">

          <!-- Hours -->
          <h5 class="text-uppercase">Hours</h5>

          <div class="container">
            <div class="row">
              <div class="col pl-0 mb-0 pr-0"><p>
                Tuesday
              </p></div>
              <div class="col pl-0 mb-0 pr-0"><p>
                10AM-6PM
              </p></div>
            </div>
            <div class="row">
              <div class="col pl-0 mb-0 pr-0"><p>
                Wednesday
              </p></div>
              <div class="col pl-0 mb-0 pr-0"><p>
                10AM-6PM
              </p></div>
            </div>
            <div class="row">
              <div class="col pl-0 mb-0 pr-0"><p>
                Thursday
              </p></div>
              <div class="col pl-0 mb-0 pr-0"><p>
                12PM-8PM
              </p></div>
            </div>
            <div class="row">
              <div class="col pl-0 mb-0 pr-0"><p>
                Friday
              </p></div>
              <div class="col pl-0 mb-0 pr-0"><p>
                10AM-6PM
              </p></div>
            </div>
            <div class="row">
              <div class="col pl-0 mb-0 pr-0"><p>
                Saturday
              </p></div>
              <div class="col pl-0 mb-0 pr-0"><p>
                8AM-1PM
              </p></div>
            </div>
            <div class="row">
              <div class="col pl-0 mb-0 pr-0"><p>
                Closed Sunday and Monday
              </p></div>
            </div>
            <br>
            <div class="row">
              <div class="col pl-0 mb-0 pr-0"><p>
                <strong>WE DO NOT ACCEPT WALK-INS 1/2 HOUR BEFORE CLOSE</strong>
              </p></div>
            </div>
          </div>

        </div>
        <!-- Hours column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Location column -->
        <div class="col mb-md-0">

          <!-- Location -->
          <h5 class="text-uppercase">Location</h5>

          <p>
            402 Greenwell Avenue
            <br>
            Cincinnati, OH 45238
            <br>
            <strong><a href="tel:+15138237132">(513) 823-7132</a></strong>
          </p>

        </div>
        <!-- Location column -->
      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->
    <hr>
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Copyright: Delhi Barbers
    </div>
    <!-- Copyright -->
    <div class="text-center">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </footer>
        `
    }
}

customElements.define('nav-header', Header);
customElements.define('footer-template', FooterTemplate);