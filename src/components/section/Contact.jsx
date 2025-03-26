import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage("Sending ...");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )

      .then((res) => {
        setMessage("SUCCESS!");
        form.current.reset();
        setTimeout(() => setMessage(""), 1000);
      })
      .catch((error) => console.log("FAILED...", error.text));
  };

  return (
    <section
      name="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmaail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                resize="none"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3 rounded
                  font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
              "
            >
              Send message
            </button>
          </form>
          <span className="text-medium text-white">{message}</span>
        </div>
    </section>
  );
};

export default Contact;
