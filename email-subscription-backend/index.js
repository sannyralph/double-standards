const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with specific origin
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your React app's URL
}));

app.use(bodyParser.json());

// Define the subscription endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  try {
    // Send notification email to admin
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    let mailOptions = {
      from: 'your-email@gmail.com',
      to: 'admin@doublestandards.de',
      subject: 'New Subscription',
      text: `A new user has subscribed with the email: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Subscription successful');
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).send('Subscription failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
