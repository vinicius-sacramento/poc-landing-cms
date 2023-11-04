import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Fade,
  // Image,
} from '@chakra-ui/react'

import Lottie from 'react-lottie-player'
import { contactUsLottie } from '../../../../assets/lottie/contact-us'

// import contactUs from '../../../../assets/svg/contact-us.svg'

export const Contact = () => {

  return (
    <Fade in={true} transition={{ enter: { duration: 1.3 } }}>
      <Flex
        position="relative"
        id="contact-us"
        maxWidth="full"
        justifyContent="center"
        mt={0}
        p={{ sm: 4, md: 8, lg: 12 }}
        bgGradient="linear(to-br, blue.600, red.600)"
      >
        {/* <Box
          position={"absolute"}
          opacity={0.3}
          maxWidth={800}
          left={0}
          right={0}
          margin="auto"
          padding={8}
        >
          <Image src={contactUs}
          />
        </Box> */}
        <Box
          position={"absolute"}
          opacity={0.2}
          maxWidth={800}
        >
          <Lottie
            loop
            animationData={contactUsLottie}
            play
          />
        </Box>
        <Box
          color="white"
          borderRadius="lg"
          marginY={{ sm: 4, md: 16, lg: 10 }}
          p={{ base: 10, sm: 10, md: 10 }}
          zIndex={1}
        >
          <Stack pb={8} alignItems="center">
            <Heading>Contact Us</Heading>
            <Text textAlign="center" mt={{ sm: 3, md: 3, lg: 5 }} color="gray.200">
              Fill up the form below to receive our contact
            </Text>
          </Stack>
          <Box bg="white" borderRadius="lg" py={4}>
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl float="right">
                  <Button variant="solid" size="lg" width="full" rounded="2xl" bg="red.300" colorScheme='red' _hover={{ bg: "red.400" }}>
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Fade>
  )
}
