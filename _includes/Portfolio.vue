<template>
  <!-- portfolio -->
  <section id="portfolio">
    <div class="container grid grid-cols-1 md:grid-cols-12 gap-4">
      <header class="md:col-span-12"><h1>Portfolio</h1></header>
    </div>
    <Enterprise />
    <Lighting />
    <UIDesign />
    <Giving />
    <ECommerce />
  </section>
</template>

<script>
import Enterprise from "./PortfolioEnterpriseTechTool.vue"
import UIDesign from "./PortfolioUIDesign.vue"
import Lighting from "./PortfolioLightingControlApp.vue"
import ECommerce from "./PortfolioECommerce.vue"
import Giving from "./PortfolioGivingMVP.vue"

export default {
  name: "Portfolio",
  components: {
   Enterprise,
   Lighting,
   UIDesign,
   ECommerce,
   Giving 
  }
};

</script>
