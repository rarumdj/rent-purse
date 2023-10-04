import { Story } from 'iconsax-react';
import React from 'react';

const Loading = ({ size = 75, color = '#1354DC', height = 80 }) => {
  return (
    <div className={`flex items-center justify-center min-h-[${height}vh]`}>
      <Story size={size} color={color} className="animate-spin" />
    </div>
  );
};
export default Loading;
