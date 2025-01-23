<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900 h-auto">
    <main class="p-4 h-auto pt-20">
      <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Dashboard</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <!-- Meals Section -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 flex flex-col items-start justify-center p-4 h-auto">
          <h3 class="font-semibold text-gray-900 dark:text-white">Meals</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ meals.length }} entries</p>
          <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li v-for="meal in meals" :key="meal.meal_id">
              <span class="font-semibold">- {{ meal.food_name }} </span>
              <span class="text-gray-500">
                ({{ meal.calories }} kcal) - ({{ meal.protein }}g Protein) - ({{ meal.carbs }}g Carbs) - ({{ meal.fats }}g Fats)
              </span>
              <br />
              <span class="text-gray-600 dark:text-gray-400">= {{ meal.meal_description }}</span>
            </li>
          </ul>
        </div>

        <!-- Progress Section -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 flex flex-col items-start justify-center p-4 h-auto">
          <h3 class="font-semibold text-gray-900 dark:text-white">Progress</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ progress.length }} entries</p>
          <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li v-for="entry in progress" :key="entry.id">{{ entry.description }}</li>
          </ul>
        </div>

        <!-- Protein Intake Section -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 flex flex-col items-start justify-center p-4 h-auto">
          <h3 class="font-semibold text-gray-900 dark:text-white">Protein Intake</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ proteinIntake.length }} entries</p>
          <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li v-for="intake in proteinIntake" :key="intake.id">{{ intake.amount }}g</li>
          </ul>
        </div>

        <!-- Workouts Section -->
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 flex flex-col items-start justify-center p-4 h-auto">
          <h3 class="font-semibold text-gray-900 dark:text-white">Workouts</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ workouts.length }} entries</p>
          <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li v-for="workout in workouts" :key="workout.id">{{ workout.type }} - {{ workout.duration }} min</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reactive state
const meals = ref([]);
const progress = ref([]);
const proteinIntake = ref([]);
const workouts = ref([]);
const token = ref(null);

// Ensure token is only accessed in the browser
onMounted(() => {
  token.value = localStorage.getItem('token');
  fetchData(); // Fetch data after token is set
});

const fetchData = async () => {
  if (!token.value) {
    console.error('No token found! User might not be authenticated.');
    return;
  }

  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    };

    // Fetching Meals
    const mealsResponse = await fetch('http://localhost:4000/api/meals/', { headers });
    const mealsData = await mealsResponse.json();
    if (mealsData.success && mealsData.meals) {
      meals.value = mealsData.meals;
    } else {
      console.warn('⚠️ Unexpected meals API response:', mealsData);
    }

    // Fetching Progress
    const progressResponse = await fetch('http://localhost:4000/api/progress/', { headers });
    const progressData = await progressResponse.json();
    if (progressData.success && progressData.progress) {
      progress.value = progressData.progress;
    } else {
      console.warn('⚠️ Unexpected progress API response:', progressData);
    }

    // Fetching Protein Intake
    const proteinResponse = await fetch('http://localhost:4000/api/protein/', { headers });
    const proteinData = await proteinResponse.json();
    if (proteinData.success && proteinData.protein) {
      proteinIntake.value = proteinData.protein;
    } else {
      console.warn('⚠️ Unexpected protein API response:', proteinData);
    }

    // Fetching Workouts
    const workoutsResponse = await fetch('http://localhost:4000/api/workouts/', { headers });
    const workoutsData = await workoutsResponse.json();
    if (workoutsData.success && workoutsData.workouts) {
      workouts.value = workoutsData.workouts;
    } else {
      console.warn('⚠️ Unexpected workouts API response:', workoutsData);
    }

  } catch (error) {
    console.error('❌ Error fetching data:', error);
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
