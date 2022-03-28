var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
    res.render('index.ejs');
})

app.get('/index.html', function (req, res, next) {
    res.render('index.ejs');
})

app.get('/header.html', function (req, res, next) {
    res.render('header.ejs');
})

app.get('/leftframe.html', function (req, res, next) {
    res.render('leftframe.ejs');
})

app.get('/alldata.html', function (req, res, next) {
    res.render('alldata.ejs');
})

app.get('/charts.html', function (req, res, next) {
    res.render('charts.ejs');
})

app.get('/animatedcharts.html', function (req, res, next) {
    res.render('animatedcharts.ejs');
})

app.get('/equipment1.html', function (req, res, next) {
    res.render('equipment1.ejs');
})

app.get('/equipment2.html', function (req, res, next) {
    res.render('equipment2.ejs');
})

app.get('/equipment3.html', function (req, res, next) {
    res.render('equipment3.ejs');
})

app.get('/equipmentlist.html', function (req, res, next) {
    res.render('equipmentlist.ejs');
})

app.get('/factoryA.html', function (req, res, next) {
    res.render('factoryA.ejs');
})

app.get('/vedio.html', function (req, res, next) {
    res.render('vedio.ejs');
})

app.get('/tables.html', function (req, res, next) {
    res.render('tables.ejs');
})

app.get('/3de.html', function (req, res, next) {
    res.render('3de.ejs');
})
