
const mysql = require('mysql')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.js');
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/datatest', function (req, res, next) {
  res.render('datatest.ejs');
})

app.post('/books', (req,res) => {
	let param = req.body;
	let sql = 'insert into newbooks set ?';
     let data = {
		book_name: param.book_name,
		book_author: param.book_author,
		book_desc: param.book_desc
	}
db.base(sql,data,(results) => {
		res.json('创建成功！');
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
		res.json('删除成功！')
	})
})

app.put('/books/edit/:id',(req,res) => {
	let sql = 'update newbooks set book_name= ?,book_author= ?,book_desc= ? where id= ?'
	let data = [req.body.book_name,req.body.book_author,req.body.book_desc,req.body.id]
	db.base(sql,data,(results) => {
		res.json('修改成功！')
	})
})
app.listen(3000, () => {
	console.log('running...');
})
