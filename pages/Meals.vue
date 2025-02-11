<template>
    <navbar/>
    <MealsSchuduling/>
    <Footer2/>
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
