import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { deletePostitsDef } from '../../redux/noteSlice';

import home from '../assets/home.png';
import deleteForever from '../assets/deleteForever.png';

export default function FooterTrash() {
  const deletedList = useSelector((state) => state.note.deletedList);

  const dispatch=useDispatch();

  const deleteAllPostits=()=>{
    if (deletedList.length >0){
    Swal.fire({
      text: 'Are you sure you want to delete all the Post-its?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#7A056F',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
   }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      dispatch(deletePostitsDef())
      Swal.fire('The trash has been emptied', '', 'success')
    } 
  }) } else {
    Swal.fire({
      text:'The are not Post-its in the trash to delete',
      icon:'info',
    })
  }
  }

  
  
  return (
    <footer className={deletedList.length>4 ? 'footer pos-rel':'footer pos-fix'}>
      <button className='border-none bg-transparent mr-3.5 cursor-pointer' type='button' onClick={deleteAllPostits}>
          <img src={deleteForever} width='70px' alt='Home Icon' />
      </button>
      <Link to='/'>
      <button className='border-none bg-transparent mr-3.5 cursor-pointer' type='button'>
          <img src={home} width='70px' alt='Home Icon' />
        </button>
     </Link>


     
    </footer>
  );
}
