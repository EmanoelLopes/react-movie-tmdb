import React from 'react';
import { mount } from 'enzyme';
import { Movies } from 'pages';
import Root from 'components/Root';

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Movies {...defaultProps} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Movies />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
