<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create a New Post</h2>
            <form @submit.prevent="createPost" class="h-96">
                <div class="grid gap-4 sm:grid-cols-1 sm:gap-6">
                    <div class="sm:col-span-1">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" v-model="postTitle" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter post title" required>
                    </div>
                    <div class="sm:col-span-1">
                        <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                        <textarea v-model="postContent" id="content" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter post content" required></textarea>
                    </div>
                </div>
                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Create Post
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            postTitle: '',
            postContent: ''
        };
    },
    methods: {
        async createPost() {
            const postData = {
                title: this.postTitle,
                content: this.postContent
            };

            try {
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Post created successfully:', result);
                
                // Reset the input fields after successful submission
                this.postTitle = '';
                this.postContent = '';

            } catch (error) {
                console.error('Error creating post:', error);
            }
        }
    }
};
</script>