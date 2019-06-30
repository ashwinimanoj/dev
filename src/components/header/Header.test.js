import React from 'react';
import {mount} from 'enzyme';
import Header from './Header';

describe('Header', () => {
    let header;

    it('should create header', () => {
        header = mount(<Header></Header>);
        expect(header.exists).toBeTruthy();
    });  

    it('should contain home button', () => {
        const button = header.find('button'); 
        expect(button.exists()).toBeTruthy();
    }); 
})