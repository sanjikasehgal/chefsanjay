<template>
  <div class="about">
    <h1>Our Story</h1>
    <img alt="biscotti" class="biscotti" src="@/assets/biscottis.png" width="350" height="350" />
    <h2>Meet Chef Sanjay</h2>
    <p>
      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
      Text” or double click me to add your own content and make changes to the font. Feel free to
      drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and
      let your users know a little more about you. This is a great space to write long text about
    </p>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0.5rem;
}

.biscotti {
  align-self: center;
  margin: 1rem;
}

h1 {
  font-size: 1.2rem;
  font-weight: bold;
}

h2 {
  font-style: italic;
}
p {
  max-width: 550px;
  align-self: center;
}
</style>
