import React from 'react';
import { SocialIcon } from 'react-social-icons';

const footer = () => {
  return (
    <footer className="flex justify-center items-center w-full h-20 md:h-24">
      <SocialIcon
        style={{ height: 40, width: 40, marginRight: 10 }}
        url="https://github.com/LuisManuelGlz"
        target="_blank"
        rel="noopener noreferrer"
        network="github"
        bgColor="#FFFFFF"
      />
      <SocialIcon
        style={{ height: 40, width: 40, marginRight: 10 }}
        url="https://linkedin.com/in/luismanuelglz"
        target="_blank"
        rel="noopener noreferrer"
        network="linkedin"
        bgColor="#FFFFFF"
      />
      <SocialIcon
        style={{ height: 40, width: 40, marginRight: 10 }}
        url="https://twitter.com/LuisManuelGlz_"
        target="_blank"
        rel="noopener noreferrer"
        network="twitter"
        bgColor="#FFFFFF"
      />
    </footer>
  );
};

export default footer;
