import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SimpleLinkProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  brandColor: string;
}

export const SimpleLinkButton: React.FC<SimpleLinkProps> = ({ label, icon, onClick, brandColor }) => {
  return (
    <button 
      onClick={onClick}
      className="w-full group bg-[#f6f5f2] hover:bg-[#eaddd5] border border-[#eaddd5] rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div 
          className="p-2 rounded-full text-[#f6f5f2] transition-colors"
          style={{ backgroundColor: brandColor }}
        >
          {icon}
        </div>
        <span className="font-medium text-[#9d6a6b] text-sm sm:text-base tracking-wide uppercase">
          {label}
        </span>
      </div>
      <ChevronRight className="text-[#cea29b] group-hover:translate-x-1 transition-transform" />
    </button>
  );
};