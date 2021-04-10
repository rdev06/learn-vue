import { useStore } from 'vuex';
import { computed } from 'vue';
export function useState(arr) {
  const store = useStore();
  const states = arr.map(s => [s, computed(() => store.state[s])]);
  return Object.fromEntries(states);
}

export function useGetter(arr) {
  const store = useStore();
  const getters = arr.map(g => [g, computed(() => store.getters[g])]);
  return Object.fromEntries(getters);
}

export function useMutation(arr) {
  const store = useStore();
  const mutations = arr.map(m => [m, input => store.commit(m, input)]);
  return Object.fromEntries(mutations);
}

export function useAction(arr) {
  const store = useStore();
  const actions = arr.map(a => [a, input => store.dispatch(a, input)]);
  return Object.fromEntries(actions);
}
