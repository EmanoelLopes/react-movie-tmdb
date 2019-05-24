import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import SubNav from 'components/SubNav';

const mockItems = [
  { link: '/movies/top-rated', page: 'Top Rated' },
  { link: '/movies/popular', page: 'Popular' },
  { link: '/movies/up-coming', page: 'Up Coming' },
  { link: '/movies/now-playing', page: 'Now Playing' },
];

let wrapped;
let defaultProps = {
  items: [...mockItems]
};

beforeEach(() => {
  wrapped = mount(
    <Router>
      <SubNav {...defaultProps} />
    </Router>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<SubNav />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
