import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';

describe('App', () => {
    it('renders without crashing', () => {
        expect(shallow(<App />).length).toEqual(1);
    });
});