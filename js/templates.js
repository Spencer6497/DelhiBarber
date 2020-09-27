class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top mainTheme">
      <a class="navbar-brand" href="index.html">Delhi Barber</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- collapsible navbar -->
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html#carddeck">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
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
        <div class="col d-flex justify-content-center align-items-center" id="footerBrand">

          <!-- Content -->
          <a href="index.html"><h3>Delhi Barber</h3></a>

        </div>
        <!-- Brand column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Link column -->
        <div class="col mb-md-0 d-flex justify-content-md-start justify-content-center align-items-center">

          <!-- Links -->
          <ul class="list-unstyled">
            <li class="pt-1 pb-1">
              <strong><a href="about.html">About</a></strong>
            </li>
            <li class="pt-1 pb-1">
              <strong><a href="index.html#carddeck">Services</a></strong>
            </li>
            <li class="pt-1 pb-1">
              <strong><a href="contact.html">Contact</a></strong>
            </li>
          </ul>

        </div>
        <!-- Link column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Hours column -->
        <div class="col mb-md-0">

          <!-- Hours -->
          <h5 class="text-uppercase">Hours</h5>

          <p>
            Tuesday: 10AM-6PM
            <br>
            Wednesday: 10AM-6PM
            <br>
            Thursday: 12PM-8PM
            <br>
            Friday: 10AM-6PM
            <br>
            Saturday: 8AM-1PM
            <br>
            Closed Sunday and Monday
          </p>

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
            <strong><a href="tel:+15136083969">(513) 608-3969</a></strong>
          </p>

        </div>
        <!-- Location column -->
      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->
    <hr>
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Copyright: Delhi Barber
    </div>
    <!-- Copyright -->
    <div class="text-center">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </footer>
        `
    }
}

customElements.define('nav-header', Header);
customElements.define('footer-template', FooterTemplate);