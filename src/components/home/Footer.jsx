import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import trash from '../assets/trash.png';

export default function Footer() {
  const deletedList = useSelector((state) => state.note.deletedList);
  const { length } = deletedList;

  const alertTrash = () => {
    alert('The Trash is empty');
  };

  return (
    <>
    {/* to know if there are any postit deleted */}
      {length > 0 ? (
        <footer className='text-right w-full py-2 px-1 fixed bottom-0 justify-right'>
          <Link to='/trash'>
            <button className='bg-transparent border-none mb-0 mr-2 bg-bin-full bg-cover h-85 w-85 justify-center items-center cursor-pointer' type="button">
               <div className='count-outline bg-transparent w-8 mx-auto mt-5 p-0 text-2xl font-bold font-chango text-purple-count'>{length}</div>
            </button>
          </Link>
        </footer>
      ) : (
        <footer className='text-right w-full py-2 px-1 fixed bottom-0 justify-right'>
          <button className='border-none bg-transparent mr-3.5 cursor-pointer' onClick={alertTrash} type="button">
            <img src={trash} width='70px' alt='Trash' />
          </button>
          
        </footer>
      )}
    </>
  );
}
