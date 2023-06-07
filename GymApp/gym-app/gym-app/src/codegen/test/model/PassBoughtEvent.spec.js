/*
 * GymApp
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GymApp);
  }
}(this, function(expect, GymApp) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PassBoughtEvent', function() {
      beforeEach(function() {
        instance = new GymApp.PassBoughtEvent();
      });

      it('should create an instance of PassBoughtEvent', function() {
        // TODO: update the code to test PassBoughtEvent
        expect(instance).to.be.a(GymApp.PassBoughtEvent);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property ownerId (base name: "ownerId")', function() {
        // TODO: update the code to test the property ownerId
        expect(instance).to.have.property('ownerId');
        // expect(instance.ownerId).to.be(expectedValueLiteral);
      });

      it('should have the property dateTime (base name: "dateTime")', function() {
        // TODO: update the code to test the property dateTime
        expect(instance).to.have.property('dateTime');
        // expect(instance.dateTime).to.be(expectedValueLiteral);
      });

      it('should have the property passId (base name: "passId")', function() {
        // TODO: update the code to test the property passId
        expect(instance).to.have.property('passId');
        // expect(instance.passId).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "clientId")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property refresh (base name: "refresh")', function() {
        // TODO: update the code to test the property refresh
        expect(instance).to.have.property('refresh');
        // expect(instance.refresh).to.be(expectedValueLiteral);
      });

    });
  });

}));
