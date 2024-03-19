import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import "./contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export default function Contact() {
  const ref = useRef();

  {
    /* For sending Emails*/
  }
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rzw0bfj", "template_48v5tp6", formRef.current, {
        publicKey: "e_NErbLhFnBFiFgTT",
      })
      .then(
        () => {
          setError(false);
          setSuccess(true);
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="contact">
      <div className="details">
        <div className="header">
          <span>Let's work</span>
          <span className="tg">Together</span>
        </div>
        <div className="information">
          <div className="detail">
            <span>Mail</span>
            <p>jimoyee99@gmail.com</p>
          </div>
          <div className="detail">
            <span>Address</span>
            <p>Guwahati, Assam, India</p>
          </div>
          <div className="detail">
            <span>Phone</span>
            <p>+91 9435113417</p>
            <p>+91 6003248976</p>
          </div>
        </div>
      </div>
      <div className="submit-form">
        <input type="text" placeholder="name" name="name" />
        <input type="email" placeholder="email" name="email" />
        <textarea placeholder="message" rows="6" name="message" />
        <button>Submit</button>
        <div>
          {error && (
            <p className="text-red-500 absolute bottom-0 top-[0.1px]">
              Something went wrong
            </p>
          )}
          {success && (
            <p className="text-green-500 absolute bottom-0 top-[0.1px]">
              Successfully Send!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
