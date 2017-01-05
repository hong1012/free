<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>可乐</li>
      <li>雪碧</li>
      <li>七喜</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'hello2',
    data () {
      return {
        msg: '饮料列表'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    background: green;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
