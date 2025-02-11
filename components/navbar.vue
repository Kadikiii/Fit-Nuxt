<template>
  <nav class="bg-white dark:bg-gray-800 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
      <div class="flex items-center justify-between">

        <div class="flex items-center space-x-8">
          <div class="shrink-0">
            <a href="/" title="" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
              Fitness Flow™
            </a>
          </div>

          <ul class=" lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
            <li>
              <NuxtLink to="/" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Home
              </NuxtLink>
            </li>

            <!-- Show these links only for authenticated users -->
            <template v-if="isAuthenticated">
              <li class="shrink-0">
                <NuxtLink to="Dashboard" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Dashboard
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <NuxtLink to="Blogs" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Posts
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <NuxtLink to="ProtienIntake" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Protein intake
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <NuxtLink to="Meals" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Meals Scheduling
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <NuxtLink to="Workout" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Workout Scheduling
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <NuxtLink to="Progress" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Progress Tracking
                </NuxtLink>
              </li>
            </template>

            <!-- Show Login or Register links if user is not authenticated -->
            <template v-else>
              <li class="shrink-0">
                <NuxtLink to="login" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Login
                </NuxtLink>
              </li>
              <li class="shrink-0">
                <NuxtLink to="signup" title=""
                  class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Register
                </NuxtLink>
              </li>
            </template>

          </ul>
          
        </div>

        <!-- Logout button, shown only if the user is authenticated -->
        <template v-if="isAuthenticated">
          <button class=" p-1 px-3 rounded border font-bold  border-white bg-white text-slate-900" @click="logout">
            Logout
          </button>
        </template>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let token = ref(null);

// Wait until the component is mounted before accessing localStorage
onMounted(() => {
  token.value = localStorage.getItem('token');
});

// Computed property to check if the user is authenticated
const isAuthenticated = computed(() => !!token.value);

// Logout function
const logout = () => {
    localStorage.removeItem('token'); // Remove token
    token.value = null; // Clear the token reference
    router.push('/'); // Redirect to login page
};
</script>
