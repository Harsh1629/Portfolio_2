/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="sm:w-[250px] w-[220px]">
      <motion.div variants={fadeIn("right", "spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.heroSubText}>Introduction</p> */}
        <h2 className={styles.heroHeadText}>About Me</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      A data alchemist ready to turn problems into possibilities, challenges into
      catalysts for change, fuelled by the power of code and data to unlock the
      universe's secrets. I am a 2nd year undergraduate student at IIT Kharagpur. My educational path in Chemical Engineering   
      has provided me with a strong foundation in mathematical and engineering principles. I am a quick learner and I am always 
      looking for new challenges.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")