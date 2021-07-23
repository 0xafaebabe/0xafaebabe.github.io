<template>
  <!-- enterprise case study -->
  <div class="bg-secondary">
    <div class="container grid grid-cols-1 sm:grid-cols-12 gap-8">
      <div />
      <div class="sm:col-span-5 grid sm:grid-cols-12 gap-4"> 
        <div class="sm:col-span-7"><img src="@/assets/images/lighting1.png"></div>
        <div class="sm:col-span-5 grid gap-4">
          <img src="@/assets/images/lighting2.jpg">
          <img src="@/assets/images/lighting3.png">
          <img src="@/assets/images/lighting4.jpg">
        </div>
      </div>
      <article class="max-w-2xl sm:col-span-5 text-left">
        <h6>Interaction Design</h6>
        <h2>Prototyping a lighting control app</h2>
        <p>Configuring commercial lighting controllers during an installation is a difficult, time-consuming process. Users struggle with complex and poorly designed lighting interfaces. I redesigned the controller interface to make these problems easier.</p>
        <router-link to="/ux-portfolio/lighting-control-application"><button>Read More</button></router-link>
      </article>
      <div />
    </div>
  </div>
  <div class="break-xl" />
</template>

<script>
export default {
  name: "PortfolioEnterprise"
};
</script>
