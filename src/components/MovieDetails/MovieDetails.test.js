import React from 'react';
import { mount } from 'enzyme';
import { format } from 'date-fns';
import MovieDetails from 'components/MovieDetails';

let wrapped;
let defaultProps = {
  budget: 1000000,
  revenue: 10000000,
  status: 'Released',
  releaseDate: format('2019-04-10', 'MM/DD/YYYY'),
  popularity: 350000,
};

beforeEach(() => {
  wrapped = mount(<MovieDetails {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<MovieDetails />', () => {
  it('should match snashot', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should release date has the correclty formated date', () => {
    wrapped.setProps({ releaseDate: format('2019-12-10', 'MM/DD/YYYY') });
    const releaseDate = wrapped.find('p.release-date').text();
    expect(releaseDate).toEqual('12/10/2019');
  });

  it('should budget props value has the correctly value', () => {
    const budget = wrapped.props().budget;
    expect(budget).toEqual(defaultProps.budget);
  });

  it('should revenue props value has the correctly value', () => {
    const revenue = wrapped.props().revenue;
    expect(revenue).toEqual(defaultProps.revenue);
  });

  it('should status props value has the correctly value', () => {
    const status = wrapped.props().status;
    expect(status).toEqual(defaultProps.status);
  });

  it('should popularity props value has the correctly value', () => {
    const popularity = wrapped.props().popularity;
    expect(popularity).toEqual(defaultProps.popularity);
  });
});
