<template>
  <div class="contact">
    <div class="title">Where you can find us</div>

    <div class="grid">
      <div class="contact-item">
        <img src="https://img.icons8.com/ios/100/null/marker--v1.png" width="25" height="25" />
        <div>Address</div>
        <div>117 Braymore Blvd M1B 2N6, Scarborough, ON</div>
      </div>
      <div class="contact-item">
        <img src="https://img.icons8.com/ios/100/null/phone--v1.png" width="25" height="25" />
        <div>Phone</div>
        <div>647-740-0009</div>
      </div>
      <div class="contact-item">
        <img src="https://img.icons8.com/ios/100/null/new-post--v1.png" width="25" height="25" />
        <div>Email</div>
        <div>chefsanjaysdelights@gmail.com</div>
      </div>
      <div class="contact-item">
        <img
          src="https://img.icons8.com/ios/100/null/facebook-like--v1.png"
          width="25"
          height="25"
        />
        <div>Follow Us</div>
        <div class="social">
          <a href="https://www.facebook.com/chefsanjaydelights">
            <img src="https://img.icons8.com/ios/100/null/facebook-new.png" width="20" height="20"
          /></a>
          <a href="https://www.instagram.com/chefsanjay_"
            ><img
              src="https://img.icons8.com/ios/100/null/instagram-new--v1.png"
              width="20"
              height="20"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin: 5px;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem;
}
.contact-item {
  max-width: 260px;
  min-height: 100px;
  padding: 0 30px 30px 30px;
}

.social {
  display: flex;
  justify-content: center;
}

.social img {
  padding: 5px;
}
</style>
