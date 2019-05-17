import React from 'react';
import { shallow } from 'enzyme';
import TVInformation from 'components/TVInformation';

let wrapped;
let defaultProps = {
  firstAirDate: '',
  numberOfEpisodes: 0,
  seasonNumber: 0,
  episodeNumber: 0,
  episodeName: '',
  homepage: '',
};

beforeEach(() => {
  wrapped = shallow(<TVInformation {...defaultProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('<TVInformation />', () => {
  it('should match snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
