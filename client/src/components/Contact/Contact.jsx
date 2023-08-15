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

  useEffect(() => {
    formValidation();
  })

  return (
    <section id="contact-section" className='contact-section'>
      <div className="contact-form-aside">
        <h2 className='contact-title'>Contact</h2>
        <div className="contact-form-image-wrapper">
          <img className='contact-form-image' src="/email2.png" alt="contactez-moi" />
        </div>
      </div>
      <form action="/sendmail" className="contact-form">
        <fieldset>
          <legend>Fais pas le timide !!</legend>
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

  function Button() {
    const button = <button type="submit" className="submit-button">envoyer</button>;
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