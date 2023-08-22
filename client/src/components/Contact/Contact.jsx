import { useEffect, useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contentError, setContentError] = useState("");
  const [validForm, setValidForm] = useState(false)
  const [message, setMessage] = useState({});

  useEffect(() => {
    formValidation();
  })

  let successMessage = <p className='message message-success'>{message.success}</p>;
  let failureMessage = <p className='message message-failure'>{message.failure}</p>;

  return (
    <section id="contact-section" className='contact-section'>
      <div className="contact-form-aside">
        <h2 className='section-title'>Contact</h2>
        <div className="contact-form-image-wrapper">
          <img className='contact-form-image' src="/email2.png" alt="contactez-moi" />
        </div>
        <div className="network">
          <p className="network-text">
            Que vous cherchiez à développer votre application web de A à Z ou à ajouter de nouvelles fonctionnalités, n'hésitez pas à me contacter via les réseaux ou directement par mail.
          </p>
          <div className='network-icons-wrapper'>
            <div className="network-icon">
              <a href="https://www.linkedin.com/in/g%C3%A9rard-hubert-ab6213206/" target='_blank' rel='noreferrer'>
                <img src="/linkedin-icon.png" alt="lien vers mon profil linkedin" title="Rencontrons-nous sur linkedIn !" />
              </a>
            </div>
            <div className="network-icon">
              <a href="https://github.com/GerardHubert" target='_blank' rel='noreferrer'>
                <img src="/github-icon.png" alt="lien vers mon profil github" title='Jetez un oeil à mon GitHub !' />
              </a>
            </div>
            <div className="network-icon">
              <a href="mailto:gerard.hubert@mail.fr">
                <img src="/email-icon.png" alt="envoyez-moi un courriel" title="Ecrivez-moi directement par mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <form action="/sendmail" method="POST" className="contact-form">
        <fieldset>
          <legend>Renseignez le formulaire de contact</legend>
          {message.success ? successMessage : null}
          {message.failure ? failureMessage : null}
          <div className="form-row">
            <input className="name-input" type="text" name="name" id="name"
              onFocus={e => handleFocus(e)}
              onBlur={e => handleBlur(e)}
              onChange={e => handleChange(e)} />
            <label htmlFor="name">Votre nom</label>
            <span className="name-error">{nameError}</span>
          </div>
          <div className="form-row">
            <input className="email-input" type="email" name="email" id="email"
              onFocus={e => handleFocus(e)}
              onBlur={e => handleBlur(e)}
              onChange={e => handleChange(e)}
            />
            <label htmlFor="email">Votre email</label>
            <span className="email-error">{emailError}</span>
          </div>
          <div className="textarea-wrapper">
            <textarea className="textarea" type="text" name="content" id="content"
              onFocus={e => handleTextareaFocus(e)}
              onBlur={e => handleTextareaBlur(e)}
              onChange={e => handleChange(e)}
            />
            <label htmlFor="content">Votre message</label>
            <span className="content-error">{contentError}</span>
          </div>
          <div className="submit-container">
            <Button />
          </div>
        </fieldset>
      </form>
    </section>
  );

  async function handleMail(e) {
    e.preventDefault();

    const nameInputElement = document.getElementById('name');
    const emailInputElement = document.getElementById('email');
    const contentInputElement = document.getElementById('content');

    let formData = {
      name: name,
      email: email,
      content: content
    }
    let response = await fetch('/sendmail', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData),
    })

    let data = await response.json();
    console.log(data);
    /** gestion de m'indication visuelle (succès ou échec de l'evnvoi du message) */
    for (const key in data) {
      /** si succès : annuler les animations des label et remettre à zéro les input */
      if (key === 'success') {
        console.log('message envoyé avec succès')
        setMessage({
          'success': 'Votre message a bien été transmis'
        });
        nameInputElement.value = '';
        emailInputElement.value = '';
        contentInputElement.value = '';
        nameInputElement.nextElementSibling.classList.remove('slideup');
        emailInputElement.nextElementSibling.classList.remove('slideup');
        contentInputElement.nextElementSibling.classList.remove('textarea-label-slide-up');
      }
      if (key === 'error') {
        setMessage({
          'failure': 'Une erreur est survenue'
        })
      }
    }
  }


  function Button() {
    const button = <button type="submit" className="submit-button" onClick={e => handleMail(e)}>envoyer</button>;
    return validForm ? button : null
  }

  function handleChange(e) {
    if (e.target.id === 'name') {
      const validation = nameValidation(e.target.value);
      setName(e.target.value);
      if (validation === false) {
        setNameError('Votre nom contient des caractères interdits')
      }
      if (validation === true || e.target.value === "") {
        setNameError("");
      }
    }
    if (e.target.id === 'email') {
      const validation = emailValidation(e.target.value);
      setEmail(e.target.value);
      if (validation === false) {
        setEmailError("L'adresse email n'est pas valide")
      }
      if (validation === true || e.target.velue === "") {
        setEmailError("");
      }
    }
    if (e.target.id === 'content') {
      const validation = contentValidation(e.target.value);
      setContent(e.target.value);
      if (validation === true) {
        setContentError("Votre message contient des caractères interdits");
      }
      if (validation === false || e.target.value === "") {
        setContentError("");
      }
    }
  }

  function nameValidation(value) {
    const regex = /^[a-zéèçàâäêëîïôöòûüùñ]?[\s?\-?a-zéèçàâäêëîïôöòûüùñ]+?$/g;
    return regex.test(value.toLowerCase());
  }

  function emailValidation(value) {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    return regex.test(value);
  }

  function contentValidation(value) {
    const regex = /[<>*#{}/\\]/
    return regex.test(value);
  }

  function formValidation() {
    if (name !== "" && nameError === "" && email !== "" && emailError === "" && content !== "" && contentError === "") {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }

  function handleFocus(e) {
    e.target.nextElementSibling.classList.remove('slidedown');
    e.target.nextElementSibling.classList.add('slideup');
  }

  function handleBlur(e) {
    if (e.target.value === "") {
      e.target.nextElementSibling.classList.remove('slideup')
      e.target.nextElementSibling.classList.add('slidedown')
    }
  }

  function handleTextareaFocus(e) {
    e.target.nextElementSibling.classList.remove('textarea-label-slide-down')
    e.target.nextElementSibling.classList.add('textarea-label-slide-up')
  }

  function handleTextareaBlur(e) {
    if (e.target.value === "") {
      e.target.nextElementSibling.classList.remove('textarea-label-slide-up');
      e.target.nextElementSibling.classList.add('textarea-label-slide-down');
    }
  }
}

export default Contact;