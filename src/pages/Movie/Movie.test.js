import React from 'react';
import { mount } from 'enzyme';
import { Movie } from 'pages';
import Root from 'components/Root';
import locale from 'lang';

locale.init();

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
      <Movie {...defaultProps} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Movie />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
