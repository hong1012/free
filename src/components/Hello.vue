<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>hehe</li>
      <li>haha</li>
      <li>heihei</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'hello 1'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    background: red;

  li {

    margin: 20px;
  }

  }


</style>
