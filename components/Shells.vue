<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900 h-auto">
    <main class="p-4 h-auto pt-20">
      <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Dashboard</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <!-- Meals Table -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full h-full">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Meals</h3>
          <div class="overflow-x-hidden h-48 overflow-y-auto rounded-lg">
            <table class="min-w-full text-left text-sm font-light text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
              <thead class="border-b bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th class="px-4 py-2">#</th>
                  <th class="px-4 py-2">Food</th>
                  <th class="px-4 py-2">Calories</th>
                  <th class="px-4 py-2">Protein</th>
                  <th class="px-4 py-2">Carbs</th>
                  <th class="px-4 py-2">Fats</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(meal, index) in meals" :key="meal.meal_id" class="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td class="px-4 py-2">{{ index + 1 }}</td>
                  <td class="px-4 py-2">{{ meal.meal_description }}</td>
                  <td class="px-4 py-2">{{ meal.calories }} kcal</td>
                  <td class="px-4 py-2">{{ meal.protein }}g</td>
                  <td class="px-4 py-2">{{ meal.carbs }}g</td>
                  <td class="px-4 py-2">{{ meal.fats }}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Progress Table -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full h-full">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Progress</h3>
          <div class="overflow-x-hidden h-48 overflow-y-auto rounded-lg">
            <table class="min-w-full text-left text-sm font-light text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
              <thead class="border-b bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th class="px-4 py-2">#</th>
                  <th class="px-4 py-2">Date</th>
                  <th class="px-4 py-2">Weight (kg)</th>
                  <th class="px-4 py-2">Body Fat (%)</th>
                  <th class="px-4 py-2">Muscle Mass (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(entry, index) in progress" :key="entry.progress_id" class="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td class="px-4 py-2">{{ index + 1 }}</td>
                  <td class="px-4 py-2">{{ new Date(entry.record_date).toLocaleDateString() }}</td>
                  <td class="px-4 py-2">{{ entry.weight }}</td>
                  <td class="px-4 py-2">{{ entry.body_fat_percentage }}</td>
                  <td class="px-4 py-2">{{ entry.muscle_mass_percentage }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Protein Intake Table -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full h-full">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Protein Intake</h3>
          <div class="overflow-x-hidden h-48 overflow-y-auto rounded-lg">
            <table class="min-w-full text-left text-sm font-light text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
              <thead class="border-b bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th class="px-4 py-2">#</th>
                  <th class="px-4 py-2">Amount (g)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(intake, index) in proteinIntake" :key="intake.intake_id" class="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td class="px-4 py-2">{{ index + 1 }}</td>
                  <td class="px-4 py-2">{{ intake.protein_amount }}g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Workouts Table -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full h-full">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Workouts</h3>
          <div class="overflow-x-hidden h-48 overflow-y-auto rounded-lg">
            <table class="min-w-full text-left text-sm font-light text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg">
              <thead class="border-b bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th class="px-4 py-2">#</th>
                  <th class="px-4 py-2">Type</th>
                  <th class="px-4 py-2">Duration (min)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(workout, index) in workouts" :key="workout.workout_id" class="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td class="px-4 py-2">{{ index + 1 }}</td>
                  <td class="px-4 py-2">{{ workout.workout_type }}</td>
                  <td class="px-4 py-2">{{ workout.duration_minutes }} min</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const meals = ref([]);
const progress = ref([]);
const proteinIntake = ref([]);
const workouts = ref([]);
const token = ref(null);

onMounted(() => {
  token.value = localStorage.getItem('token');
  fetchData();
  fetchProgressData();
  fetchWorkoutsData();
});

// Fetch Meals, Protein Intake and Workouts Data
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

    const endpoints = {
      meals: 'http://localhost:4000/api/meals/',
      protein: 'http://localhost:4000/api/protein/',
    };

    const fetchDataFromAPI = async (endpoint, state, key) => {
      const response = await fetch(endpoint, { headers });
      const data = await response.json();
      if (data.success) state.value = key ? [data[key]] : Object.values(data)[1];
    };

    await Promise.all([
      fetchDataFromAPI(endpoints.meals, meals),
      fetchDataFromAPI(endpoints.protein, proteinIntake),
    ]);

  } catch (error) {
    console.error('❌ Error fetching data:', error);
  }
};

// Fetch Progress Data
const fetchProgressData = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    };

    const response = await fetch('http://localhost:4000/api/progress/', { headers });
    const data = await response.json();
    if (data.success) {
      progress.value = data.progress;
    }
  } catch (error) {
    console.error('❌ Error fetching progress data:', error);
  }
};

// Fetch Workouts Data with debugging
const fetchWorkoutsData = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    };

    const response = await fetch('http://localhost:4000/api/workouts/', { headers });
    const data = await response.json();
    console.log('Workouts Data:', data); // Log the full response

    if (data.success) {
      workouts.value = data.workouts; // Assign the workouts array directly
      console.log('Workouts Array:', workouts.value); // Ensure workouts array is correctly populated
    }
  } catch (error) {
    console.error('❌ Error fetching workouts data:', error);
  }
};


</script>
