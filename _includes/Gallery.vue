<template>
  Gallery
  <ul class="gallery" data-fresco-group="fresco_{{ gallery }}">
    <li v-for="image in images" :key="image.name">
      {{ image.name }}
      <a
        href="@/assets/images/{{ gallery }}/{{ image.name }}"
        data-fresco-caption="{{ image.text }}"
      >
        <img :src="this.imagePath(gallery, image.name)" :alt="image.text">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    gallery: { type: String, default: "gallery" },
    images: { type: Array }
  },
  computed: {
    imagePath (galleryName, imageName) {
      return "`require('@/assets/images/${galleryName}/${imageName})`"
    }
  }
}
</script>
