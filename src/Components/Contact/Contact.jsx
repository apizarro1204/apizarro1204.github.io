import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "444a8dc4-a8be-46f6-94e1-f0eb92caa590");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Envíanos un mensaje <img src={msg_icon} alt=""></img>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          exercitationem iste, aliquid delectus deserunt porro aperiam
          asperiores nostrum earum voluptatibus officia ducimus iusto quae illum
          debitis, obcaecati architecto assumenda magnam.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Contact@correo.cl
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +56 9 8765 4321
          </li>
          <li>
            <img src={location_icon} alt="" />
            Calle falsa #123
            <br />
            Región del Maule, Chile
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Ingresa tu nombre"
            require
          />
          <label>Número teléfono</label>
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Ingresa tu número telefónico"
            require
          />
          <label>Mensaje</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Escríbenos tus dudas, consultas o sugerencias"
            require
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Enviar <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
