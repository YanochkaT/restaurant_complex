const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

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

const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail'
  auth: {
    user: 'YourGmailName@gmail.com', //------------------------------------------------------------ Сюда свою пошту
    pass: 'pass',  //------------------------------------------------------------ Сюда свій пароль але не звичайний а пароль до застосунка(здається воно так називається, кароч якшо я забуд розказати спитаєшь)
  },
});

// Define a route to get data from the "products" table
app.get('/getAllRows', (req, res) => {
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

app.get('/getRowsWith1', (req, res) => {
  const query = 'SELECT * FROM product WHERE category_id = "1"';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ' + err);
      res.status(500).send('Error retrieving data from the database');
      return;
    }
    console.log("results: " + JSON.stringify(results));
    res.json(results);
   });
  });

  app.get('/getRowsWith2', (req, res) => {
    const query = 'SELECT * FROM product WHERE category_id = "2"';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the query: ' + err);
        res.status(500).send('Error retrieving data from the database');
        return;
      }
      console.log("results: " + JSON.stringify(results));
      res.json(results);
     });
    });

/*------------*/
app.get('/getRowsWith3', (req, res) => {
  const query = 'SELECT * FROM product WHERE category_id = "3"';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ' + err);
      res.status(500).send('Error retrieving data from the database');
      return;
    }
    console.log("results: " + JSON.stringify(results));
    res.json(results);
   });
  });


  app.get('/getRowsWith4', (req, res) => {
    const query = 'SELECT * FROM product WHERE category_id = "4"';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the query: ' + err);
        res.status(500).send('Error retrieving data from the database');
        return;
      }
      console.log("results: " + JSON.stringify(results));
      res.json(results);
     });
    });

    app.get('/getRowsWith5', (req, res) => {
      const query = 'SELECT * FROM product WHERE category_id = "5"';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error executing the query: ' + err);
          res.status(500).send('Error retrieving data from the database');
          return;
        }
        console.log("results: " + JSON.stringify(results));
        res.json(results);
       });
      });

      app.get('/getRowsWith6', (req, res) => {
        const query = 'SELECT * FROM product WHERE category_id = "6"';
        db.query(query, (err, results) => {
          if (err) {
            console.error('Error executing the query: ' + err);
            res.status(500).send('Error retrieving data from the database');
            return;
          }
          console.log("results: " + JSON.stringify(results));
          res.json(results);
         });
        });


        app.get('/getRowsWith7', (req, res) => {
          const query = 'SELECT * FROM product WHERE category_id = "7"';
          db.query(query, (err, results) => {
            if (err) {
              console.error('Error executing the query: ' + err);
              res.status(500).send('Error retrieving data from the database');
              return;
            }
            console.log("results: " + JSON.stringify(results));
            res.json(results);
           });
          });
/*--------*/


function generateVerificationCode() {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post('/register', async (req, res) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const plainPassword = req.body.password; // Get the plain text password
  const verificationCode = generateVerificationCode(); // Generate a 5-digit code

  try {
    // Hash the password
    const saltRounds = 10; // You can adjust the number of salt rounds for security
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    // Insert user data and hashed password along with the verification code into the database
    db.query(
      "INSERT INTO users (name, phone_number, email, password, verification_code) VALUES (?, ?, ?, ?, ?)",
      [name, phoneNumber, email, hashedPassword, verificationCode],
      (err, result) => {
        if (result) {
          console.log("111");
          res.send(result);
        } else {
          console.log("222");
          res.send({ message: "ENTER CORRECT ASKED DETAILS!" });
        }
      }
    );
  } catch (err) {
    console.log("333");
    console.error("Error registering user: " + err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});



app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Error querying the database: ' + err);
      return res.status(500).send({ message: 'Internal Server Error' });
    }

    if (results.length === 0) {
      console.log('no user');
      return res.status(401).send({ message: 'Wrong email' });
    }

    const user = results[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      console.log('logged');

      if (!user.email_verified_at) {
        // Email is not verified, send the verification code and navigate to EmailVerification
        const verificationCode = user.verification_code;
        const emailMessage = `Your verification code is: ${verificationCode}`;

        const mailOptions = {
          from: '"Shop.com" <YourGmailName@gmail.com>',  //------------------------------------------------------------ Сюда ту саму свою пошту
          to: user.email,
          subject: 'Verification Code',
          text: emailMessage,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email: ' + error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        const token = jwt.sign(
          {
            userId: user.id,
            userName: user.name,
            email: user.email,
            phoneNumber: user.phone_number,
          },
          'jktrxsw2005',
          { expiresIn: '1h' }
        );
        console.log(token);
        console.log("111");

        res.status(200).send({ message: 'Email not verified', token, email_verified_at: null });
      } else {
        // Email is already verified, you can navigate to another page (e.g., MainPage)
        console.log(user.phone_number);
        // Generate a JWT token with the user ID
        const token = jwt.sign(
          {
            userId: user.id,
            userName: user.name,
            email: user.email,
            phoneNumber: user.phone_number,
          },
          'jktrxsw2005',
          { expiresIn: '1h' }
        );
        console.log(token);
        console.log("222");
        // Send the JWT token as part of the response
        res.status(200).send({ message: 'Login successful', token, email_verified_at: user.email_verified_at });
      }
    } else {
      console.log('not logged');
      res.status(401).send({ message: 'Wrong email or password' });
    }
  });
});


app.post("/verify-code", async (req, res) => {
  const email = req.body.email;
  const verificationCode = req.body.verificationCode;

  db.query(
    "SELECT * FROM users WHERE email = ? AND verification_code = ?",
    [email, verificationCode],
    async (err, results) => {
      if (err) {
        console.error("Error querying the database: " + err);
        return res.status(500).send({ message: "Internal Server Error" });
      }

      if (results.length === 0) {
        console.log("Invalid verification code or email");
        return res.status(401).send({ message: "Invalid verification code or email" });
      }

      const user = results[0];

      // Update the email_verified_at column with the current timestamp
      db.query(
        "UPDATE users SET email_verified_at = CURRENT_TIMESTAMP() WHERE email = ?",
        [email],
        (updateErr, updateResult) => {
          if (updateErr) {
            console.error("Error updating email_verified_at: " + updateErr);
            return res.status(500).send({ message: "Internal Server Error" });
          }

          console.log("Email verified successfully");
          res.status(200).send({ message: "Email verified successfully" });
        }
      );
    }
  );
});

app.listen(3001, () => {
console.log("port 3001");
})
