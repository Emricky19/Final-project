import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    count: '',
    projects: [],
    tasks: [],
    newProjects: []
  },
  getters: {
  },
  mutations: {
    View(state,data){
      state.users = data;
    },
    count(state, data){
      state.count = data;
    },
    projects(state, data){
      state.projects = data;
    },
    tasks(state, data){
      state.tasks = data
    },
    newProjects(state, data){
      state.newProjects = data
    }
  },
  actions: {
    login: ({ commit }, user) => {
      return new Promise((resolve, reject) => {
        axios.post('/login', user)
          .then(({data, status}) => {
            if(status === 200){
              const user = data
              commit('user',user)
              resolve(data);
            }
          })
          .catch((error) => {
            reject(error);
          });
      })
    },
    register: ( ({ commit }, user) => {
      return new Promise((resolve, reject) => {
        axios.post('/register', user)
        .then(({data}) => {
            const user = data
            commit('user', user)
            resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
      })
    }),
    viewUsers: (({ commit }) =>{
      return new Promise((resolve, reject) => {
        axios.get('/viewUsers')
        .then(({data}) => {
          resolve(data);
          commit('View', data);
        })
        .catch((error) => {
          reject(error);
        })
      })
    }),
    Count: (({ commit }) => {
      return new Promise((resolve, reject) => {
        axios.get('/count')
        .then(({data}) => {
          resolve(data);
          commit('count', data)
        })
        .catch((error) => {
          reject(error);
        })
      })
    }),
    Projects: (({ commit }) => {
      return new Promise((resolve, reject) =>{
        axios.get('/projects')
        .then(({data}) => {
          resolve(data);
          commit('projects', data);
        })
        .catch((error) => {
          reject(error);
        })
      })
    }),
    ProjectDashboard: (({commit}) => {
      return new Promise((resolve, reject) =>{
        axios.get('/tasks')
        .then(({data}) =>{
          resolve(data);
          commit('tasks', data)
        })
        .catch((error)=>{
          reject(error);
        })
      })
    }),
    addProject: (({commit}, newProjects) =>{
      return new Promise((resolve, reject) =>{
        axios.post('/addProject', newProjects)
        .then(({data}) => {
          resolve(data);
          commit('newProjects', data)
        })
        .catch((error) =>{
          reject(error)
        })
      })
    })
  },
  modules: {
  }
})
