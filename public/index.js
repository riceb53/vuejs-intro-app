/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      message2: "Goodbye from Vue.js",
      reviews: [
        {
          text: "Vuejs is the best thing since sliced bread",
          rating: 5,
          reviewer: "Michael"
        },
        {
          text: "Vuejs is super dooper",
          rating: 4,
          reviewer: "Dan"
        },
        {
          text: "Vuejs is better than chinese checkers",
          rating: 3,
          reviewer: "Jay"
        }
      ],
      reviewText: "",
      reviewRating: "",
      reviewReviewer: ""


    };
  },
  created: function() {},
  methods: {
    addReview: function() {
      console.log("I'm adding a review!!!");
      // add a new object to the array
      var theNewReview = {
        text: this.reviewText,
        rating: this.reviewRating,
        reviewer: this.reviewReviewer
      }
      this.reviews.push(theNewReview);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
