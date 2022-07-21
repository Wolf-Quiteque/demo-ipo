import { hashPassword } from "../../../lib/auth";
import makeid from "../../../lib/random";
import clientPromise from "../../../lib/mongodb";
const nodemailer = require("nodemailer");

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password, ID_NUMBER } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "senha",
    });
    return;
  }

  const client = await clientPromise;

  const db = client.db("Ipo");

  const existingUser = await db
    .collection("usuarios")
    .findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "usuarioexiste" });
    return;
  }

  const userpassword = makeid();
  const hashedPassword = await hashPassword(password);
  const passwordportal = await hashPassword(userpassword);
  var usuario = {};
  usuario = data;
  usuario.etapa = "novo";
  usuario.conta = "pendente";
  usuario.passwordportal = passwordportal;
  usuario.tipo = "Investidor-IPO";
  usuario.money = 0;
  usuario.password = hashedPassword;

  await db.collection("usuarios").insertOne(usuario);

  const transporter = nodemailer.createTransport({
    host: "mail.emainvest.ao",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "geral@emainvest.ao", // generated ethereal user
      pass: "geralEmainvest2O22", // generated ethereal password
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "geral@emainvest.ao", // sender address
    to: usuario.email, // list of receivers
    subject: "Credencias do portal Emainvest", // Subject line
    text: "", // plain text body
    html:
      ' <img src="https://emainvest.herokuapp.com/images/logo.png" height="80">' +
      "<p>ola," +
      usuario.FIRST_NAME +
      " " +
      usuario.LAST_NAME +
      "<br/> Seja benvindo ao Emainvest, <br/>  Acesso: <a href='https://portal.emainvest.ao/'>Portal do Investidor </a> " +
      "<br /> <br /> Email: " +
      usuario.email +
      "<br>Senha: " +
      userpassword, // html body
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        res.status(200).json({ message: "usuariocriado" });
      }
    });
  });
}

export default handler;
