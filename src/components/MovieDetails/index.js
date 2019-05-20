import React, { Fragment } from 'react';
import { number, string } from 'prop-types';
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDollarSign,
  faMoneyBillAlt,
  faCalendarCheck,
  faCalendarAlt,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import Grid from 'components/Grid';
import { H1 } from 'utils/styled';
import { MovieDetailsCard }  from './styles';

const MovieDetails = props => {
  const {
    budget,
    revenue,
    status,
    releaseDate,
    popularity,
  } = props;

  return (
    <Fragment>
      <H1>{intl.get('MOVIE_PAGE.DETAILS_TITLE')}</H1>
      <Grid>
        <MovieDetailsCard>
          <h2>{intl.get('MOVIE_PAGE.DETAILS.BUDGET')} <FontAwesomeIcon icon={faDollarSign} /></h2>
          <p className="budget">$ {budget}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>{intl.get('MOVIE_PAGE.DETAILS.REVENUE')} <FontAwesomeIcon icon={faMoneyBillAlt} /></h2>
          <p className="revenue">$ {revenue}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>{intl.get('MOVIE_PAGE.DETAILS.STATUS')} <FontAwesomeIcon icon={faCalendarCheck} /></h2>
          <p className="status">{status}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>{intl.get('MOVIE_PAGE.DETAILS.RELEASE')} <FontAwesomeIcon icon={faCalendarAlt} /></h2>
          <p className="release-date">{releaseDate}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>{intl.get('MOVIE_PAGE.DETAILS.POPULARITY')} <FontAwesomeIcon icon={faSmile} /></h2>
          <p className="popularity">{popularity}</p>
        </MovieDetailsCard>
      </Grid>
    </Fragment>
  );
};

MovieDetails.propTypes = {
  budget: number,
  revenue: number,
  status: string,
  releaseDate: string,
  popularity: number,
};

MovieDetails.defaultProps = {
  budget: 0,
  revenue: 0,
  status: '',
  releaseDate: '',
  popularity: 0,
};

export default MovieDetails;
