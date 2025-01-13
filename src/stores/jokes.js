import { defineStore } from 'pinia'

export const useJokesStore = defineStore('jokes', {
  state: () => ({
    jokes: [],
    loading: true,
    sortBy: 'type',
    currentPage: 1,
    jokesPerPage: 5
  }),

  getters: {
    sortedJokes: (state) => {
      return [...state.jokes].sort((a, b) => {
        if (state.sortBy === 'type') {
          return a.type.localeCompare(b.type)
        }
        return b.rating - a.rating
      })
    },

    totalPages: (state) => Math.ceil(state.jokes.length / state.jokesPerPage),

    paginatedJokes: (state) => {
      const start = (state.currentPage - 1) * state.jokesPerPage
      const end = start + state.jokesPerPage
      return state.sortedJokes.slice(start, end)
    }
  },

  actions: {
    async fetchJokes() {
      this.loading = true
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_ten')
        const data = await response.json()
        this.jokes = data.map(joke => ({ ...joke, rating: 0 }))
      } catch (error) {
        console.error('Error fetching jokes:', error)
      } finally {
        this.loading = false
      }
    },

    rateJoke(joke, rating) {
      const jokeToUpdate = this.jokes.find(j => j.id === joke.id)
      if (jokeToUpdate) {
        jokeToUpdate.rating = rating
      }
    },

    removeJoke(jokeToRemove) {
      this.jokes = this.jokes.filter(joke => joke.id !== jokeToRemove.id)
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },

    updateSortBy(value) {
      this.sortBy = value
      this.currentPage = 1
    }
  }
}) 