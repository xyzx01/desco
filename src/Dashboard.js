import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  ChakraProvider,
  Center, IconButton, HStack, extendTheme
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Descope, SignUpOrInFlow } from '@descope/react-sdk';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import TodoPage from './TodoPage';
import Services from './Services';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#0099FF',
    },
    secondary: {
      500: '#FF9900',
    },
    light: '#F0F0F0',
    lbg: '#FAFAFA',
  },
});

const Dashboard = () => {
  const boxData = [
    {
      icon: FaEnvelope,
      text: 'Examine the work/job opportunities that have been specially selected for you, so that your age does not become a barrier between you and your work interest!',
      link: '/services',
    },
    {
      icon: FaUser,
      text: 'Using a To-Do list makes elderly super productive and organized person to be able to get the work done on time.',
      link: '/todopage',
    },
  ];
  return (
    <ChakraProvider theme={theme}>
    <Box>
    <header>
      <Flex align="center" justify="space-between" p={4} bg="primary.500" color="white">
        <Heading>Desco</Heading>
        <Flex>
          <Button colorScheme="secondary" mr={2}>
            About Us
          </Button>
        </Flex>
      </Flex>
    </header>
        <Flex
          align="center"
          justify="center"
          direction="column"
          minHeight="500px"
          p={8}
          bgPosition="center"
          bgSize="cover"
          color="white"
        >
          <Box textAlign="center" bg="white" p={8} borderRadius="md" boxShadow="md">
            <Text color="black">
              Desco is a platform that provides personalized care, relieving individuals of troublesome tasks and enabling them to pursue their passions. We offer work opportunities specially tailored for them, ensuring that age does not hinder their work interests. We also understand that feeling overwhelmed by new technology is common at this age, so we've broken everything down into manageable processes for their convenience. Our aim is to empower seniors to embrace technology and not feel left behind by the younger generation.
            </Text>
          </Box>
        
        <Box className="info" maxWidth="500px">
            <Descope
              flowId="sign-up-or-in"
              theme="light"
              onSuccess={(e) => {
                console.log(e.detail.user.name)
                console.log(e.detail.user.email)
              }}
              onError={(err) => {
                console.log("Error!", err)
              }}
            />
        </Box>
      </Flex>

      <Center>
        <Box p={4}>
          <HStack spacing={8} justifyContent="center">
          {boxData.map((box, index) => (
          <RouterLink key={index} to={box.link}>
            <Box
              textAlign="center"
              p={6}
              width="300px"
              height="300px"
              borderRadius="md"
              boxShadow="md"
            >
              <IconButton icon={<box.icon />} aria-label={box.text} fontSize="2xl" mb={4} color="primary.500" />
              <Text fontSize="md" lineHeight="tall">
                {box.text}
              </Text>
            </Box>
          </RouterLink>
        ))}
          </HStack>
        </Box>
      </Center>

      <footer className="i" position="relative" bottom="0" marginTop="100px" width="100%"     bg="primary.500" color="white" p={4} textAlign="center">
          Follow us for more updates: <Link color="secondary.500">Twitter</Link> |{' '}
          <Link color="secondary.500">Facebook</Link>
      </footer>

    </Box>
    </ChakraProvider>
  );
};

export default Dashboard;
