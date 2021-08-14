const CustomButton = {
  template: `<button>Custom Button</button>`
};

// You can also register components globally using the Vue.component() method, as follows:
Vue.component('google-link', {
  template: `
    <a href="https://google.com" target="_blank" :style="style">
      Google searching {{counter}}
    </a>
  `,
  props: {
    color: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 20,
      validator(value) {
        return value > 0; 
      }
    },
    counter: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style() {
      return {color: this.color, 'font-size': this.size + 'px'};
    }
  }
});

const app = new Vue({
  el: '.app',
  components: {
    CustomButton // Object short notation
  },
  data: {
    number: 0
  },
  created() {
    setInterval(() => this.number++, 1000)
  }
});

