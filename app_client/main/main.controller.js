(function() {
  
  angular
    .module('meanApp')
    .controller('mainCtrl', mainCtrl);

  mainCtrl.$inject = ['$location', 'meanData','authentication'];
  function mainCtrl($location, meanData, authentication) {
    var vm = this;

    // vm.user = {};

    // meanData.getMain()
    //   .success(function(data) {
    //     vm.user = data;
    //   })
    //   .error(function (e) {
    //     console.log(e);
    //   });
    vm.user = {};

    meanData.getProfile()
      .success(function(data) {
        vm.user = data;
      })
      .error(function (e) {
        console.log(e);
      });
    console.log("Inside Main Controller");
    vm.onClick = function(){
      console.log("Logging Out");
      authentication.logout();
      $location.path("/");
    }
    vm.onClickProfile = function(){
      // console.log("Logging Out");
      // authentication.logout();
      $location.path("/profile");
    }
  }

})();