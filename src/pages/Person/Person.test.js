import React from 'react';
import { mount } from 'enzyme';
import { Person } from 'pages';
import Root from 'components/Root';

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Person {...defaultProps} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Person />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
