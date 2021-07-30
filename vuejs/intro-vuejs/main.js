var globalEventBus = new Vue();

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div>
      <div class="product">
        <div class="product-image">
          <img v-bind:src="image" v-bind:alt="description">
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else :class="{'out-of-stock': !inStock}">Out of Stock</p>
          <p>Shipping: {{shipping}}</p>
          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
          <div class="variants">
            <div v-for="(variant, index) in variants" :key="variant.id" 
              :style="{backgroundColor: variant.color}" class="variant-box"
              @mouseover="selectVariant(index)">
            </div>
          </div>

          <button v-on:click="emitAddToCartEvent" :disabled="!inStock"
            :class="{disabledButton: !inStock}">Add to Cart</button>
          <button @click="emitRemoveFromCartEvent">Remove from Cart</button>
        </div>
      </div>

      <review-tabs :reviews="reviews"></review-tabs>
    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariantIndex: 0,
      description: "This is the first product.",
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {id: 1, color: 'green', image: './assets/green-socks.png', quantity: 0},
        {id: 2, color: 'blue', image: './assets/blue-socks.png', quantity: 10}
      ],
      onSale: true,
      reviews: []
    };
  },
  methods: {
    // Can use 'concise methods' in ES6
    emitAddToCartEvent: function() {
      if (!this.inStock) return;

      this.$emit('add-to-cart', this.variants[this.selectedVariantIndex].id);
    },
    emitRemoveFromCartEvent: function() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariantIndex].id);
    },
    selectVariant: function(index) {
      this.selectedVariantIndex = index;
    }
  },
  computed: {
    title: function() {
      return this.brand + ' - ' + this.product;
    },
    image: function() {
      return this.variants[this.selectedVariantIndex].image;
    },
    inStock: function() {
      return this.variants[this.selectedVariantIndex].quantity;
    },
    shipping: function() {
      return this.premium ? 'Free' : 2.99;
    }
  },
  mounted() {
    globalEventBus.$on('submit-review', review => {
      this.reviews.push(review);
    });
  }
});

Vue.component('product-review', {
  template: `
    <div>
      <!-- '.prevent' prevents default page default behaviour (page won't loading after submit) -->
      <form class="review-form" @submit.prevent="submitComment">
        <div v-if="errors.length" class="error-list">
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{error}}</li>
          </ul>
        </div>
        <p>
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Name" v-model="name">
        </p>
        <p>
          <label for="review">Review:</label>
          <textarea name="review" id="review" v-model="review"></textarea>
        </p>
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </p>
        <p>
          <label>Would you recommend this product?</label><br>
          <input type="radio" v-model="willRecommend" value="yes">
          <label for="html">Yes</label><br>
          <input type="radio" v-model="willRecommend" value="no">
          <label for="javascript">No</label>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      willRecommend: null,
      errors: []
    };
  },
  methods: {
    submitComment() {
      this.errors = [];
      if (this.name && this.review && this.rating && this.willRecommend) {
        let review = {
          name: this.name,
          review: this.review,
          rating: this.rating
        };
        globalEventBus.$emit('submit-review', review);
        // Reset form
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        if (!this.name) this.errors.push('Name required.');
        if (!this.review) this.errors.push('Review required.');
        if (!this.rating) this.errors.push('Rating required.');
        if (!this.willRecommend) this.errors.push('Recommend required.');
      }
    }
  }
});

Vue.component('review-tabs', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: `
    <div class="review-box">
      <div class="tab">
        <button v-for="(tab, index) in reviewTabs" :key="index"
        @click="selectedTabIndex = index" class="tablinks"
        :class="{'active': tabActive(index)}">{{tab}}</button>
      </div>

      <div class="tabcontent" v-show="selectedTabIndex == 0">
        <product-review></product-review>
      </div>
      
      <div class="tabcontent" v-show="selectedTabIndex == 1">
        <div class="review-item">
          <p v-if="!reviews.length"><i>Do not have any review yet.</i></p>
          <p v-for="(review, index) in reviews" :key="index">
            <b>{{review.name}}</b> <i>{{review.rating}} stars</i><br>
            <span>{{review.review}}</span>
          </p>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      reviewTabs: ['Make a review', 'Reviews'],
      selectedTabIndex: 0
    };
  },
  methods: {
    tabActive(currentIndex) {
      return this.selectedTabIndex === currentIndex;
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    premiumUser: true,
    cart: []
  },
  methods: {
    addProductToCart(id) {
      this.cart.push(id)
    },
    removeProductFromCart(id) {
      let removedIndex = this.cart.indexOf(id);
      if (removedIndex === -1) return;
      this.cart.splice(removedIndex, 1);
    }
  }
});
