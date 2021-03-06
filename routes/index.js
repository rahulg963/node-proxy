var express = require('express');
var router = express.Router();
var request = require("request");

// swiggy production URL
var swiggyEndpoint = "https://cloud-menu-cms.swiggy.com";

router.get('/swiggy/*', function (req, res, next) {
	console.log("Request Received : ");
	console.log(req);
	var requestUrl = req.originalUrl.substring(7);
	var endPoint = swiggyEndpoint + requestUrl;
	var headers = req.headers;
	delete(headers.host);
	delete(headers.origin);
	console.log("Request URL : " + endPoint);
	return request({
		method: 'GET',
		uri: endPoint,
		headers: headers,
		qs: req.query
	}, function (err, resp, body) {
		if (err) {
			console.log(err.message);
			return res.send(err);
		} else {
			console.log("Response Received : " + JSON.stringify(resp));
		}
		return res.send(resp.body);
	});
	//   res.json({'statusCode' : 123, 'data' : "test", "statusMessage" : "test", "code": "test", "request_id" : "test", "errors" : null});
});

router.post('/swiggy/*', function (req, res, next) {
	console.log("Request Received : ");
	console.log(req);
	var requestUrl = req.originalUrl.substring(7);
	var endPoint = swiggyEndpoint + requestUrl;
	var headers = req.headers;
	delete(headers.host);
	delete(headers.origin);
	delete(headers['content-length']);
	console.log("Request URL : " + endPoint);
	return request({
		method: 'POST',
		uri: endPoint,
		headers: headers,
		body: req.body,
		json: true
	}, function (err, resp, body) {
		if (err) {
			console.log(err.message);
			return res.send(err);
		} else {
			console.log("Response Received : " + JSON.stringify(resp));
		}
		return res.send(resp.body);
	});
});


router.put('/swiggy/*', function (req, res, next) {
	console.log("Request Received : ");
	console.log("Request Received : ");
	console.log(req);
	var requestUrl = req.originalUrl.substring(7);
	var endPoint = swiggyEndpoint + requestUrl;
	var headers = req.headers;
	delete(headers.host);
	delete(headers.origin);
	delete(headers['content-length']);
	console.log("Request URL : " + endPoint);
	return request({
		method: 'PUT',
		uri: endPoint,
		headers: headers,
		body: req.body,
		json: true
	}, function (err, resp, body) {
		if (err) {
			console.log(err.message);
			return res.send(err);
		} else {
			console.log("Response Received : " + JSON.stringify(resp));
		}
		return res.send(resp.body);
	});
});

module.exports = router;