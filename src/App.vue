<template>
  <div id="app">
   <div>
      <label>Name:</label>
      <input type="text" v-model="name" @keyup.enter="submitNames">
      <button type="button" @click="submitNames">
        Add
      </button>
   </div>

   <div>
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']">{{personName.name}}
          <div v-if="!personName.edit">
          <button @click="removePerson(personName['.key'])">Remove</button>
          <button @click="editPerson(personName['.key'])">Edit</button>
          <br>
          <br>
          </div>
          <div v-else>
            <input type="text" v-model="personName.name">
            <button @click="savePersonName(personName)">Save</button>
            <button @click="cancelPersonName(personName['.key'])">Cancel</button>
          </div>
        </li>        
      </ul>
   </div>
  </div>
</template>

<script>
import { namesRef } from './firebase'
export default {
  name: 'app',
  data(){
    return{
      name:''
    }
  },
  methods:{
    submitNames:function(){
      namesRef.push({name:this.name,edit:false})
    },
    removePerson:function(key){
      namesRef.child(key).remove();
    },
    editPerson:function(key){
      namesRef.child(key).update({edit:true})
    },
    cancelPersonName:function(key){
      namesRef.child(key).update({edit:false})
    },
    savePersonName:function(person){
      const key=person['.key'];
      namesRef.child(key).set({name:person.name, edit:false})
    }
  },
  firebase:{
    names:namesRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
ul {
  list-style-type: none;    
}
</style>
