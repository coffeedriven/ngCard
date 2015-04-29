'use strict';

angular.module('ngCard').directive('ngCard', function () {
  return {
    templateUrl: 'src/partials/ng-card.html',
    restrict: 'E',
    replace: true,
    link: function(scope, element, attrs, ngModel) {
      scope.placeholder = attrs.placeholder || 'Card number';
      scope.errorMessage = attrs.errorMessage || 'Card number is not valid';
      scope.form = attrs.form;
      var validationCode = attrs.validationCode || 'cardNumber';

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
