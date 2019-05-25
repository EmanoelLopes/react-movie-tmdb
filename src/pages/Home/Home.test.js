import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as WrappedRouter } from 'react-router-dom';
import Root from 'components/Root';
import { Home } from 'pages';
import locale from 'lang';

locale.init();

let wrapped;
let defaultProps = {
  loading: false,
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <WrappedRouter>
        <Home {...defaultProps} />
      </WrappedRouter>
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
