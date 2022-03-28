const mysql = require('mysql');
var express = require('express');
var path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.js');
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


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

app.get('/equipment32.html', function (req, res, next) {
    res.render('equipment32.ejs');
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

app.get('/datatest2.html', function (req, res, next) {
    res.render('datatest2.ejs');
});

app.get('/animatedchartselement.html', function (req, res, next) {
    res.render('animatedchartselement.ejs');
});

app.get('/equipment3copy.html', function (req, res, next) {
    res.render('equipment3copy.ejs');
});

app.post('/books', (req,res) => {
	let param = req.body;
	let sql = 'insert into newbooks set ?';
     let data = {
		book_name: param.book_name,
		book_author: param.book_author,
		book_desc: param.book_desc
	}
db.base(sql,data,(results) => {
		res.json('已建立！');
})	
});

app.get('/books',(req,res) => {
	let sql = 'select * from newbooks'
	let data = null
	db.base(sql,data,(results) => {
		res.json(results)
	})
})

app.get('/books/:id',(req,res) => {
	let sql = 'select * from newbooks where id=?'
	let data = [req.params.id]
	db.base(sql,data,(results) => {
		res.json(results)
	})
})

app.delete('/books/:id',(req,res) => {
	let sql = 'delete from newbooks where id= ?'
	let data = [req.params.id]
	db.base(sql,data,(results) => {
		res.json('已删除！')
	})
})

app.put('/books/edit/:id',(req,res) => {
	let sql = 'update newbooks set book_name= ?,book_author= ?,book_desc= ? where id= ?'
	let data = [req.body.book_name,req.body.book_author,req.body.book_desc,req.body.id]
	db.base(sql,data,(results) => {
		res.json('已修改！')
	})
});

app.post('/cnc', (req,res) => {
	let param = req.body;
	let sql = 'insert into newbooks set ?';
     let data = {
		book_name: param.book_name,
		book_author: param.book_author,
		book_desc: param.book_desc
	}
db.base(sql,data,(results) => {
		res.json('已建立！');
})	
});

app.get('/books',(req,res) => {
	let sql = 'select * from newbooks'
	let data = null
	db.base(sql,data,(results) => {
		res.json(results)
	})
})

app.get('/books/:id',(req,res) => {
	let sql = 'select * from newbooks where id=?'
	let data = [req.params.id]
	db.base(sql,data,(results) => {
		res.json(results)
	})
})

app.delete('/books/:id',(req,res) => {
	let sql = 'delete from newbooks where id= ?'
	let data = [req.params.id]
	db.base(sql,data,(results) => {
		res.json('已刪除！')
	})
})

app.put('/books/edit/:id',(req,res) => {
	let sql = 'update newbooks set book_name= ?,book_author= ?,book_desc= ? where id= ?'
	let data = [req.body.book_name,req.body.book_author,req.body.book_desc,req.body.id]
	db.base(sql,data,(results) => {
		res.json('已修改！')
	})
});