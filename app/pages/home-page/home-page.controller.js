angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.filter = $location.search().filter;

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }

  homePageVm.search = function () {
    $location.search('filter', homePageVm.filter);
  };

  homePageVm.clear = function () {
    homePageVm.filter = '';
    $location.url($location.path());
  };
}
