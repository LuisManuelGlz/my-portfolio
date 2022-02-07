import React, { useContext } from 'react';
import Image from 'next/image';
import {
  Button,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5';
import { LanguageContext } from '../contexts/LanguageContext';

const LocaleMenu = () => {
  const { setLocale, locale } = useContext(LanguageContext);

  const handleLocaleClick = (locale: string) => {
    setLocale(locale);
    localStorage.setItem('lang', locale);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        <HStack>
          <Image
            src={`/flags/${locale}.png`}
            alt={`${locale} flag`}
            width={25}
            height={25}
          />
          <Text ml="12px">{locale.toUpperCase()}</Text>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleLocaleClick('en')}>
          <Image src="/flags/en.png" alt="en flag" width={25} height={25} />
          <Text ml="12px">English</Text>
        </MenuItem>
        <MenuItem onClick={() => handleLocaleClick('es')}>
          <Image src="/flags/es.png" alt="es flag" width={25} height={25} />
          <Text ml="12px">Español</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LocaleMenu;
