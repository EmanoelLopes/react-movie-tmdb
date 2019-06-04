import React from 'react';
import { mount } from 'enzyme';
import TabPane from 'components/TabPane';

let wrapped;
let defaultProps = {
  label: 'Label',
  index: 0,
  isActive: true,
  icon: '',
  onClick: () => null,
};

beforeEach(() => {
  wrapped = mount(<TabPane {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<TabPane />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
