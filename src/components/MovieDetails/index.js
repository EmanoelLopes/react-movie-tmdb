import React, { Fragment } from 'react';
import { number, string } from 'prop-types';
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
      <H1>Details</H1>
      <Grid>
        <MovieDetailsCard>
          <h2>Budget <FontAwesomeIcon icon={faDollarSign} /></h2>
          <p className="budget">$ {budget}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>Revenue <FontAwesomeIcon icon={faMoneyBillAlt} /></h2>
          <p className="revenue">$ {revenue}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>Status <FontAwesomeIcon icon={faCalendarCheck} /></h2>
          <p className="status">{status}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>Release <FontAwesomeIcon icon={faCalendarAlt} /></h2>
          <p className="release-date">{releaseDate}</p>
        </MovieDetailsCard>
        <MovieDetailsCard>
          <h2>Popularity <FontAwesomeIcon icon={faSmile} /></h2>
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
