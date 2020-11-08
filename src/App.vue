<template>
  <div class="container">
    <div id="app">
      <!-- <header>
        <nav>
          <router-link :to="'/'">Back to Homepage</router-link>
        </nav>
        <cart :totalItems="0" />
      </header> -->
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  margin-top: 20px;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  clear: both;
}

button {
  font: inherit;
  padding: 8px 15px;
}

input {
  padding: 8px 15px;
  width: 50px;
  margin: 0;
  font: inherit;
}

nav {
  display: inline;
}

.clear-both {
  clear: both;
}
</style>
