const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: 'mysql_db',
    user: 'MYSQL_USER',
    password: 'MYSQL_PASSWORD',
    database: 'stt_db'
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

app.get('/navigation/get', (req, res) => {
  db.query(" SELECT * FROM nav", (err, result) => {
    res.send(result?result:[])
  })
})


app.post("/posts/insert", (req, res) => {
    db.query("INSERT INTO posts (post_title, post_content) VALUES (?, ?)", [req.body.setPostTitle, req.body.setPostContent], (err, result) => {
      console.error(err)
      res.end()
    })
    
})

app.post("/navigation/insert", (req, res) => {
  db.query("INSERT INTO nav (nav_name, link) VALUES (?, ?)", [req.body.setNavName, req.body.setNavLink], (err, result) => {
    console.error(err)
    res.end()
  })
  
})

app.delete("/posts/delete/:postId", (req, res) => {
  db.query("DELETE FROM posts WHERE id = ?", req.params.postId, (err, result) => {
    if (err) console.error(err);
    res.end()
  })
  
})

app.delete("/navigation/delete/:navId", (req, res) => {
  db.query("DELETE FROM nav WHERE id = ?", req.params.navId, (err, result) => {
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

app.put("/navigation/update/:navId", (req, res) => {
  db.query("UPDATE nav SET nav_name = ? WHERE id = ?", [req.body.navNameUpdate, req.params.navId], (err, result) => {
    if (err) console.error(err)
    res.end()
  })
  
})

app.listen('3001', () => { })