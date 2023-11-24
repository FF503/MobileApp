import Tabs from "../navigation/Tabs";
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

describe('Navigation Testing', () => {
    test('Initial page is home', async () => {
        
        const {getByText} = render(
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        );
    
        
    
        //const Home = getByText();
    
        //expect(Home).toBeOnTheScreen();
      });
});
