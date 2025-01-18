<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Progress</h2>
            <form @submit.prevent="addProgress" class="h-96">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
                        <input type="number" v-model="weight" id="weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Weight" required>
                    </div>
                    <div class="w-full">
                        <label for="fat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body Fat Percentage</label>
                        <input type="number" v-model="bodyFat" id="fat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Body Fat Percentage" required>
                    </div>
                    <div class="w-full">
                        <label for="muscle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Muscle Mass Percentage</label>
                        <input type="number" v-model="muscleMass" id="muscle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Muscle Mass" required>
                    </div>
                </div>
                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Add Progress
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            weight: '',
            bodyFat: '',
            muscleMass: ''
        };
    },
    methods: {
        async addProgress() {
            const progressData = {
                weight: this.weight,
                bodyFat: this.bodyFat,
                muscleMass: this.muscleMass
            };

            try {
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(progressData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Progress added successfully:', result);
                
                // Reset the form fields after successful submission
                this.weight = '';
                this.bodyFat = '';
                this.muscleMass = '';

            } catch (error) {
                console.error('Error adding progress:', error);
            }
        }
    }
};
</script>