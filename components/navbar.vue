<template>
  <nav class="bg-white dark:bg-gray-800 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
      <div class="flex items-center justify-between">

        <div class="flex items-center space-x-8">
          <div class="shrink-0">
            <a href="/" title="" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
              Fitness Flow
            </a>
          </div>

          <!-- Navigation Links for larger screens -->
          <ul class="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3">
            <li>
              <NuxtLink to="/" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="Dashboard" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Dashboard
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="Blogs" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Posts
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="ProtienIntake" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Protien Intake
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="Meals" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Meals Scheduling
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="Workout" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Workout Scheduling
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="Progress" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Progress Tracking
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Hamburger Icon, aligned right for mobile -->
        <div class="flex-grow lg:hidden"></div>
        <div class="block lg:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-900 dark:text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <!-- Side menu -->
        <transition name="slide">
          <div v-if="isOpen" class="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 lg:hidden" @click="isOpen = false">
            <div class="absolute right-0 top-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300" :class="{'translate-x-full': !isOpen}">
              <ul class="flex flex-col items-start justify-start p-4 space-y-4">
                <li>
                  <NuxtLink to="/" title=""
                    class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="Dashboard" title=""
                    class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Dashboard
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="Blogs" title=""
                    class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Posts
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="ProtienIntake" title=""
                    class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Protien Intake
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="Meals" title=""
                    class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Meals Scheduling
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="Workout" title=""
                    class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Workout Scheduling
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="Progress" title=""
                    class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                    Progress Tracking
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // State to control the menu visibility
    };
  },
};
</script>

<style scoped>
/* Slide transition styles */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%); /* Start off-screen to the right */
}
</style>