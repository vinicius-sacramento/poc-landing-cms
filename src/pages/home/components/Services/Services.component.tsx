import { Features, OurCompany } from "./components"
import {Stack} from "@chakra-ui/react"
// import { SectionAnimation } from "../../../../components/SectionAnimation"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  
  return(
  <motion.div
    style={{ display: "flex", alignItems: "center", justifyContent: 'center', opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: isInView ? -200 : 0 }}
    transition={{ duration: 0.7 }}
  >
    <Stack maxW="5xl" ref={ref}
        p={{ base: 10 }}
    >
      <OurCompany></OurCompany>
      <Features></Features>
    </Stack>
  </motion.div>
  )
}