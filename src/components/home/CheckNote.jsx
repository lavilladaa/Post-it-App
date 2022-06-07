import React from 'react';

export default function CheckNote() {
  return (
    <div>
      <input type='checkbox' className='h-6 mx-2' />
      <span>
        <textarea className='h-6  w-64 relative resize-none ' />
      </span>
    </div>
  );
}
