import React from 'react';
import { mount } from 'enzyme';
import CastCard from 'components/CastCard';

let wrapped;
let defaultProps = {
  id: 123,
  profile: 'https://placehold.jp/154x250.png?text=NO%20IMAGE',
  name: 'Kit Harington',
  character: 'Jon Snow',
};

beforeEach(() => {
  wrapped = mount(<CastCard {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<CastCard />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
