(function() {
  
  angular
    .module('meanApp')
    .controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = ['$location', 'meanData'];
  function mainCtrl($location, meanData) {
    // var vm = this;

    // vm.user = {};

    // meanData.getMain()
    //   .success(function(data) {
    //     vm.user = data;
    //   })
    //   .error(function (e) {
    //     console.log(e);
    //   });
  }

})();