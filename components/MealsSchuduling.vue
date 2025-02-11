<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Meal</h2>
            <form @submit.prevent="addMeal" id="mealForm" class="h-96">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="meal_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Meal Description
                        </label>
                        <input 
                            type="text" 
                            v-model="meal_description" 
                            id="meal_description" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                            placeholder="Describe your meal" 
                            required
                        >
                    </div>
                    <div>
                        <label for="food_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Food Category
                        </label>
                        <select 
                            v-model="food_id" 
                            id="food_id" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                            required
                        >
                            <option disabled value="">Select Food</option>
                            <option v-for="food in foodOptions" :key="food.id" :value="food.id">
                                {{ food.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <button 
                    type="submit" 
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                    Add Meal
                </button>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reactive state
const meal_description = ref('');
const food_id = ref('');
const token = ref(null);

const foodOptions = [
    { id: 1, name: "Chicken Breast" },
    { id: 2, name: "Brown Rice" },
    { id: 3, name: "Broccoli" },
    { id: 4, name: "Almonds" },
    { id: 5, name: "Egg" },
    { id: 6, name: "Apple" },
    { id: 7, name: "Banana" },
    { id: 8, name: "Salmon" },
    { id: 9, name: "Oatmeal" },
    { id: 10, name: "Peanut Butter" },
    { id: 11, name: "Beef" },
    { id: 12, name: "coffe" },
    { id: 13, name: "orange" },
    { id: 15, name: "avocado" },
];

// Get token on mount
onMounted(() => {
    token.value = localStorage.getItem('token');
});

// Add Meal Function
const addMeal = async () => {
    if (!token.value) {
        console.error("No token found! User might not be authenticated.");
        return;
    }

    const mealData = {
        meal_description: meal_description.value,
        food_id: Number(food_id.value),
    };

    try {
        const response = await fetch('http://localhost:4000/api/meals/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token.value}`,
            },
            body: JSON.stringify(mealData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('✅ Meal added successfully:', result);

        // Reset form
        meal_description.value = '';
        food_id.value = '';

    } catch (error) {
        console.error('❌ Error adding meal:', error);
    }
};
</script>
