'use strict';

describe('Directive: ngCard', function () {
  var scope;
  var $compile;

  beforeEach(angular.mock.module('ngCard'));

  beforeEach(inject(function($injector) {
    $compile = $injector.get('$compile');
    scope    = $injector.get('$rootScope').$new();
  }));

  describe('default', function() {
    var element;
    var template = '<ng-card ng-model="card"></ng-card>';

    beforeEach(function () {
      scope.card = {};
      element = $compile(template)(scope);
      scope.$apply();
    });

    afterEach(function () {
      scope.$destroy();
    });

    it('should set default placeholder', function() {
      expect(scope.placeholder).toEqual('Card number');
    });
  });
});
