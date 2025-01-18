<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a Protein Intake</h2>
            <form @submit.prevent="addProteinIntake" class="h-96">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="protein" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount of Protein</label>
                        <input type="number" v-model="proteinAmount" id="protein" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Protein Intake" required>
                    </div>
                </div>
                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Add Intake
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            proteinAmount: ''
        };
    },
    methods: {
        async addProteinIntake() {
            const intakeData = {
                protein: this.proteinAmount
            };

            try {
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(intakeData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Protein intake added successfully:', result);
                
                // Reset the input field after successful submission
                this.proteinAmount = '';

            } catch (error) {
                console.error('Error adding protein intake:', error);
            }
        }
    }
};
</script>