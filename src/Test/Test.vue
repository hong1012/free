<template>

  <div class="test">
    my testing
    {{ message }}
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>

    </ul>

    <Hell></Hell>

  </div>


</template>

<script>

import Hell from '../components/Hello.vue'

export default {

  data:function () {
    return {
      'message':'hello ',
      items: [
        {message: 'Foo' },
        {message: 'Bar' }
      ]
    }
  },
  components: {
    Hell
  }
}
</script>

<style scoped>

.test {

  color: #2c3e50;
  margin-top: 60px;
  background: red;
}

  ul{
    list-style: none;

  }

</style>
