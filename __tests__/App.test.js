/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, fireEvent, screen } from '@testing-library/react-native';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers()

//issue with Navigation Container so temporarily just use Navigation Test

it('renders correctly', async () => {
  const component = render(
    <App />
  );
  //renderer.create(component);
});
