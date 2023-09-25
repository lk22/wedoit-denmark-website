<script setup>
  import {
    Swiper,
    SwiperSlide,
  } from 'swiper/vue'

  import 'swiper/css';

  const onSwiper = (Swiper) => {
    console.log('onSwiper')
  }

  const onSlideChange = () => {
    console.log("onSwiperChange")
  }

  const props = defineProps({
    slidesPerView: {
      type: Number,
      default: 1
    },
    spaceBetween: {
      type: Number,
      default: 30
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          clickable: true
        }
      }
    },
    slides: {
      type: Array,
      default: () => {
        return []
      }
    }
  })

  // log props
  console.log(props.slides)
</script>

<template>
  <Swiper
    :onSwiper="onSwiper"
    :onSlideChange="onSlideChange"
    :slidesPerView="props.slidesPerView"
    :spaceBetween="props.spaceBetween"
    :pagination="{ clickable: true }"
    :navigation="true"
    :scrollbar="{ draggable: true }"
    class="mySwiper"
  >
    <div class="slide" v-for="slide in props.slides" :key="slide">
      <swiper-slide>
        <!-- 
          render image
         -->
        <img :src="slide" alt="slide1" />
      </swiper-slide>
    </div>
  </Swiper>
</template>