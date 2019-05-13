import React from 'react';
import { mount } from 'enzyme';
import HeroSection from 'components/HeroSection';

let wrapped;
let defaultProps = {
  title: 'Shazam!',
  description: 'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
  backdrop: 'http://image.tmdb.org/t/p/w1280/nmV9MdbzST4xv8WMHwhVgxkHHjM.jpg',
};

beforeEach(() => {
  wrapped = mount(
    <HeroSection { ...defaultProps } />
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<HeroSection />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
