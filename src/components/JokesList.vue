<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <h1 class="text-3xl font-extrabold text-center text-gray-900 mb-8">Jokes App</h1>
          
          <div class="grid grid-cols-2 gap-4 mb-6">
            <select v-model="store.sortBy" @change="store.updateSortBy($event.target.value)" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option value="type">Sort by Type</option>
              <option value="rating">Sort by Rating</option>
            </select>
            <button @click="store.fetchJokes" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Refresh Jokes
            </button>
          </div>

          <div v-if="store.loading" class="text-center">
            <div class="spinner"></div>
            Loading jokes...
          </div>

          <div v-else>
            <div v-for="joke in store.paginatedJokes" :key="joke.id" class="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
              <div class="px-4 py-5">
                <h3 class="text-lg font-medium text-gray-900">{{ joke.setup }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ joke.punchline }}</p>
              </div>
              
              <div class="border-t border-gray-200 px-4 py-5">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Type: {{ joke.type.charAt(0).toUpperCase() + joke.type.slice(1) }}</span>
                  <div class="flex items-center">
                    <StarIcon 
                      v-for="i in 5" 
                      :key="i" 
                      @click="store.rateJoke(joke, i)"
                      :class="[
                        i <= joke.rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0 cursor-pointer'
                      ]"
                    />
                  </div>
                </div>
                <button @click="store.removeJoke(joke)" class="mt-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Remove Joke
                </button>
              </div>
            </div>
          </div>

          <div v-if="!store.loading" class="flex justify-between items-center mt-4">
            <button 
              @click="store.prevPage" 
              :disabled="store.currentPage === 1"
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              :class="{ 'opacity-50 cursor-not-allowed': store.currentPage === 1 }"
            >
              Prev
            </button>
            <span>Page {{ store.currentPage }} of {{ store.totalPages }}</span>
            <button 
              @click="store.nextPage" 
              :disabled="store.currentPage === store.totalPages"
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              :class="{ 'opacity-50 cursor-not-allowed': store.currentPage === store.totalPages }"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { StarIcon } from 'lucide-vue-next'
import { useJokesStore } from '../stores/jokes'

const store = useJokesStore()

onMounted(() => {
  store.fetchJokes()
})
</script>

<style scoped>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>