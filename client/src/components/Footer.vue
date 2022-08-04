<template>
    <div class="footer">
        <div class="footer-container">
            <nav class="nav">
                <h1>Nav</h1>
                <li>
                    <router-link to="/">Products</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/contact"> Contact</router-link>
                </li>
            </nav>
            <div class="address">
                <h1>Address</h1>
                <p>Plinkeplonkvägen 32</p>
                <p>888 81 Klonkberga</p>
            </div>
            <div class="media">
                <h1>Social media</h1>
                  <div class="media-content">
                      <figure>
                          <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer">
                              <img src="@/assets/logo-twitter.svg" >
                          </a>
                          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                              <img src="@/assets/logo-facebook.svg" >
                          </a>
                          <a href="https://se.linkedin.com/" target="_blank" rel="noopener noreferrer">
                              <img src="@/assets/logo-linkedin.svg" >
                          </a>
                          <a href= "https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                              <img src="@/assets/logo-instagram.svg" >
                          </a>
                      </figure>
                      <figure></figure>
                      <figure></figure>
                      <figure></figure>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"FooterComp"
}

</script>