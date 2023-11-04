import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Link,
  // Image,
  ScaleFade,
} from '@chakra-ui/react'

// import socialHero from '../../../../assets/svg/social-media.svg'
import Lottie from 'react-lottie-player'
import { heroMoney } from '../../../../assets/lottie/contact-us/hero-money'


type THeroProps = {
  title?: string,
  subtitle?: string,
  description?: string,
  primaryButtonText?: string
  secondaryButtonText?: string
}

export const Hero = (props: THeroProps) => {
  const {
    title,
    subtitle,
    description,
    primaryButtonText,
    secondaryButtonText,
  } = props;


  return (
    <>
      <ScaleFade in={true} initialScale={0.5} transition={{ enter: { duration: 0.8 } }}>
        <Stack
          position="relative"
          maxW={'5xl'}
          height="80vh"
          margin="0 auto"
          textAlign={'center'}
          justifySelf="center"
          justifyContent={'center'}
          alignItems={"center"}
          as={Box}
          p={10}
        >
          <Stack zIndex={1} spacing={{ base: 8, md: 14 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              {title}
              <br />
              <Text
                as={'span'}
                bgGradient="linear(to-br, blue.400, red.400)"
                backgroundClip="text"
              >
                {subtitle}
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              {description}
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Link href='#services'>
                <Button
                  colorScheme={'red'}
                  bg={'red.300'}
                  rounded={'2xl'}
                  size={'lg'}
                  border={"none"}
                  px={6}
                  _hover={{
                    bg: 'red.400',
                  }}>
                  {primaryButtonText}
                </Button>
              </Link>
              <Link href='#contact-us' variant={'link'} color="blue.700" colorScheme={'gray'} size={'lg'}>
                {secondaryButtonText}
              </Link>
              
            </Stack>
          </Stack>
          {/* <Box
            maxW={{ md: 500 }}
            position={'absolute'}
            bottom={0}
            opacity={0.4}
            zIndex={0}
          >
            <Image
              src={socialHero}
            />
          </Box> */}
          <Box
            maxW={{ md: 500 }}
            position={'absolute'}
            bottom={0}
            opacity={0.2}
            zIndex={0}
          >
            <Lottie
              play
              loop
              animationData={heroMoney}
            />
          </Box>
        </Stack>
      </ScaleFade>
    </>
  )
}