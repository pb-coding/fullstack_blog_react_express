import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import db_config from './config/db.js'

const db = mysql.createPool({
  host: db_config.HOST,
  user: db_config.USER,
  password: db_config.PASSWORD,
  database: db_config.DB
})

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Backend is running..')
});

app.get('/posts/get', (req, res) => {
    db.query(" SELECT * FROM posts", (err, result) => {
      res.send(result?result:[])
    })
})

app.get('/pages/get', (req, res) => {
  db.query(" SELECT * FROM pages", (err, result) => {
    res.send(result?result:[])
  })
})


app.post("/posts/insert", (req, res) => {
  db.query("INSERT INTO posts (post_title, post_content) VALUES (?, ?)", [req.body.setPostTitle, req.body.setPostContent], (err, result) => {
    if(err) {
      console.error(err)
      res.status(500).send({error: 'error'});
    }

    else {
      res.end()
    }
  })
  
})

app.post("/pages/insert", (req, res) => {
  db.query("INSERT INTO pages (page_name, link) VALUES (?, ?)", [req.body.setPageName, req.body.setPageLink], (err, result) => {
    if(err) {
      console.error(err)
      res.status(500).send({error: 'error'});
    }

    else {
      res.end()
    }
  })
  
})

app.delete("/posts/delete/:postId", (req, res) => {
  db.query("DELETE FROM posts WHERE id = ?", req.params.postId, (err, result) => {
    if (err) console.error(err);
    res.end()
  })
  
})

app.delete("/pages/delete/:pageId", (req, res) => {
  db.query("DELETE FROM pages WHERE id = ?", req.params.pageId, (err, result) => {
    if (err) console.error(err);
    res.end()
  })
  
})

app.put("/posts/update/:postId", (req, res) => {
  db.query("UPDATE posts SET post_content = ? WHERE id = ?", [req.body.contentUpdate, req.params.postId], (err, result) => {
    if (err) console.error(err)
    res.end()
  })
  
})

app.put("/pages/update/:pageId", (req, res) => {
  db.query("UPDATE pages SET page_name = ? WHERE id = ?", [req.body.pageNameUpdate, req.params.pageId], (err, result) => {
    if (err) console.error(err)
    res.end()
  })
  
})

app.listen('3001', () => { })