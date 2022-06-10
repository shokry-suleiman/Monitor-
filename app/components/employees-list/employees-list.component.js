angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      filter: '<',

    },
  })
  .filter('highlight', EmployeesListHighlight);

function EmployeesListComponent() {}

function EmployeesListHighlight($sce) {
  return function (text, filter) {
    if (filter) {
      text = text.replace(
        new RegExp('(' + filter + ')', 'gi'),
        '<span class="c-users-list__highlighted">$1</span>'
      );
    }
    return $sce.trustAsHtml(text);
  };
}
