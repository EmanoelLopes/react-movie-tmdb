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
  wrapped = mount(<HeroSection {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<HeroSection />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should have a tag <h1> with a text', () => {
    expect(wrapped.find('.hero-info h1')).toHaveLength(1);
  });

  it('title text should be equal defaultProps title', () => {
    expect(wrapped.find('.hero-info h1').text()).toEqual(defaultProps.title);
  });

  it('should have a tag <p> with a text', () => {
    expect(wrapped.find('.hero-info p')).toHaveLength(1);
  });

  it('description text should be equal defaultProps description', () => {
    expect(wrapped.find('.hero-info p').text()).toEqual(defaultProps.description);
  });
});
