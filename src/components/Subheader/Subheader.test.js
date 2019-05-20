import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as RouterWrapper } from 'react-router-dom';
import Subheader from 'components/Subheader';

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <RouterWrapper>
      <Subheader {...defaultProps} />
    </RouterWrapper>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Subheader />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
