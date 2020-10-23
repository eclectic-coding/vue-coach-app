<template>
  <the-header></the-header>
  <div id="nav">
    <router-link to="/">Home</router-link> |
  </div>
  <router-view/>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';

export default {
  components: {
    TheHeader
  }
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
