import React from 'react';
import { mount } from 'enzyme';
import { About } from 'pages';
import Root from 'components/Root';

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <About {...defaultProps} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<About />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
