/* eslint-disable react-refresh/only-export-components */
import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//YfErfSTgpaizJkaQ4
//template_egok7w8
//service_3o2egrt

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name,value);
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_3o2egrt","template_egok7w8",{
      from_name: form.name,
      to_name: "Harsh",
      from_email: form.email,
      to_email: "harshgupta1629@gmail.com",
      message: form.message,
    },"YfErfSTgpaizJkaQ4").then(()=>{
      setLoading(false);
      alert("Message sent successfully !");
      setForm({name: "", email: "", message: ""});
    }, (error)=>{
      setLoading(false);
      alert("Something went wrong !");
      console.log(error);
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden select-none">
      <motion.div variants={slideIn("left","tween",0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.heroSubText}>Get in Touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8" autoComplete="off">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your E-mail</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your e-mail ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What is your message ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md text-white shadow-primary rounded-xl">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right","tween",0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")