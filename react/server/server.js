const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'restaurant_complex1'
});

db.connect(err => {
  if (err) {
    console.error('Помилка підключення до бази даних: ' + err);
  } else {
    console.log('Підключено до бази даних MySQL');
  }
});


// Define a route to get data from the "products" table
app.get('/get', (req, res) => {
    console.log("results: 111"); 
    const query = 'SELECT * FROM product'; // Replace "product" with your table name
    

    console.log("results: s");  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).send('Error retrieving data from the database');
        return;
      }
      console.log("results: " + JSON.stringify(results));
      // Send the retrieved data as JSON
      res.json(results);
    });
  });



app.listen(3001, () => {
console.log("port 3001");
})
