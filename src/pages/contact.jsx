/**
 *  Contact page to get emails from clients
 */
import { useRef, useState } from "react";
import emailjs from "emailjs-com"; // email sender
import { motion as Motion } from "framer-motion";
import Loader from "../components/Loader";

import notificationStore from "../store/notifyStore";

const Contact = () => {
  const [loading, setLoading] = useState(false); // loading state for sending messages
  const formRef = useRef();
  const { success, error } = notificationStore();

  /** send email function handler */
  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form["user_name"].value.trim();
    const email = form["user_email"].value.trim();
    const message = form["message"].value.trim();

    if (!name || !email || !message) {
      error("All fields required");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY, // service ID
        import.meta.env.VITE_TEMPLATE_KEY, // template ID
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY // public key from EmailJS
      )
      .then(
        () => {
          setLoading(false);
          success("You have successfully sent me a message");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          error("Unexpected error has occurred");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="page">
      <div className="w-full max-w-6xl mx-auto px-2 flex flex-col md:grid md:grid-cols-[30%_70%] gap-5 items-start">
        {/* Left: Text */}

        <Motion.div
          className="space-y-4 text-main mb-6 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">Contact Me</h1>
          <p className="text-sm sm:text-lg text-cool">
            Reach out to me for a job, gig, or even a collaboration. Let's code
            and keep building to solve world problems.
          </p>
        </Motion.div>

        {/* Right: Contact Form */}
        <Motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          ref={formRef}
          onSubmit={sendEmail}
          className="sm:w-3/4 mx-auto shadow-lg shadow-gray-800 backdrop-blur-xl rounded-xl p-5 space-y-4"
        >
          <Motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="subject"
            placeholder="subject"
            className="w-full p-3 bg-white/80 rounded-md outline-none text-sm"
          />

          <Motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 rounded-md outline-none text-sm text-secondary"
          />
          <Motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 text-secondary rounded-md outline-none text-sm"
          />
          <Motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 bg-white/10 rounded-md outline-none text-sm text-secondary"
          ></Motion.textarea>
          <Motion.button
            whileFocus={{ scale: 1.02 }}
            type="submit"
            disabled={loading}
            className="bg-cyan-600 hover:bg-cyan-700 text-secondary py-2 px-4 rounded-md cursor-pointer transition-color ease-in-out duration-500 disabled:bg-cyan-900 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex gap-2 items-center">
                
                <Loader /> <span> Sending <span className="animate-pulse"> ...</span></span>
              </div>
            ) : (
              "Send Message"
            )}
          </Motion.button>
        </Motion.form>
      </div>
    </div>
  );
};

export default Contact;
