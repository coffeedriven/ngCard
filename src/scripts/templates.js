angular.module('ngCard').run(['$templateCache', function($templateCache) {
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
