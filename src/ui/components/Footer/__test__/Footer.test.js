import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import Footer from '@components/Footer/Footer';

test('check Footer is redred', () => {  
    render(<Footer />);
});