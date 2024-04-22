const UserDB = require("../Models/UserModels");
const nodeMailer = require("nodemailer");

const CreateUserData = async (req, res) => {
  try {
    const { name, emailid, phone, option, message } = req.body;
    const CreateData = new UserDB({ name, emailid, phone, option, message });
    await CreateData.save();
    await SendMailToUser(name, emailid, phone, option, message);
    res.json({
      data: CreateData,
      message: "Form submitted successfully!",
      success:"true"
    });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
      message: "Error submitting form",
      success:"false"
    });
  }
};

const SendMailToUser = async (name, emailid, phone, option, message) => {
  try {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "yugandhardeveloper@gmail.com",
        pass: "xcms leoa dyol rxsy",
      },
    });
    const mailOption = {
      from: emailid,
      to: "btlarchitects21@gmail.com",
      subject: "New Form Submission",
      html: `
        <h1>New Form Submission</h1>
        <p>Name: ${name}</p>
        <p>Email: ${emailid}</p>
        <p>Phone: ${phone}</p>
        <p>Option: ${option}</p>
        <p>Message: ${message}</p>
      `,
    };
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.error("Error in sending email:", error);
  }
};

module.exports = CreateUserData;
