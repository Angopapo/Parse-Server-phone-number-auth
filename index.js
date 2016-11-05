//Created by Maravilho Singa (Angopapo, inc)

// Helper functions for accessing the Facebook Graph API.
var https = require('https');
var Parse = require('parse/node').Parse;
var crypto = require('crypto')

// Returns a promise that fulfills iff this user id is valid.
function validateAuthData(authData, config) {
  var appSecretProof = crypto.createHmac('sha256', config.appSecret).update(authData.access_token).digest('hex');
  return graphRequest('me/?access_token=' + authData.access_token + '&appsecret_proof=' + appSecretProof)
    .then((data) => {
      if (data && data.id == authData.id) {
        return;
      }
      throw new Parse.Error(
        Parse.Error.OBJECT_NOT_FOUND,
        'AccountKit auth is invalid for this user.');
    });
}

// Returns a promise that fulfills iff this app id is valid.
function validateAppId(appIds, authData, config) {
  return Promise.resolve();
}

// A promisey wrapper for FB graph requests.
function graphRequest(path) {
  return new Promise(function(resolve, reject) {
    https.get('https://graph.accountkit.com/v1.0/' + path, function(res) {
      var data = '';
      res.on('data', function(chunk) {
        data += chunk;
      });
      res.on('end', function() {
        data = JSON.parse(data);
        resolve(data);
      });
    }).on('error', function(e) {
      reject('Failed to validate this access token with Facebook AccountKit.');
    });
  });
}

module.exports = {
  validateAppId: validateAppId,
  validateAuthData: validateAuthData
};
