import React from 'react';
import { mount } from 'enzyme';
import HeroSection from 'components/HeroSection';
import locale from 'lang';

locale.init();

let wrapped;
let defaultProps = {
  title: '',
  description: '',
  backdrop: '',
  isCurrent: true,
  createdBy: [
    {id: 1, name: 'Marvel'},
    {id: 2, name: 'HBO'},
  ],
  rating: 0,
  genres: [
    { id: 123, name: 'Science Fiction' },
    { id: 446, name: 'Action' },
  ],
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
    expect(wrapped.find('.hero-info .hero-description')).toHaveLength(1);
  });

  it('should genres has two items on list', () => {
    expect(wrapped.props().genres).toHaveLength(2);
  });

  it('should createdBy has two items on list', () => {
    expect(wrapped.props().createdBy).toHaveLength(2);
  });

  it('should render directors/created-by correclty', () => {
    wrapped.find('.created-by').forEach(node => {
      expect(node.hasClass('created-by')).toEqual(true);
    });
  });

  it('should render genres correclty', () => {
    wrapped.find('.genre').forEach(node => {
      expect(node.hasClass('genre')).toEqual(true);
    });
  });
});
