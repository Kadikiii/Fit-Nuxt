<template>
  <nav class="bg-white dark:bg-gray-800 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
      <div class="flex items-center justify-between">

        <div class="flex items-center space-x-8">
          <div class="shrink-0">
            <a href="/" title="" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
              Fitness Flowbite™
            </a>
          </div>

          <ul class=" lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
            <li>
              <NuxtLink to="/" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Home
              </NuxtLink>
            </li>
            <li class="shrink-0">
              <NuxtLink to="Dashboard" title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                Dashboard
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>