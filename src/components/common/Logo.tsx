import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logoplenotech.png';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src={logoImage}
        alt="Logo da Empresa"
        className={
          `h-14 w-auto transition-opacity duration-200 ` +
          (isFooter ? 'filter invert opacity-80' : 'opacity-100')
        }
      />
    </Link>
  );
};

export default Logo;