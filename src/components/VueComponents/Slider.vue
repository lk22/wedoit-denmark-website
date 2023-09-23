<script setup>
  import {
    Swiper,
    SwiperSlide,
  } from 'swiper/vue'

  import 'swiper/css';

  const onSwiper = (swiper) => {
    console.log('onSwiper')
  }

  const onSlideChange = () => {
    console.log('onSlideChange')
  }

  defineProps({
    slidesPerView: {
      type: Number,
      default: 1,
    },
    spaceBetween: {
      type: Number,
      default: 50,
    },
    slides: {
      type: Array,
      default: () => []
    }
  })
</script>

<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="slide in slides" key="slide">
      <img :src="slide" alt="slide image"/>
    </swiper-slide>
  </swiper>
</template>