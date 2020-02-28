import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import App from './component/App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
    
configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore(true);

    describe('App component', () => {
        it('renders without crashing', () => {
            const wrapper = shallow(<Provider store ={store}><App/></Provider>);
           // console.log(wrapper.debug());
            expect(wrapper).toBeTruthy();
          });
    });