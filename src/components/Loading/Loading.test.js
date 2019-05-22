import React from 'react';
import { shallow } from 'enzyme';
import Loading from 'components/Loading';
import locale from 'lang';

locale.init();

describe('<Logo />', () => {
  it('should match snapshot', () => {
    const wrapped = shallow(<Loading />);
    expect(wrapped).toMatchSnapshot();
  });
});
