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
;window.card = require('card.js');

angular.module('ngCard', []);

require('./templates');
require('./directives/ng-card');
;angular.module('ngCard').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/partials/ng-card.html',
    "<div class=\"appInputGroup\">\n" +
    "  <div class=\"appIconInput appIconInput--right\">\n" +
    "    <div\n" +
    "      class=\"appIconInput__icon icon ubnt-icon--search-2\"\n" +
    "    ></div>\n" +
    "    <input\n" +
    "      type=\"text\"\n" +
    "      placeholder=\"placeholder\"\n" +
    "      class=\"appIconInput__input\"\n" +
    "      ng-model=\"cardNumber\"\n" +
    "    >\n" +
    "    <div\n" +
    "      class= \"appInputFeedback appInputFeedback--danger\"\n" +
    "      ng-show= \"form.$error.required\"\n" +
    "      >{{scope.errorMessage}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
