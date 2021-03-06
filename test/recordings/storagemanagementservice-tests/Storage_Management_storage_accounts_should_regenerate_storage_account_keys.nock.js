// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988/listKeys?api-version=2016-12-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"IZJGXxk08HL2dyz5FLY9/R+r9SiMuEvN8k3xiUHQHUv5JJFkO8Qr5408BIAVL+BqcKuDeCASXERh3RU1zD0hlw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"ypCFFeIzEx0bNf8YcP9v3LJF+FRnTzqqi3oW9LhipmLSTcmL/njrN7vYs+mSoZNBRieaTjbmRXmYC6QfqPP3wA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1ab9df48-a1a3-4f73-a777-39decc5594d4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '1ab9df48-a1a3-4f73-a777-39decc5594d4',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091610Z:1ab9df48-a1a3-4f73-a777-39decc5594d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988/listKeys?api-version=2016-12-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"IZJGXxk08HL2dyz5FLY9/R+r9SiMuEvN8k3xiUHQHUv5JJFkO8Qr5408BIAVL+BqcKuDeCASXERh3RU1zD0hlw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"ypCFFeIzEx0bNf8YcP9v3LJF+FRnTzqqi3oW9LhipmLSTcmL/njrN7vYs+mSoZNBRieaTjbmRXmYC6QfqPP3wA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1ab9df48-a1a3-4f73-a777-39decc5594d4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '1ab9df48-a1a3-4f73-a777-39decc5594d4',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091610Z:1ab9df48-a1a3-4f73-a777-39decc5594d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988/regenerateKey?api-version=2016-12-01', '*')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"fw8iyUZoQli71Y0u1iEwzTDGZTRhOgkZyS03d6sCAZ+9q3uYEx6o7VpRlrSeHYLbWP1zz3tqfDhVmMRzjhxMGw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"ypCFFeIzEx0bNf8YcP9v3LJF+FRnTzqqi3oW9LhipmLSTcmL/njrN7vYs+mSoZNBRieaTjbmRXmYC6QfqPP3wA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c40fa45b-a456-40a5-920d-348a261aebe4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'c40fa45b-a456-40a5-920d-348a261aebe4',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091612Z:c40fa45b-a456-40a5-920d-348a261aebe4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup3502/providers/Microsoft.Storage/storageAccounts/testacc6988/regenerateKey?api-version=2016-12-01', '*')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"fw8iyUZoQli71Y0u1iEwzTDGZTRhOgkZyS03d6sCAZ+9q3uYEx6o7VpRlrSeHYLbWP1zz3tqfDhVmMRzjhxMGw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"ypCFFeIzEx0bNf8YcP9v3LJF+FRnTzqqi3oW9LhipmLSTcmL/njrN7vYs+mSoZNBRieaTjbmRXmYC6QfqPP3wA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c40fa45b-a456-40a5-920d-348a261aebe4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'c40fa45b-a456-40a5-920d-348a261aebe4',
  'x-ms-routing-request-id': 'JAPANEAST:20170508T091612Z:c40fa45b-a456-40a5-920d-348a261aebe4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 08 May 2017 09:16:11 GMT',
  connection: 'close' });
 return result; }]];