import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{id:null,name:null,token:null},
    dlgAddProduct:false
  },
  mutations: {
    addProduct(state,payload){
      state.dlgAddProduct=payload
    }
  },
  actions: {
    signOut(){
      console.log("cerrando sesión")
    }
  },
  modules: {},
});
