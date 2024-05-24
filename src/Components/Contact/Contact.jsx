import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import email from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import loc from '../../assets/location-icon.png'
import arr from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b42d1bd4-11e8-4b90-ad09-830290cbc76e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
                <h3>Send us a message <img src={msg} alt="" /> </h3>
                <p>Feel free to reach out through contact form or find our contact
                    information below. Your feedback, questions, and suggestions are
                    important to us as we strive to provide exceptional service to our
                    university community .</p>
                    <ul>
                        <li><img src={email} alt="" />Contact@AKS.dev</li>
                        <li> <img src={phone} alt="" />+1 123-456-7890</li>
                        <li> <img src={loc} alt="" />77 Massachusetts Ave, Cambridge<br /> MA 02139, United States </li>
                    </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label >Phone Number</label>
                    <input type="tel" name='phone' placeholder='Entee your Mobile Number' required />
                    <label > Write your Message here </label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required ></textarea>
                    <button type='submit' className="btn dark-btn">Submit Now <img src={arr} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact