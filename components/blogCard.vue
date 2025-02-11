<template>
    <section class="bg-white dark:bg-gray-900 h-auto">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Posts</h2>
            </div>
            <div class="grid gap-8 lg:grid-cols-2">
                <article
                    v-for="post in posts"
                    :key="post.post_id"
                    class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a href="#">{{ post.title }}</a>
                    </h2>
                    <p class="mb-2 text-sm text-gray-400 dark:text-gray-500">By {{ post.author_name }} | {{ formatDate(post.created_at) }}</p>
                    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                        {{ post.content }}
                    </p>
                </article>
            </div>
            <NuxtLink to="/createPost">
                <button
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                    Add Post
                </button>
            </NuxtLink>
        </div>
    </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);

const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/blog/posts');
        const data = await response.json();
        if (data.success) {
            posts.value = data.posts;
        } else {
            console.error('Failed to fetch posts:', data);
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

onMounted(fetchPosts);
</script>

