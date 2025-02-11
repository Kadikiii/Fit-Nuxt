<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a New Progress</h2>
            <form @submit.prevent="addProgress" class="h-96">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
                        <input type="number" v-model="weight" id="weight" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your weight" required>
                    </div>
                    <div class="w-full">
                        <label for="fat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body Fat Percentage (%)</label>
                        <input type="number" v-model="bodyFat" id="fat" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Body fat %" required>
                    </div>
                    <div class="w-full">
                        <label for="muscle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Muscle Mass Percentage (%)</label>
                        <input type="number" v-model="muscleMass" id="muscle" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Muscle mass %" required>
                    </div>
                </div>

                <!-- Feedback Message -->
                <p v-if="message" :class="messageClass" class="mt-2 text-sm">
                    {{ message }}
                </p>

                <button type="submit"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
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
            muscleMass: '',
            message: '',
            messageClass: ''
        };
    },
    methods: {
        async addProgress() {
            const token = localStorage.getItem('token');
            if (!token) {
                this.message = "❌ User not authenticated!";
                this.messageClass = "text-red-500";
                return;
            }

            const progressData = {
                weight: this.weight,
                body_fat_percentage: this.bodyFat,  // Match API key
                muscle_mass_percentage: this.muscleMass  // Match API key
            };

            try {
                const response = await fetch('http://localhost:4000/api/progress/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(progressData),
                });

                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(result.message || "Failed to add progress.");
                }

                this.message = "✅ Progress added successfully!";
                this.messageClass = "text-green-500";

                // Reset input fields
                this.weight = '';
                this.bodyFat = '';
                this.muscleMass = '';

                // Emit event to update dashboard
                this.$emit('progress-updated');

            } catch (error) {
                this.message = `❌ Error: ${error.message}`;
                this.messageClass = "text-red-500";
            }
        }
    }
};
</script>
