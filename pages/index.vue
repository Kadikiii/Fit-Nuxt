<template>
  <navbar />
  <div>
    <Hero />
    <FeatureSection />
  </div>
  <footer2 />
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const token = localStorage.getItem('token');
  if (token) {
    // Redirect to the dashboard if the user is already logged in
    window.location.href = '/dashboard';
  }
});
</script>