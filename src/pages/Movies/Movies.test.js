import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Movies } from 'pages';
import Root from 'components/Root';
import locale from 'lang';

locale.init();

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Router>
        <Movies {...defaultProps} />
      </Router>
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
