import React from 'react';
import { mount } from 'enzyme';
import Grid from 'components/Grid';

const Children = '<div></div>';

describe('<Grid />', () => {
  it('should match snapshot', () => {
    const wrapped = mount(<Grid>{Children}</Grid>);
    expect(wrapped).toMatchSnapshot();
  });
});
