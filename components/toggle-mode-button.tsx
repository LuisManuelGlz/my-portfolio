import React from 'react';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ToggleModeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {useColorModeValue(<IoSunny />, <IoMoon />)}
    </Button>
  );
};

export default ToggleModeButton;
