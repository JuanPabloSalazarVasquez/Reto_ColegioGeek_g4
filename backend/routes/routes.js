const { Router } = require("express");
const router = Router();
smtpTransport = require("nodemailer-smtp-transport");

router.get("/", (req, res) => {
  res.send("<h1>Bienvenido</h1>");
});

//nodemailer
// smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "emanuwlacag@gmail.com",
      pass: "ytpgs9m3",
    },
  })
);

router.post("/send", (req, res) => {
  // let {to,subject,message} = req.body;
  var to = req.body.to,
    subject = req.body.subject,
    full_name = req.body.full_name,
    contentHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Send-Email</title>
      </head>
      <body>
        <div
          style="
            max-width: 625;
            margin-top: 0;
            margin-left: auto;
            margin-bottom: 0;
            margin-right: 0;
          "
        >
        <p style="color: black;
        font-weight: bold;">Hola, ${full_name}!!</p>
          <table border="0" cellpadding="0" cellspacing="0" style="width: 100%">
            <tr>
              <td>
                <img
                  src="https://libreriadelau.vteximg.com.br/arquivos/logo-lu-horizontal.png?v=637459264471170000"
                  alt="logo_empresa"
                  style="width: 100%; height: auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://1.bp.blogspot.com/-3spJnajb61Y/YAmvUSSdrWI/AAAAAAAAJHY/cv_RQ_HZiFc-AIulUPdvaRqqOLhY6KUoACLcBGAsYHQ/s600/2.png"
                  alt="images2"
                  style="width: 100%; height: auto"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://1.bp.blogspot.com/-FNSEsuX0i5Q/YAmvUjLo0vI/AAAAAAAAJHg/Lc-XpNEo-YovJ4vUwRATL1TAYckxevpXQCLcBGAsYHQ/s600/3.png"
                  alt="images3"
                  style="width: 100%; height: auto"
                />
              </td>
            </tr>
            <tr>
              <td style="background-color: black">
                <p style="
                color: red;
                font-weight: bold;
                text-align: center;">¿Te atreves a descubrirlo?</p>
                <p style="color: white;
                font-weight: bold;
            text-align: center;">PACK MISTERIO 2021</p>
                <p style="color: white;
                font-weight: bold;
            text-align: center;">
                  Solo debes escoger la categoría de tu interés y nuestros expertos
                  harán el resto.
                </p>
                <p style="color: white;
                font-weight: bold;
            text-align: center;">
                  En secreto, seleccionaremos entre 60 títulos aquellos que son
                  perfectos para ti.
                </p>
              </td>
            </tr>
            <tr>
                <td style="background-color: black;
                justify-content: center;
                text-align: center;
                align-items: center;">
                    <button style="color: white;
                    font-weight: bold;
                    text-align: center;
                    background-color: red;
                    border: 0px solid;
                    height: 50px;
                    width: 85%;" >Escoge tu Pack Misterio 2021 y empieza el desafío</button>
                </td>
            </tr>
            <tr style="background-color: black;">
                <td style="display: grid;
                grid-template-columns: 1fr 1fr;
                justify-content: center;
                align-items: center;
                text-align: center;">
                    <img 
                    src="https://1.bp.blogspot.com/-TDH9ODAkUng/YAmvUwudYgI/AAAAAAAAJHk/0TxbLcIOh_cZOKjTaZu7XDV1npOIK6fOQCLcBGAsYHQ/s305/5.png"
                    alt=""
                    style="
                    width: 100%;
                    height: auto;
                    ">
                    <img 
                    src="https://1.bp.blogspot.com/-MmUsIjXDNuw/YAmvUfCmRTI/AAAAAAAAJHc/C2kxzq1ikvs3mMmqdQMjSbrXgbgludPwwCLcBGAsYHQ/s255/4.png"
                    alt=""
                    style="
                    width: 100%;
                    height: auto;">
                </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
    `;

  const mailOptions = {
    from: "Colegio Geek",
    to: to,
    subject: subject,
    html: contentHTML,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Send: ${info.response}`);
      res.json({ message: "Enviado!!" });
    }
  });
});

module.exports = router;
