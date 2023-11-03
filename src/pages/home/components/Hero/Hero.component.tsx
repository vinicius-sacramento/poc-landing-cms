import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Fade,
  Link,
} from '@chakra-ui/react'

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
    ghostButtonTitle,
  } = props;

  return (
    <>
      <Fade in={true} transition={{enter:{ duration: 0.8}}}>
        <Stack
          maxW={'5xl'} 
          height="80dvh"
          margin="0 auto"
          textAlign={'center'}
          justifySelf="center"
          display={'flex'}
          justifyContent={'center'}
          alignItems={"center"}
          as={Box}
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
              <a href='#services'>
                Get Started {callToActionTitle}
              </a>
            </Button>
            <Link href='#contact-us' variant={'link'} color="blue.400" colorScheme={'gray'} size={'sm'}
            >
              Contact Us {ghostButtonTitle}
            </Link>
          </Stack>
        </Stack>
      </Fade>
    </>
  )
}