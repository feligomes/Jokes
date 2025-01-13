import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import JokesList from '../JokesList.vue'
import { useJokesStore } from '../../stores/jokes'

const createMockStore = () => ({
  jokes: [],
  loading: true,
  sortBy: 'type',
  currentPage: 1,
  paginatedJokes: [],
  totalPages: 0,
  fetchJokes: vi.fn(),
  rateJoke: vi.fn(),
  removeJoke: vi.fn(),
  updateSortBy: vi.fn()
})

const mockStore = createMockStore()
vi.mock('../../stores/jokes', () => ({
  useJokesStore: () => mockStore
}))

describe('JokesList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    mockStore.fetchJokes.mockReset()
    mockStore.rateJoke.mockReset()
    mockStore.removeJoke.mockReset()
    mockStore.updateSortBy.mockReset()
    mockStore.loading = true
    mockStore.jokes = []
    mockStore.paginatedJokes = []
  })

  it('renders loading state initially', () => {
    const wrapper = mount(JokesList)
    expect(wrapper.text()).toContain('Loading jokes')
  })

  it('displays jokes when loaded', async () => {
    mockStore.loading = false
    mockStore.jokes = [
      { id: 1, setup: 'Test joke 1', punchline: 'Punchline 1', type: 'general', rating: 0 },
      { id: 2, setup: 'Test joke 2', punchline: 'Punchline 2', type: 'programming', rating: 0 }
    ]
    mockStore.paginatedJokes = mockStore.jokes

    const wrapper = mount(JokesList)
    expect(wrapper.text()).toContain('Test joke 1')
    expect(wrapper.text()).toContain('Punchline 1')
    expect(wrapper.text()).toContain('Test joke 2')
    expect(wrapper.text()).toContain('Punchline 2')
  })

  it('can rate a joke', async () => {
    mockStore.loading = false
    mockStore.jokes = [
      { id: 1, setup: 'Test joke', punchline: 'Punchline', type: 'general', rating: 0 }
    ]
    mockStore.paginatedJokes = mockStore.jokes

    const wrapper = mount(JokesList)
    const stars = wrapper.findAll('.cursor-pointer')
    await stars[2].trigger('click')

    expect(mockStore.rateJoke).toHaveBeenCalledWith(
      expect.objectContaining({ id: 1 }),
      3
    )
  })

  it('can remove a joke', async () => {
    mockStore.loading = false
    mockStore.jokes = [
      { id: 1, setup: 'Test joke', punchline: 'Punchline', type: 'general', rating: 0 }
    ]
    mockStore.paginatedJokes = mockStore.jokes

    const wrapper = mount(JokesList)
    await wrapper.find('button.bg-red-600').trigger('click')
    
    expect(mockStore.removeJoke).toHaveBeenCalledWith(
      expect.objectContaining({ id: 1 })
    )
  })

  it('can change sort order', async () => {
    mockStore.loading = false
    
    const wrapper = mount(JokesList)
    const select = wrapper.find('select')
    await select.setValue('rating')
    
    expect(mockStore.updateSortBy).toHaveBeenCalledWith('rating')
  })
}) 