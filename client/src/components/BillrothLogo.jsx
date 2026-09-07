import React from 'react';
import logoLight from '../assets/billroth-logo-light.png';
import logoDefault from '../assets/billroth-logo.png';

export const BillrothLogo = ({ className = "h-12 sm:h-14", light = false, alt = "Billroth Hospitals" }) => {
  return (
    <img
      src={light ? logoLight : logoDefault}
      alt={alt}
      className={`w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
      loading="eager"
    />
  );
};

export default BillrothLogo;
