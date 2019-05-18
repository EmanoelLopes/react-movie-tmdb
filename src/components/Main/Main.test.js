import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root';
import Main from 'components/Main';
import { BrowserRouter } from 'react-router-dom';

let wrapped;
let defaultProps = {
  children: '<div>Main Component</div>',
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <BrowserRouter>
        <Main {...defaultProps} />
      </BrowserRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('<Main />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
