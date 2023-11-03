import {
  Box,
  Container,
  Fade,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.8 } }}>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Text>© 2022 Sacrax IT. All rights reserved</Text>
      </Container>
    </Box>
    </Fade>
  )
}