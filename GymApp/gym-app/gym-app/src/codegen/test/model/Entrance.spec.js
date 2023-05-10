/*
 * GymApp
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
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
    describe('Entrance', function() {
      beforeEach(function() {
        instance = new GymApp.Entrance();
      });

      it('should create an instance of Entrance', function() {
        // TODO: update the code to test Entrance
        expect(instance).to.be.a(GymApp.Entrance);
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

      it('should have the property passId (base name: "passId")', function() {
        // TODO: update the code to test the property passId
        expect(instance).to.have.property('passId');
        // expect(instance.passId).to.be(expectedValueLiteral);
      });

      it('should have the property pass (base name: "pass")', function() {
        // TODO: update the code to test the property pass
        expect(instance).to.have.property('pass');
        // expect(instance.pass).to.be(expectedValueLiteral);
      });

      it('should have the property sectorId (base name: "sectorId")', function() {
        // TODO: update the code to test the property sectorId
        expect(instance).to.have.property('sectorId');
        // expect(instance.sectorId).to.be(expectedValueLiteral);
      });

      it('should have the property sector (base name: "sector")', function() {
        // TODO: update the code to test the property sector
        expect(instance).to.have.property('sector');
        // expect(instance.sector).to.be(expectedValueLiteral);
      });

      it('should have the property entranceEvents (base name: "entranceEvents")', function() {
        // TODO: update the code to test the property entranceEvents
        expect(instance).to.have.property('entranceEvents');
        // expect(instance.entranceEvents).to.be(expectedValueLiteral);
      });

    });
  });

}));
