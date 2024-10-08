import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_twmtgeh",
          "template_h7f68f6",
          formData,
          "Kj3bSdLE-rS69fWsM"
        )
        .then(() => {
          toast.success("Mail Sent Successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.failure("Failed to send message, Please Try Again.");
          setFormData({ name: "", email: "", message: "" });
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.message) {
      errors.message = "Message is Required";
    } else if (!/\S+@\S+/.test(formData.email)) {
      errors.email = "Email is Invalid";
    }
    return errors;
  };
  return (
    <section id="contact" className="p-4 lg:w-3/4">
      <h2 className="my-8 text-center text-2xl lg:text-3xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div className="lg:w-1/2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            rows={6}
            onChange={(e) => handleChange(e)}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-rose-800"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        <button
          type="submit"
          name="send"
          id="send"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
