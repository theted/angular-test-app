app.component('parent', {
  templateUrl: 'src/components/parent/parent.ng.html',
  controller: function() {
    this.$onInit = function() {
      console.log('Hello from parent component!');
    }
    this.change = function() {
      console.log('Call change function in parent component:', this.value, this.opts.value);
      // this.opts.value = this.value;
    }
  }
});
