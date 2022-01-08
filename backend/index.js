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

app.get('/get', (req, res) => {
    const SelectQuery = " SELECT * FROM posts";
    db.query(SelectQuery, (err, result) => {
        res.send(result)
    })
})


app.post("/insert", (req, res) => {
    const postTitle = req.body.setPostTitle;
    console.log(req);
    const postContent = req.body.setPostContent;
    const InsertQuery = "INSERT INTO posts (post_title, post_content) VALUES (?, ?)";
    db.query(InsertQuery, [postTitle, postContent], (err, result) => {
      console.log(result)
    })
})

app.delete("/delete/:postId", (req, res) => {
  const postId = req.params.postId;
  const DeleteQuery = "DELETE FROM posts WHERE id = ?";
  db.query(DeleteQuery, postId, (err, result) => {
    if (err) console.log(err);
  })
})

app.put("/update/:postId", (req, res) => {
  const postContent = req.body.contentUpdate;
  const postId = req.params.postId;
  const UpdateQuery = "UPDATE posts SET post_content = ? WHERE id = ?";
  db.query(UpdateQuery, [postContent, postId], (err, result) => {
    if (err) console.log(err)
  })
})

app.listen('3001', () => { })