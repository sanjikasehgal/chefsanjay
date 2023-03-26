<template>
  <div class="background-about">
    <div class="about">
      <h2>Meet Chef Sanjay</h2>
      <img alt="biscotti" class="biscotti" src="@/assets/papa-mamma.png" width="350" height="350" />
      <p>
        A professional chef with over 30 years, Chef Sanjay has been perfecting his biscotti recipe
        for decades and has finally landed on what we think is the absolute perfect biscotti!
      </p>
      <p>
        Baked and prepared in his own home kitchen, you know that every bite is packed full with
        love and care.
      </p>
    </div>
  </div>
</template>

<style>
.background-about {
  background: url('background/background-about-2.png') center center fixed;
  height: 100%;
  overflow: hidden;
  border: none;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0.5rem;
  align-items: center;
}

.biscotti {
  align-self: center;
  margin: 1rem;
}

h2 {
  font-style: italic;
  background-color: white;
  width: 170px;
}
p {
  max-width: 550px;
  align-self: center;
  text-align: left;
  margin: 10px;
  padding: 5px;
  background-color: white;
}
</style>
