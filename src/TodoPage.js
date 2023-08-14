import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  Text,
  Icon,
  ChakraProvider,
} from '@chakra-ui/react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('New Todo')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('New Todo', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

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
      <Box as="main" bg="#1A202C" minH="80vh" display="flex" justifyContent="center" alignItems="center">
        <Flex
          className="wrapper"
          direction="column"
          bg="white"
          maxW="400px"
          w="100%"
          p="25px"
          borderRadius="5px"
          boxShadow="0px 10px 15px rgba(0,0,0,0.1)"
        >
          <Heading fontSize="50px" fontWeight="300" textAlign="center">
            Todo List
          </Heading>
          <Flex className="inputField" mt="20px">
            <Input
              type="text"
              placeholder="Add your new todo"
              value={taskInput}
              onChange={handleInputChange}
            />
            <Button
              onClick={handleAddTask}
              bg="#8995FF"
              color="white"
              ml="5px"
              disabled={taskInput.trim() === ''}
            >
              <Icon as={FaPlus} />
            </Button>
          </Flex>
          <List className="todoList" maxH="250px" overflowY="auto" mt="10px">
            {tasks.map((task, index) => (
              <ListItem
                key={index}
                pos="relative"
                listStyleType="none"
                mb="8px"
                bg="#f2f2f2"
                borderRadius="3px"
                p="10px 15px"
                cursor="default"
                overflow="hidden"
                wordWrap="break-word"
              >
                {task}
                <Button
                  className="icon"
                  pos="absolute"
                  right="-45px"
                  top="50%"
                  transform="translateY(-50%)"
                  bg="#e74c3c"
                  w="45px"
                  textAlign="center"
                  color="white"
                  p="10px 15px"
                  borderRadius="0 3px 3px 0"
                  cursor="pointer"
                  transition="all 0.2s ease"
                  _hover={{ right: '0px' }}
                  onClick={() => handleDeleteTask(index)}
                >
                  <Icon as={FaTrash} />
                </Button>
              </ListItem>
            ))}
          </List>
          <Flex className="footer" mt="20px" justifyContent="space-between" alignItems="center">
            <Text>
              You have <Text as="span" className="pendingTasks">{tasks.length}</Text> tasks pending
            </Text>
            <Button
              onClick={handleDeleteAll}
              bg="#8995FF"
              color="white"
              fontWeight="400"
              fontSize="16px"
              cursor="pointer"
              opacity={tasks.length > 0 ? 1 : 0.6}
              pointerEvents={tasks.length > 0 ? 'auto' : 'none'}
              _hover={{ bg: '#8995FF' }}
            >
              Delete All
            </Button>
          </Flex>
        </Flex>
      </Box>
      </Box>
    </ChakraProvider>
  );
};

export default TodoPage;
