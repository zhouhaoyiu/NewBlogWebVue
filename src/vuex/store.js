import { createStore } from 'vuex'

const state = {
  blogId: null,
  userRole: 0,
  selectNum: null
}

function persistedState (store) {
  const saved = localStorage.getItem('newblog-state')
  if (saved) {
    Object.assign(store.state, JSON.parse(saved))
  }

  store.subscribe((_mutation, nextState) => {
    localStorage.setItem('newblog-state', JSON.stringify({
      blogId: nextState.blogId,
      userRole: nextState.userRole,
      selectNum: nextState.selectNum
    }))
  })
}

export default createStore({
  state,
  plugins: [persistedState]
})
