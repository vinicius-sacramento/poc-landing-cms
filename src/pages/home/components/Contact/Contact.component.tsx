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
} from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  return (
    <motion.div
      style={{ opacity: 0, y: 0, display: 'block', translate: "0px -200px" }}
      animate={{ opacity: 1, y: isInView ? -400 : 0 }}
      transition={{ duration: 0.7 }}
    >
      <Flex 
        id="contact"
        maxWidth="full"
        justifyContent="center" 
        mt={0} 
        p={{ sm: 4, md: 8, lg: 12 }}
        bgGradient="
        linear(to-br, blue.600, red.600)
        
        
        "
      >
        <Box
          color="white"
          borderRadius="lg"
          marginY={{ sm: 4, md: 16, lg: 10 }}
          p={{ base: 10, sm: 10, md: 10 }}
        >
            <Stack pb={8} alignItems="center">
              <Heading>Contact Us</Heading>
              <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.200">
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
                    <Button variant="solid" size="lg" rounded="2xl" bg="red.300" colorScheme='red' _hover={{ bg: "red.400" }}>
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </Box>
      </Flex>
    </motion.div>
  )
}