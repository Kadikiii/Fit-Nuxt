<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Meal</h2>
            <form @submit.prevent="addMeal" id="mealForm" class="h-96">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meal Name</label>
                        <input type="text" v-model="mealName" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Meal name" required>
                    </div>
                    <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select v-model="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                            <option>Select Meal</option>
                            <option value="1">Eggs</option>
                            <option value="2">Chicken Breast</option>
                            <option value="3">Brown Rice</option>
                            <option value="4">Broccoli</option>
                            <option value="5">Almonds</option>
                            <option value="6">Apple</option>
                            <option value="7">Banana</option>
                            <option value="8">Salmon</option>
                            <option value="9">Oatmeal</option>
                            <option value="10">Peanut Butter</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Add Meal
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            mealName: '',
            category: ''
        };
    },
    methods: {
        async addMeal() {
            const mealData = {
                name: this.mealName,
                category: this.category
            };

            try {
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(mealData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Meal added successfully:', result);
                // Reset the form fields after successful submission
                this.mealName = '';
                this.category = '';

            } catch (error) {
                console.error('Error adding meal:', error);
            }
        }
    }
};
</script>