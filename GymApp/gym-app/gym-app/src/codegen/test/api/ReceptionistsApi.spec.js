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

  beforeEach(function() {
    instance = new GymApp.ReceptionistsApi();
  });

  describe('(package)', function() {
    describe('ReceptionistsApi', function() {
      describe('apiReceptionistsGet', function() {
        it('should call apiReceptionistsGet successfully', function(done) {
          // TODO: uncomment apiReceptionistsGet call and complete the assertions
          /*

          instance.apiReceptionistsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(GymApp.Receptionist);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiReceptionistsIdDelete', function() {
        it('should call apiReceptionistsIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for apiReceptionistsIdDelete call
          /*

          instance.apiReceptionistsIdDelete(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiReceptionistsIdGet', function() {
        it('should call apiReceptionistsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for apiReceptionistsIdGet call and complete the assertions
          /*

          instance.apiReceptionistsIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GymApp.Receptionist);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiReceptionistsIdPut', function() {
        it('should call apiReceptionistsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for apiReceptionistsIdPut call
          /*
          var opts = {};

          instance.apiReceptionistsIdPut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiReceptionistsPost', function() {
        it('should call apiReceptionistsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for apiReceptionistsPost call and complete the assertions
          /*
          var opts = {};

          instance.apiReceptionistsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(GymApp.Receptionist);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
