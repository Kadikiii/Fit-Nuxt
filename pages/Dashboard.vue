<template>
    <navbar/>
    <Shells class="max-w-7xl mx-auto"/>
    <footer2/>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';

const router = useRouter();

onBeforeMount(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to login page if not authenticated
    router.push('/');
  }}),
definePageMeta({
  middleware: ['auth'] // Apply the auth middleware
});
</script>
