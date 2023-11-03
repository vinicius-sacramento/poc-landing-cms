import { Features, OurCompany } from "./components"
import { Flex, SlideFade } from "@chakra-ui/react"

export const Services = () => {
  return (
    <SlideFade in={true} offsetY={250} transition={{ enter: { duration: 0.8 } }}>
      <Flex
        id="services"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        maxW="5xl"
        m="0 auto"
        p={{ base: 10 }}
      >
        <OurCompany></OurCompany>
        <Features></Features>
      </Flex>
    </SlideFade>
  )
}