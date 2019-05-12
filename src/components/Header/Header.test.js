import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Header />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
