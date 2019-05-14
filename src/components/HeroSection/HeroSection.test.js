import React from 'react';
import { mount } from 'enzyme';
import HeroSection from 'components/HeroSection';

let wrapped;
let defaultProps = {
  title: '',
  description: '',
  backdrop: '',
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

  it('should have a tag <p> with a text', () => {
    expect(wrapped.find('.hero-info p')).toHaveLength(1);
  });
});
