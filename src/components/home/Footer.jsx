import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import trash from '../assets/trash.png';


export default function Footer() {
  const deletedList = useSelector((state) => state.note.deletedList);
  const notesList=useSelector((state) => state.note.notesList);
  const { length } = deletedList;
  

  const alertTrash = () => {
  
    Swal.fire({
      text:'The trash is empty',
      icon:'info',
      confirmButtonColor: '#7A056F',
    })
   
  };

  return (
    <>
    {/* to know if there are any postit deleted */}
      {length > 0 ? (
        <footer className={notesList.length>3? 'footer pos-rel':'footer pos-fix'}>
          <Link to='/trash'>
            <button className='bg-transparent border-none mb-0 mr-2 bg-bin-full bg-cover h-85 w-85 justify-center items-center cursor-pointer' type="button">
               <div className='count-outline bg-transparent w-8 mx-auto mt-5 p-0 text-2xl font-bold font-chango text-purple-count'>{length}</div>
            </button>
          </Link>
        </footer>
      ) : (
        <footer className={notesList.length>3? 'footer pos-rel':'footer pos-fix'}>
          <button className='border-none bg-transparent mr-3.5 cursor-pointer' onClick={alertTrash} type="button">
            <img src={trash} width='70px' alt='Trash' />
          </button>
          
        </footer>
      )}
    </>
  );
}
