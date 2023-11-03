import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import { Building2, FilePieChart, Mail, TrendingUp } from 'lucide-react'
import { ReactElement } from 'react'
import Team from '../../../../../assets/jpeg/team.jpeg'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export const OurCompany = () => {
  return (
    <Container maxW="full" p={0} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} paddingX={0}>
        <Stack spacing={4} paddingX={0}>
          <Heading
            textAlign={{base: "center", md: "start"}}
          >A digital Product design agency</Heading>
          <Text 
          textAlign={{ base: "center", md: "start" }}
          color={'gray.500'} 
          fontSize={'lg'}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            alignItems={{base:"center", md: "start"}}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Building2 color='#D69E2E' size="18"/>}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<TrendingUp color='#38A169' size='18'/>}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={<FilePieChart color='#805AD5' size="18"/>}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
            <Button
              size="lg"
              width={{base: "full", sm: "full"}}
              rounded="2xl"
              colorScheme='red'
              _hover={{
                bg: "red.400"
              }}
              bg="red.300"
            >
              <a href='#contact-us'>
                <Flex align="center">
                  <Mail size={18} />
                  <Text m="2">
                    Contact Us
                  </Text>
                </Flex>
              </a>
            </Button>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'2xl'}
            alt={'feature image'}
            src={Team}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}