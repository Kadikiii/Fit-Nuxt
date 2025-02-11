<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a New Workout</h2>
            <form @submit.prevent="addWorkout" class="h-96">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Workout Type</label>
                        <input type="text" v-model="workoutType" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Workout name" required>
                    </div>
                    <div class="w-full">
                        <label for="min" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minutes</label>
                        <input type="number" v-model="minutes" id="min" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Number of minutes" required>
                    </div>
                    <div class="w-full">
                        <label for="calories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calories Burned</label>
                        <input type="number" v-model="caloriesBurned" id="calories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Number of calories burned" required>
                    </div>
                </div>
                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Add Workout
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            workoutType: '',
            minutes: '',
            caloriesBurned: '',
            token: localStorage.getItem('token'), // Retrieve token from local storage
        };
    },
    methods: {
        async addWorkout() {
            if (!this.token) {
                console.error('No token found. User might not be authenticated.');
                return;
            }

            const workoutData = {
                workout_type: this.workoutType,
                duration_minutes: this.minutes,
                calories_burned: parseFloat(this.caloriesBurned).toFixed(2),
                notes: 'Warmup with 20kg on the bench', // Static note (can be dynamic if needed)
            };

            try {
                const response = await fetch('http://localhost:4000/api/workouts/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.token}`, // Include the token in the Authorization header
                    },
                    body: JSON.stringify(workoutData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Workout added successfully:', result);
                
                // Reset the input fields after successful submission
                this.workoutType = '';
                this.minutes = '';
                this.caloriesBurned = '';

            } catch (error) {
                console.error('Error adding workout:', error);
            }
        }
    }
};
</script>
