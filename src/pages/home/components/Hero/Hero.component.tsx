import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  // Link,
} from '@chakra-ui/react'
// import { SectionAnimation } from '../../../../components/SectionAnimation'
import { motion } from 'framer-motion'

type THeroProps = {
  title?: string,
  subtitle?: string,
  description?: string,
  callToActionTitle?: string
  ghostButtonTitle?: string
}

export const Hero = (props: THeroProps) => {
  const {
    title,
    subtitle,
    description,
    callToActionTitle,
    // ghostButtonTitle,

  } = props;

  return (
    <>
     <motion.div
      style={{opacity: 0}}
      animate={{opacity: 1,}}
      transition={{duration: 0.7}}
    >
      <Container maxW={'5xl'} height={"101dvh"}>
        <Stack
          as={Box}
          height={"full"}
          textAlign={'center'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={"center"}
          spacing={{ base: 8, md: 14 }}
          p={{ base: 10 }}
          >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Make money from {title}
            <br />
            <Text 
              as={'span'}
              bgGradient="linear(to-br, blue.400, red.400)"
              backgroundClip="text"
            >
              your audience {subtitle}
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward them
            loyalty points. Give back to your loyal readers by granting them access to
            your pre-releases and sneak-peaks. {description}
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'red'}
              bg={'red.300'}
              rounded={'2xl'}
              size={'lg'}
              px={6}
              _hover={{
                bg: 'red.400',
              }}>
              <a href='#features'>
                Get Started {callToActionTitle}
              </a>
            </Button>
            {/* <Link href='#teste' variant={'link'} colorScheme={'blue'} size={'sm'}
            >
              Learn more {ghostButtonTitle}
            </Link> */}
          </Stack>
        </Stack>
      </Container>
    </motion.div>
    </>
  )
}