import { defineStore } from "pinia";

export let useTeamStore = defineStore('team',{
  state: () => ({ //data
     name: "",
     spots: 0,
     members: []
  }),

  actions: { // methods
  async fill() {
    let r = await import('@/team.json')
   
    this.$state = r.default;
    
  
  },

  grow(spots) {
    this.spots = spots
  }
  },

  getters: { //compted properties
    spotsRemaining() {
      return this.spots - this.members.length;
    }
  
  }
});