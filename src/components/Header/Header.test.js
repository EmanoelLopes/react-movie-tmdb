import React from 'react';
import { mount } from 'enzyme';
import Header from 'components/Header';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Header />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Header />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
