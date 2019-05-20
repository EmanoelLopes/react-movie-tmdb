import React from 'react';
import { mount } from 'enzyme';
import SelectLanguage from 'components/SelectLanguage';
import locale from 'lang';

locale.init();

let wrapped;

beforeEach(() => {
  wrapped = mount(<SelectLanguage />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<SelectLanguage />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
