<template>
    <AppHeader/>

    <HomeChannel/>

    <HomeSwipe/>

    <HomeVideoList/>
</template>

//vue3.2自动注册
<script setup lang="ts">
import AppHeader from '@/components/app-header.vue';
import HomeChannel from './components/home-channel.vue';
import HomeSwipe from './components/home-swipe.vue';
import HomeVideoList from './components/home-video-list.vue';
</script>