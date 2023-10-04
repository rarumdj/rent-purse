import React from 'react';

function FormHeading({ heading = '', paragraph = '' }) {
  return (
    <div className="border-b border-gray-200">
      <div className="space-y-1 px-8 py-4">
        <h4 className="text-lg font-medium text-primary-700">{heading}</h4>
        <p className="text-sm text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
}

export default FormHeading;
