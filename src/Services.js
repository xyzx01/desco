import React from 'react';
import { ChakraProvider, Box, Flex, Text, Button, HStack, CSSReset, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <ChakraProvider>
     <Box>
      <header>
      <Flex align="center" justify="space-between" p={4} bg="primary.500" color="white">
        <Heading textColor="black">Desco</Heading>
        <Flex>
        <Link to="/">
          <Button colorScheme="secondary" color="black" mr={2}>
            Dashboard
          </Button>
        </Link>
        </Flex>
      </Flex>
        </header>
      <CSSReset />
      <Box minHeight="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="#1A202C">
        <Text fontSize="xl" fontWeight="bold" mb={4} color="white">
          Work Opportunities
        </Text>
        <Flex overflowX="scroll" pb={4}>
          <Box width="500px" borderWidth="1px" borderRadius="md" p={4} mr={4} height="300px">
            <Text fontSize="xl" fontWeight="bold" mb={2} color="white">
            Consultants
            </Text>
            <Text color="white">
            Description <br/> Responsible for the completion of a part of a project or activities for which they leads a small team.
            </Text>
            <HStack mt={20}>
            <Button colorScheme="green">Learn More</Button>
              <Button colorScheme="blue">Add to List</Button>
              <Button colorScheme="green">Apply Now</Button>
            </HStack>
          </Box>

          <Box width="500px" borderWidth="1px" borderRadius="md" p={4} mr={4}>
            <Text fontSize="xl" fontWeight="bold" mb={2} color="white">
            Executive assistant
            </Text>
            <Text color="white">
            Description <br/> Manage the administrative tasks of senior officials within an organization.
            </Text>
            <HStack mt={20}>
            <Button colorScheme="green">Learn More</Button>
              <Button colorScheme="blue">Add to List</Button>
              <Button colorScheme="green">Apply Now</Button>
            </HStack>
          </Box>
        </Flex>
      </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Services;
