import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Card from 'components/Card';
 
let wrapped;
let defaultProps = {
  title: 'Some Card',
  description: 'some description',
  poster: 'someposterpath.jpg',
  id: 'someid',
};

beforeEach(() => {
  wrapped = mount(
    <BrowserRouter>
      <Card {...defaultProps} />
    </BrowserRouter>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Card />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should have a title h3', () => {
    expect(wrapped.find('.card-info h3')).toHaveLength(1);
  });

  it('should have a paragraph with description', () => {
    expect(wrapped.find('.card-info p')).toHaveLength(1);
  });

  it('should have a image tag with the poster path', () => {
    expect(wrapped.find('.card-poster figure img')).toHaveLength(1);
  });
});
