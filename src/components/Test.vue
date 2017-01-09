<template>
  <div class="head">

  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>

  </div>
</template>

<script>
   export default{
     data:function (){
       return {
         message:'hello JS',
       }
     },
     methods:{
       reverseMessage:function(){
         this.message=this.message.split('').reverse().join('');
       }
     }
   }
</script>


<style  lang="less"  scoped>

 .head{
   padding: 10px;
   margin: 10px;
 }

</style>

