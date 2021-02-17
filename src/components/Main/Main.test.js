import React from 'react';
import { mount } from 'enzyme';
import Main from 'components/Main';

let wrapped;
let defaultProps = {
  children: '<div>Main Component</div>',
};

beforeEach(() => {
  wrapped = mount(<Main {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Main />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
