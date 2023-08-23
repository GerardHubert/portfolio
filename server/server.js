require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const port = process.env.port || 8080;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.post('/sendmail', function (req, res) {
  const email = req.body;

  let transporter = nodemailer.createTransport({
    host: "crevette.o2switch.net",
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      user: process.env.ADRESS,
      pass: process.env.PASSWORD,
    }
  })

  function sendMail() {
    transporter.sendMail({
      from: process.env.ADRESS,
      to: "gerard.hubert@mail.fr",
      subject: `Nouveau message depuis le portfolio de < ${req.body.email} >`,
      text: req.body.content,
    }, (err) => {
      /** handle error here */
      /** failure ou success : retourner une réponse de confirmation */
      if (err) {
        res.status(501).json({
          error: 'une erreur est survenue',
          message: err.message
        });
      } else {
        res.status(201).json({ success: 'le message a été envoyé avec succès' });
      }
    })
  }
  sendMail();

  // verify transporter configuration
  // transporter.verify(function (error, success) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Transporter is OK : Ready to take messages !');
  //   }
  // })

})

// add a post request here to handle email from contact component

app.listen(port, () => {
  console.log(`listening server ${port}`)
})