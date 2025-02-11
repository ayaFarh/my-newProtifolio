import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import {motion} from "framer-motion"
import { fadeIn } from "./Home";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .sendForm(
        "service_dot3m3h", // Service ID
        "template_56rw4zr", // Template ID
        form.current, // Form reference
        "Km-Th0oMJdi_5FUc8" // Public Key (User ID)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setName("");
          setMessage("");
          setEmail("");
          form.current.reset();
          toast.success("Thank you for your message!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Oops! Something went wrong.");
        }
      )
      .finally(() => setLoading(false)); 
  };

  return (
    <>
      <section
        className="   text-white flex flex-col items-start justify-center  my-4"
        id="Contact"
      >
         <h3 className="font-bold text-3xl mb-5 ">
           Before You go Lets Contact
          </h3>
         
       <div className="flex w-full items-center justify-center">
       
       <div className="bg-black/75  shadow-2xl rounded-xl w-1/2  p-5">
         <p className="text-2xl ">Send me a message....</p>
          <motion.form
            className="flex flex-col justify-center items-center text-white"
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              name="user_name"
               className="border-2  w-full  border-gray-400 mt-5 font-bold py-2 px-4 rounded bg-transparent "
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              name="user_email"
              className="border-2 w-full  border-gray-400 mt-5 font-bold py-2 px-4 rounded bg-transparent "
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="10"
              value={message}
              name="message"
             className="border-2 w-full border-gray-400 mt-5 font-bold py-2 px-4 rounded bg-transparent "
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading} 
              className={`border-2 cursor-pointer   border-gray-400 mt-5 font-bold py-2 px-4 rounded text-center w-[40%] m-auto transition-all duration-300 ${
                loading ? "bg-gray-400 cursor-not-allowed" : " "
              }`}
            >
              {loading ? "Sending..." : "Send"} <i className="fa-solid fa-paper-plane"></i>
            </button>
          </motion.form>
        </div>
        <div className="w-1/2">
          <motion.img  variants={fadeIn(0.4)} transition={{duration:0.4,delay:0.2 , ease:"easeInOut"}}
               initial={{opacity:0,scale:0.9, y:100}} animate={{opacity:1,scale:1, y:0}} exit={{opacity:1,scale:1, y:0,transition:{duration:0.2}}} src="/Mobile user-bro.svg" alt="contact image" className="w-full h-full"/>
        </div>
       </div>
       
      </section>
    </>
  );
}
