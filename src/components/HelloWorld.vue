<template>
  <div class="hello">
    <h1 style="font-size:-webkit-xxx-large; margin:0">{{ msg }}</h1>
    <div style="position:relative">
<img v-if="toggle" src="../assets/a.jpg">
<img v-else  alt="Vue logo" src="../assets/beeb.jpg">
<div>
  <h1 class="num">{{chosenNum}} {{ending}}</h1>
</div>
    </div>
  <button style="position: relative" @click="demo">Determine Rating</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      myImage: '../assets/github_beerhall.jpg',
      toggle: true,
      list: ['../assets/github_beerhall.jpg', '../assets/logo.png'],
      chosenNum: '',
      ending: '',
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async demo() {
      this.chosenNum = '';
      this.ending = '';
      console.log('Taking a break...');
      this.toggle = false;
      await this.sleep(2000);
      this.toggle = true;
      console.log('Two seconds later, showing sleep in a loop...');

      // Sleep in loop
      for (let i = 0; i < 20; i++) {
        this.toggle = !this.toggle;
        await this.sleep(100);
      }
      const chosenNumber = Math.random() + 4;
      this.chosenNum = Math.round(chosenNumber * 10) / 10;
      this.ending = ' / 10';
    },
    picker() {
      for (let index = 0; index < 6; index++) {
        this.toggle == !this.toggle;
        console.log('a');
      }
      this.toggle = false;
      const chosenNumber = Math.random() + 3.75;
      this.chosenNum = Math.round(chosenNumber * 10) / 10;
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.num {
font-size: 5em;
    position: relative;
    /* margin-right: 26%; */
    /* margin-left: 39%; */
    background: white;
    /* margin-bottom: 50%; */
    /* z-index: 2; */
    top: -250px;
    margin: auto;
}

.hello {
  position: relative;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  font-size: 2em;
  text-align: center;
  color: #EF5350;
}

button{
  border: none;
  background: #EF5350;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5em;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 1px 5px rgba(#444,0.5);
  outline:none;
}
</style>
