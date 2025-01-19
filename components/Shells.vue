<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900 h-auto">
    <main class="p-4 h-96 pt-20">
      <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Dashboard</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 flex flex-col items-start justify-center p-4 h-auto">
          <h3 class="font-semibold text-gray-900 dark:text-white">Meals</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ meals.length }} entries</p>
          <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li v-for="meal in meals" :key="meal.id">{{ meal.name }}</li>
          </ul>
        </div>
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 flex flex-col items-start justify-center p-4 h-auto">
          <h3 class="font-semibold text-gray-900 dark:text-white">Progress</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ progress.length }} entries</p>
          <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li v-for="entry in progress" :key="entry.id">{{ entry.description }}</li>
          </ul>
        </div>
        <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 flex flex-col items-start justify-center p-4 h-auto">
          <h3 class="font-semibold text-gray-900 dark:text-white">Protein Intake</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ proteinIntake.length }} entries</p>
          <ul class="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li v-for="intake in proteinIntake" :key="intake.id">{{ intake.amount }}g</li>
          </ul>
        </div>
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

<script>
export default {
  data() {
    return {
      meals: [],
      progress: [],
      proteinIntake: [],
      workouts: [],
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const mealsResponse = await fetch('YOUR_MEALS_API_ENDPOINT');
        this.meals = await mealsResponse.json();

        const progressResponse = await fetch('YOUR_PROGRESS_API_ENDPOINT');
        this.progress = await progressResponse.json();

        const proteinResponse = await fetch('YOUR_PROTEIN_API_ENDPOINT');
        this.proteinIntake = await proteinResponse.json();

        const workoutsResponse = await fetch('YOUR_WORKOUTS_API_ENDPOINT');
        this.workouts = await workoutsResponse.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>