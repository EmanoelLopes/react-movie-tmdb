import React from 'react';
import { mount } from 'enzyme';
import { TV } from 'pages';
import Root from 'components/Root';

let wrapped;
let defaultProps = {
  match: {
    params: {
      id: 1,
    },
  },
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <TV {...defaultProps} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<TV />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
