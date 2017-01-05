<template>

  <div class="test">
    my testing
    {{ message }}

    <button v-on:click.once=greet>增加 1</button>
    <p v-if="counter%2==0">这个按钮被点击了 {{ counter }} 次。</p>

    <ul>
      <liCmp v-for="(item2,index) of items"
             v-bind:class="item2.cname"
             v-bind:id="item2.id"
      ></liCmp>

    </ul>

    <ul>
      <li v-for="(item,index) of items" v-on:click.once=beclick
          v-bind:class="item.id % 2==0 ?'lired':'ligreen' "
      >
        {{ index+item.message+'*'+item.id }}
      </li>

    </ul>

    <ul>
      <template v-for="item in items">
        <li>{{ item.message }}</li>
        <li class="divider">kkkk</li>
      </template>

      <li v-for="value in object">
        {{ value }}
      </li>

    </ul>


  </div>


</template>

<script>

  var liCmp = {
    props: ['id'],
    template: '<li>A  component! my id is {{id}}</li>'
  }


  export default {

    data: function () {
      return {
        'message': 'hello ',
        items: [
          {message: 'Foo', id: 0, cname: 'lired'},
          {message: 'Bar', id: 1, cname: 'ligreen'}
        ],
        object: {
          FirstName: 'John',
          LastName: 'Doe',
          Age: 30
        },
        counter: 0
      }
    },

    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例

        this.counter += 1;
        this.items.push({message: 'hongge', id: this.items.length});
        /* alert('Hello ' + this.counter + '!')
         // `event` 是原生 DOM 事件
         alert(event.target.tagName)*/
      },
      beclick: function (event) {
        alert(event.target.innerText)
      }
    },
    computed: {
      classObject: function (obj) {
        //console.log(JSON.stringify(this));
        //console.log('***');
        console.log(obj);
        let cssname = 'lired';
        if (obj.id == 1) {
          cssname = 'ligreen';
        }
        return cssname;
      }
    },
    components: {
      liCmp
    }
  }
</script>

<style scoped>

  .test {

    color: #2c3e50;
    margin-top: 60px;
    background: red;
  }

  ul {
    list-style: none;

  }

  li {
    margin: 20px;
    border-bottom: 1px solid #444444;
  }

  .lired {

    background: mediumvioletred;

  }

  .ligreen {
    background: greenyellow;

  }

</style>
