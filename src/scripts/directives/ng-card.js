'use strict';

angular.module('ngCard').directive('ngCard', function () {
  return {
    templateUrl: 'src/partials/ng-card.html',
    restrict: 'E',
    replace: true,
    scope: {
      placeholder: '@',
      errorMessage: '@',
      form: '=',
      validationCode: '@'
    },
    link: function(scope, element, attrs, ngModel) {
      scope.placeholder = scope.placeholder || 'Card number';
      scope.validationCode = scope.validationCode || 'cardNumber';

      //ngModel.$parsers.unshift(function(value) {
      //   var valid = card(value).isValid();
      //   ngModel.$setValidity(validationCode, valid);
      //   return valid ? value : undefined;
      //});
      //
      //ngModel.$formatters.unshift(function(value) {
      //   ngModel.$setValidity(validationCode, card(value).isValid());
      //   return value;
      //});
    }
  };
});
