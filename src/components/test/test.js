app.component('test', {
  templateUrl: 'src/components/test/test.ng.html',
  bindings: {
    placeholder: '@',
    value: '@',
    change: '&',
    opts: '=',
  },
  require: {
    parent: '^parent',
  },
  controller: function() {    
    this.value = 'some-value';    
    this.message = "Test";
    this.opts = {}; // need to define this obj
    this.opts.value = this.value; // set initial from parent

    this.$onInit = function() {
      console.log('Hello from test component!');
    }

    this.change = function() {
      this.opts.value = this.value;
      this.parent.value = this.value;
      console.log('Call change function in test component:', this.value, this.opts.value);
      console.log(this.value, this.opts);
    }

  }
});
