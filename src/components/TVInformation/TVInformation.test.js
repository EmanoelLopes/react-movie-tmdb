import React from 'react';
import { shallow } from 'enzyme';
import TVInformation from 'components/TVInformation';
import locale from 'lang';

locale.init();

let wrapped;
let defaultProps = {
  firstAirDate: '',
  numberOfEpisodes: 0,
  numberOfSeasons: 0,
  seasonNumber: 0,
  episodeNumber: 0,
  episodeName: '',
  nextEpisodeNumber: 0,
  nextEpisodeName: '', 
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
