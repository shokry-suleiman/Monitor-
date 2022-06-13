angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.currentPage = 1;
  homePageVm.load = false;
  homePageVm.isSubmitting = false;
  activate(homePageVm.currentPage);

  function activate(page) {
    homePageVm.isSubmitting = true;
    Employees.getEmployees(page)
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        if (data.pages <= homePageVm.currentPage) {
          homePageVm.load = false;
        } else {
          homePageVm.load = true;
        }
        // homePageVm.isSubmitting = false;
      });
  }

  homePageVm.loadMoreEmployees = function () {
    ++homePageVm.currentPage;
    activate(homePageVm.currentPage);
  };
}
