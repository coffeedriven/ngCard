'use strict';

describe('Directive: ngCard', function () {
  var scope;
  var $compile;
  var isolatedScope;

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
      scope.form = {};
      element = $compile(template)(scope);
      scope.$apply();
      isolatedScope = element.isolateScope();
    });

    afterEach(function () {
      scope.$destroy();
    });

    it('should set default placeholder', function() {
      expect(isolatedScope.placeholder).toEqual('Card number');
    });
  });
});
