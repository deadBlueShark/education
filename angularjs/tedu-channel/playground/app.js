// Init a module
var playGroundApp = angular.module('playGround', []); // include dependencies inside []

// Declare a controller belongs to playGroundApp
playGroundApp.controller('HelloController', function ($scope, $rootScope) {
// $scope is a bridge between controller and view
  $scope.message = 'Hello AngularJS controller!';
  var employee = {
    name: "Nguyen",
    age: 23
  }
  $scope.employee = employee;
  $scope.introduce = function () {
    $scope.introSentence = "I am " + employee.name + ". I'm " + employee.age + " years old.";
  }

  $rootScope.rootMessage = "Hello $rootScope!";
})

playGroundApp.controller('ScopeController', function ($scope) {
  $scope.message = "Hello $scope";
})

playGroundApp.controller('DirectiveController', function ($scope) {
  var employees = [
    {firstName: "David", lastName: "Teo", age: 90},
    {firstName: "Cris", lastName: "Patt", age: 20},
    {firstName: "Lionel", lastName: "Mess", age: 30}
  ]
  $scope.employees = employees;

  $scope.provinces = [
    {
      name: "TT-HUE", towns: [
        {name: "Phong Dien"}, {name: "Phong Thuy"}, {name: "Phu Loc"}
      ]
    },
    {
      name: "Da Nang", towns: [
        {name: "Lien Chieu"}, {name: "Hai Chau"}, {name: "Ngu Hanh Son"}
      ]
    },
    {
      name: "Sai Gon", towns: [
        {name: "Binh Thanh"}, {name: "Phu Nhuan"}, {name: "Hoc Mon"}
      ]
    },
  ]


  $scope.countries = [
    {name: "USA", celebs: {
        music: "Taylor Swift", physics: "Albert Einstein", a: "AA", b: "BBB"
      }
    },
    {name: "Portugal", celebs: {football: "CR7", c: "CCC", e: "EEEE", f: "FFF"}},
    {name: "Spain", celebs: {football: "CR7", c: "CCC", e: "EEEE", f: "FFF"}}
  ]

  $scope.trackParentId = function(index) {
    console.log(index);
  }

  $scope.testUsa = function(country) {
    console.log(country)
    return country.name == 'USA'
  }
})

playGroundApp.controller('CustomDirectiveController', function () {

}).directive('loginForm', function () {
  return {
    template:
      '<div class="form-group">' +
        '<label>Email address</label>' +
        '<input type="email" class="form-control" aria-describedby="emailHelp">' +
        '<small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>' +
      '</div>' +
      '<div class="form-group">' +
        '<label>Password</label>' +
        '<input type="password" class="form-control">' +
      '</div>' +
      '<div class="form-group form-check">' +
        '<input type="checkbox" class="form-check-input" id="exampleCheck">' +
        '<label class="form-check-label" for="exampleCheck">Check me out</label>' +
      '</div>'
  }
}).directive('submitButtonGroup', function () {
  return {
    templateUrl: "templates/submit-button-group.html"
  }
})

playGroundApp.controller('EventDirectiveController', function ($scope) {
  $scope.events = [
    {
      title: "AWS Webinar",
      likeCount: 0,
      dislikeCount: 0,
      like: function () {
        ++this.likeCount;
      },
      dislike: function () {
        ++this.dislikeCount
      }
    },
    {
      title: "TED: Bill Gates",
      likeCount: 0,
      dislikeCount: 0,
      like: function () {
        ++this.likeCount;
      },
      dislike: function () {
        ++this.dislikeCount
      }
    },
    {
      title: "Talkshow: Operah Whiprey",
      likeCount: 0,
      dislikeCount: 0,
      like: function () {
        ++this.likeCount;
      },
      dislike: function () {
        ++this.dislikeCount
      }
    }
  ]

  $scope.increaseLikes = function (event) {
    ++event.likeCount;
  }

  $scope.decreaseLikes = function (event) {
    ++event.dislikeCount;
  }

  $scope.posts = [new Post('I love JS'), new Post('Learn Python')];
})

class Post {
  constructor(title) {
    this.title = title;
    this.likeCount = 0;
    this.dislikeCount = 0;
  }

  likes() {
    ++this.likeCount;
  }

  dislike() {
    ++this.dislikeCount;
  }
}

playGroundApp.controller("FilterController", function ($scope) {
  $scope.exchangeRates = [
    {currencyName: "USD", date: new Date(), rate: 23.56},
    {currencyName: "EUR", date: new Date(), rate: 25.74},
    {currencyName: "GBP", date: new Date(), rate: 27.84}
  ]
})
