import React from 'react';
import { mount } from 'enzyme';
import { Home } from 'pages';
import Root from 'components/Root';

let wrapped;
let defaultProps = {
  loading: false,
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Home {...defaultProps} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Home />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
