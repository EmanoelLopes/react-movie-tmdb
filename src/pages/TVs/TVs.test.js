import React from 'react';
import { mount } from 'enzyme';
import { TVs } from 'pages';
import Root from 'components/Root';
import locale from 'lang';

locale.init();

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <TVs {...defaultProps} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<TVs />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
