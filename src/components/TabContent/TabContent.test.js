import React from 'react';
import { mount } from 'enzyme';
import TabContent from 'components/TabContent';

let wrapped;
let defaultProps = {
 index: 0,
 isActive: true,
 content: '<div></div>',
};

beforeEach(() => {
  wrapped = mount(<TabContent {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<TabContent />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
