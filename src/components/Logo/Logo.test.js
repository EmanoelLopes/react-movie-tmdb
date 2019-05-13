import React from 'react';
import { shallow } from 'enzyme';
import Logo from 'components/Logo';

describe('<Logo />', () => {
  it('should match snapshot', () => {
    const wrapped = shallow(<Logo />);
    expect(wrapped).toMatchSnapshot();
  });
});
