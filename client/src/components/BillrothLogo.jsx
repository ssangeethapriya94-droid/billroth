import React from 'react';
import logoFull from '../assets/billroth-logo.png';
import logoClean from '../assets/billroth-logo-clean.png';

export const BillrothLogo = ({ 
  className = "h-9 sm:h-11 md:h-12 lg:h-14", 
  light = false, 
  alt = "Billroth Hospitals",
  forceFull = false,
  forceClean = false 
}) => {
  if (light) {
    return (
      <div className="inline-flex items-center bg-white p-1.5 sm:p-2 px-2.5 sm:px-3.5 rounded-2xl shadow-md border border-white/20 hover:shadow-lg transition-all">
        <img
          src={logoClean}
          alt={alt}
          className="h-7 xs:h-8 sm:hidden w-auto object-contain select-none"
          loading="eager"
        />
        <img
          src={logoFull}
          alt={alt}
          className={`hidden sm:block w-auto object-contain select-none ${className}`}
          loading="eager"
        />
      </div>
    );
  }

  if (forceClean) {
    return (
      <img
        src={logoClean}
        alt={alt}
        className={`w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
        loading="eager"
      />
    );
  }

  if (forceFull) {
    return (
      <img
        src={logoFull}
        alt={alt}
        className={`w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
        loading="eager"
      />
    );
  }

  return (
    <div className="flex items-center">
      {/* Mobile Screen: Clean, legible Billroth logo without squished microscopic badges */}
      <img
        src={logoClean}
        alt={alt}
        className="h-8 xs:h-9 sm:hidden w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02]"
        loading="eager"
      />
      {/* Tablet & Desktop: Full accreditation emblem logo */}
      <img
        src={logoFull}
        alt={alt}
        className={`hidden sm:block w-auto object-contain select-none transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
        loading="eager"
      />
    </div>
  );
};

export default BillrothLogo;
