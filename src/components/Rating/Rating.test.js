import React from 'react';
import { shallow } from 'enzyme';
import Rating from 'components/Rating';

let wrapped;
let defaultProps = {
  rating: 1,
};

beforeEach(() => {
  wrapped = shallow(<Rating {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Rating />', () => {
  it('should match snapshot', () => {
    wrapped.setProps({ rating: 7 });
    expect(wrapped).toMatchSnapshot();
  });

  it('test backgroundColor green for average upper than 7', () => {
    wrapped.setProps({ rating: 7 });
    expect(wrapped.find('small')).toHaveStyle({ backgroundColor: '#01d277' });
  });

  it('test backgroundColor orange for average less than 7, greater than 5', () => {
    wrapped.setProps({ rating: 6 });
    expect(wrapped.find('small')).toHaveStyle({ backgroundColor: 'orange' });
  });

  it('test backgroundColor red for average less than 5', () => {
    wrapped.setProps({ rating: 4.9 });
    expect(wrapped.find('small')).toHaveStyle({ backgroundColor: 'red' });
  });
});
