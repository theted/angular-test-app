app.component('child', {
  templateUrl: 'src/components/child/child.ng.html',
  require: '^parent',
  bindings: {
    change: '&',
    value: '@',
    opts: '<', 
    // ^ think it only needs one-way binding, 
    // but it can also use two-way. some 
    // binding is required though.
  },
  controller: function() {
    var _this = this;
        
    this.message = "Child";
    this.value = "Child value";

    this.$onInit = function() {
      console.log('Hello from child component!');
    }

    this.update = function() {
      console.log('Update from child component');
    }

  }
});
