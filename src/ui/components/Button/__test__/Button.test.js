import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import Button from '@components/Button/Button';

test('check button is displayed with children', () => {  
    render(<Button>click me</Button>);
    const ButtonElement = screen.getByTestId('button');
    expect(ButtonElement).toBeInTheDocument();
    expect(ButtonElement.getAttribute('type')).toBe('button');
});

test('check submit button type', () => {  
    render(<Button type="submit">click me</Button>);
    const ButtonElement = screen.getByTestId('button');
    expect(ButtonElement.getAttribute('type')).toBe('submit');
});
