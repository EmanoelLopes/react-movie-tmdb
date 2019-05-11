import React from 'react';
import { shallow } from 'enzyme';
import Footer from 'components/Footer';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Footer />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Footer />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
