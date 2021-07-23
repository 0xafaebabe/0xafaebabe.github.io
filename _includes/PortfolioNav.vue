<template>
  <nav class="portfolio">
    <div class="container">
      <div class="back"><a @click="$router.go(-1)"><i class="material-icons md-36">arrow_back</i></a></div>
      <div class="title"><p>{{ title }}</p></div>
      <div class="close"><a @click="$router.go(-1)"><i class="material-icons md-36">close</i></a></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PortfolioNav",
  props: {
    title: { type: String, default: "untitled" }
  }
}
</script>
