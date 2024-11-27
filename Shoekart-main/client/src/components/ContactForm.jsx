import { useState } from "react";
import { toast } from "react-toastify";
import shadab from "../Images/shoes/shadab.jpg";
import saima from "../Images/shoes/saima.jpeg"
import ritu from "../Images/shoes/ritu.jpeg";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, subject, message } = formData;
      if (!name || !email || !subject || !message) {
        toast.error("Please fill all the fields");
        return;
      }
      const mailtoLink = `mailto:kahkashanparween711@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `Hello Kahkeshan,\n\nMy name is ${name} and my email address is ${email}.\n\nI wanted to talk to you about the following:\n\n${message}\n\nLooking forward to hearing from you.\n\nBest Regards,\n${name}`
      )}`;
      window.location.href = mailtoLink;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-details">
      <form onSubmit={handleSubmit}>
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="people">
        <div>
          <img
            src={shadab}
            alt="profile-photo"
          />
          <p>
            <span>Shadab Arzoo</span>Software Engineer <br />
            shadabarzoo@gmail.com
          </p>
        </div>
        <div>
          <img
            src={saima}
            alt="profile-photo"
          />
          <p>
            <span>Saima PArween</span>Software Engineer <br />
            saimaparween419@gmail.com
          </p>
        </div>
        <div>
          <img
            src={ritu}
            alt="profile-photo"
          />
          <p>
            <span>Ritu Dhaka</span>Software Engineer <br />
            ritu.dhaka.2003@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
