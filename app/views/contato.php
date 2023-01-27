<?php
require_once('app/assets/php/mail.php');
if (isset($_POST['contatctName'])) {
  $send = sendMail($_POST);
}
?>
<div class="c-main c-main--single-column">
  <article class="c-introduction">
    <h1 class="c-title">Núcleo MAP nosso contato</h1>
    <p class="c-text">
      Se deseja saber mais sobre nosos serviços e produtos, entre em contato
      conosoco.
    </p>
  </article>
  <article class="c-company">
    <h3 class="c-company__title">
      Núcleo MAP Máquinas Automação e Programação
    </h3>
    <p class="c-company__fone">Fone: +55 (41) 992 749 270</p>
    <p class="c-company__mail">E-mail: nucleomap@nucleomap.com.br</p>
  </article>
  <form name="contact" action="?pagina=contato" method="post" class="c-form">
    <div class="c-form__name c-form__control">
      <input js-contact-input type="text" name="contatcName" required class="c-form__name__item" />
      <label js-contact-label for="contatcName" class="c-form__label">Nome *</label>
    </div>
    <div class="c-form__lastname c-form__control">
      <input js-contact-input type="text" name="contatctLastname" required class="c-form__lastname__item" />
      <label js-contact-label for="contatctLastname" class="c-form__label">Sobrenome *</label>
    </div>
    <div class="c-form__phone c-form__control">
      <input js-contact-input type="phone" name="contatctPhone" required class="c-form__phone__item" />
      <label js-contact-label for="contatctPhone" class="c-form__label">Telefone *</label>
    </div>
    <div class="c-form__email c-form__control">
      <input js-contact-input type="email" name="contactEmail" required class="c-form__email__item" />
      <label js-contact-label for="contactEmail" class="c-form__label">E-mail *</label>
    </div>
    <div class="c-form__textarea c-form__control">
      <textarea js-contact-input name="contatctMessage" required class="c-form__textarea__item"></textarea>
      <label js-contact-label for="contatctMessage" class="c-form__label">Mensagem *</label>
    </div>
    <input type="submit" value="Enviar" class="c-form__submit c-button" />
  </form>
</div>