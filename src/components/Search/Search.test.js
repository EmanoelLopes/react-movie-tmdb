import React from 'react';
import { mount } from 'enzyme';
import Search from 'components/Search';

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <Search {...defaultProps} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Search />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
