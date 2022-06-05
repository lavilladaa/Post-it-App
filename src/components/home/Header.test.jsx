/* eslint-disable no-undef */
import React from 'react';
import{render,screen} from '@testing-library/jest-dom';
import Header from './Header'



test('it renders the title of the app',()=>{
    render(<Header/>);
    const title = screen.getByText('My notes');
    expect(title).toBeInTheDocument();

})