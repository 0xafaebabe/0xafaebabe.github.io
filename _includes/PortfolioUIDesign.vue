<template>
  <!-- ui design quick takes -->
  <div class="bg-secondary">
    <div class="container grid grid-cols-1 sm:grid-cols-12 gap-8">
      <div />
      <article class="max-w-2xl sm:col-span-5 text-right">
        <h6>UI Design</h6>
        <h2>UI Samples</h2>
        <p>Not only do I make usable interfaces, I make beautiful interfaces. Inside is a small selection of UIs I've created with a comparison to the wireframes they were based on.</p>
        <router-link to="/ux-portfolio/ui-design"><button>Read More</button></router-link>
      </article>
      <div class="sm:col-span-6 grid sm:grid-cols-1 gap-4"> 
        <div class="sm:col-span-1"><img src="@/assets/images/uidesign1.png" alt="A dashboard design for small business opportunity tracking"></div>
      </div>
      <div />
    </div>
  </div>
  <div class="break-xl" />
</template>

<script>
export default {
  name: "PortfolioUIDesign"
};
</script>
