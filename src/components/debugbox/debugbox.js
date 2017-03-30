app.component('debugbox', {
  templateUrl: 'src/components/debugbox/debugbox.ng.html',
  bindings: {
    ctrl: '=', 
    // ^ need this very important binding!
    // may be one- or two-way.
  },
  controller: function() {
    this.$onInit = function() {
      console.log('Hello from debugbox component!');
    }
  }
});
