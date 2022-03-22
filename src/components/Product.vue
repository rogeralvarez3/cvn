<template>
  <v-container>
      <v-card>
        <v-card-title class="pa-0 pl-2 pr-2 grey lighten-5" v-text="title"></v-card-title>
        <v-divider></v-divider>
        <v-card-text></v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
export default {
  props:{
    title:String,
    images:Array,
    price:Number,
    description:String,
    location:String,
    shipping:Number
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>