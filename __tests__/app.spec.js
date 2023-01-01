import React from 'react';
import { render, screen } from '@testing-library/react-native';

import App from '../App';

test('form submits two answers', () => {
    render(<App />);
    screen.findByText('Open up App.js to start working on your app!');
});
