'use client';

import { useState } from 'react';

interface SeeMoreProps {
  children: React.ReactNode;
  maxheight?: string;
  className?: string; // ex: '200px'
}

export default function SeeMore({ children, maxheight = '200px', className = "" }: SeeMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Mobile version avec "Voir plus" */}
      <div className={`block md:hidden ${className}`}>
        <div
          className={`overflow-hidden transition-all duration-300 ${className ?? ''}`}
          style={{ maxHeight: isExpanded ? 'none' : maxheight }}
        >
          {children}
        </div>
        <div className='flex justify-center py-4'>
          <button
            onClick={toggleExpand}
            className="border-1 rounded-md border-[#BF9000] text-center text-[#BF9000] p-2 active:bg-[#BF9000] hover:text-white transition-colors duration-300"
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      </div>

      {/* Desktop version : toujours visible, pas de bouton */}
      <div className="hidden md:block">
        {children}
      </div>
    </div>
  );
}
