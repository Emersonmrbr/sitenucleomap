<?php
function sendMail($dataPost)
{
  // Variáveis
  $name = $dataPost['contatctName'];
  $email = $dataPost['contatctEmail'];
  $message = $dataPost['contatctMessage'];
  $phone = $dataPost['contatctPhone'];
  $sendDate = date('d/m/Y');
  $sendTime = date('H:i:s');

  //Emails para quem será enviado o formulário
  $to = "nucleomap@nucleomap.com.br";
  $subject = "Contato pelo Site";

  //Compo E-mail
  $file = "
  <p>Nome: {$name}</p>
  <p>E-mail: {$email}</p>
  <p>Telefone: {$phone}</p>
  <p>Mensagem: {$message}</p>
  <p>Este e-mail foi enviado em {$sendDate} às {$sendTime}</p>
  ";
  // E-mail de quem será enviado
  $from = "emerson@nucleomap.com.br";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From:" . $from . "\r\n" . "Replay-To:" . $name . $email;
  //Enviar
  mail($to, $subject, $file, $headers);
}
