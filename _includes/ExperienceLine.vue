<template>
  <!-- {{ company }} {{ position }} -->
  <article class="container grid grid-cols-1 md:grid-cols-12 gap-4">
    <div class="md:col-span-3 md:text-right">
      <h5>{{ company }}</h5>
      <div class="dates-worked">
        {{ start }} – {{ end }}
      </div>
    </div>
    <div class="hidden md:grid md:col-span-1" />
    <div class="md:col-span-6">
      <h4>{{ position }}</h4>
      <p>
        <em>Responsibilities:</em>
        <slot name="responsibilities" />
      </p>
      <slot />
      <div v-if="accomplishments">
        <button
          class="button-tertiary"
          @click="btnmore = !btnmore"
        >
          <span v-if="btnmore">▾ hide details</span>
          <span v-else>▸ show details</span>
        </button>
        <div v-show="btnmore">
          <slot name="accomplishments" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ExperienceLine",
  props: {
    company: { type: String, default: "" },
    position: { type:String, default: "" },
    start: { type:String, default: "" },
    end: { type:String, default: "" }
  },
  data: function () {
    return {
      btnmore: false
    }
  },
  computed: {
    accomplishments() {
      return (this.$slots.accomplishments) ? true : false;
    }
  }
}
</script>
