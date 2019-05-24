import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { TVs } from 'pages';
import locale from 'lang';

locale.init();

let wrapped;
let defaultProps = {};

beforeEach(() => {
  wrapped = mount(
    <Router>
      <TVs {...defaultProps} />
    </Router>
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
