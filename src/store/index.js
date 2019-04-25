import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tagsViewIndex: '10000-10000',
    tagsViewUrl: '/',
    tagsView: [
      {name: '首页', title: '首页', url: '', index: '10000-10000'}
    ],
    sidebar: [
      {
        name: '用户管理',
        icon: 'el-icon-location',
        child: [
          {
            name: '用户列表',
            url: '/table/table'
          }
          // {
          //   name: '用户列表1',
          //   url: '/table/table1'
          // }
        ]
      },
      {
        name: 'Table',
        icon: 'el-icon-tickets',
        child: [
          {
            name: 'Table',
            url: '/table/index'
          }
        ]
      },
      {
        name: 'Form',
        icon: 'el-icon-document',
        child: [
          {
            name: 'Form',
            url: '/form/index'
          }
        ]
      }
    ],
    breadcrumb: []
  },
  mutations: {
    addTagsView (state, view) {
      let temp = true
      state.tagsView.forEach((v) => {
        if (v.index === view.index) {
          temp = false
          return false
        }
      })

      if (temp) {
        let arr = view.index.split('-')
        state.tagsView.push({
          index: view.index,
          name: state.sidebar[arr[0]].child[arr[1]].name,
          title: state.sidebar[arr[0]].child[arr[1]].name,
          url: state.sidebar[arr[0]].child[arr[1]].url
        })
      } else {

      }
      state.tagsViewIndex = view.index
    },
    removeTagsView (state, view) {
      if (view.index === state.tagsViewIndex) {
        let index = 1
        state.tagsView.forEach((v, i) => {
          if (v.index === view.index) {
            index = i
            state.tagsView.splice(i, 1)
            return false
          }
        })

        if (state.tagsView.length === index) {
          state.tagsViewIndex = state.tagsView[state.tagsView.length - 1].index
        } else {
          state.tagsViewIndex = state.tagsView[index].index
        }

        let arr = state.tagsViewIndex.split('-')
        state.breadcrumb = (state.tagsViewIndex === '10000-10000') ? [] : [
          {name: state.sidebar[arr[0]].name},
          {name: state.sidebar[arr[0]].child[arr[1]].name}
        ]
      } else {
        state.tagsView.forEach((v, i) => {
          if (v.index === view.index) {
            state.tagsView.splice(i, 1)
            return false
          }
        })
      }
    },
    changeTagsView (state, view) {
      state.tagsView.forEach((v, i) => {
        if (v.index === view.name) {
          state.tagsViewIndex = state.tagsView[i].name
          return false
        }
      })
    },
    resetBreadcrumb (state, view) {
      let arr = view.index.split('-')
      state.breadcrumb = [
        {name: state.sidebar[arr[0]].name, id: 1},
        {name: state.sidebar[arr[0]].child[arr[1]].name, id: 2}
      ]
    },
    resetTagsViewUrl (state, view) {
      let index = []
      state.sidebar.forEach((e, i) => {
        if (e.name === view[0]) {
          index[0] = i
          e.child.forEach((v, j) => {
            if (v.name === view[1]) {
              index[1] = j
            }
          })
          return false
        }
      })

      state.tagsViewUrl = state.sidebar[index[0]]['child'][index[1]]['url']
    },
    setTagsViewUrl (state, view) {
      let arr = view.index.split('-')
      state.tagsViewUrl = state.sidebar[arr[0]].child[arr[1]].url
    }
  }
})

export default store
