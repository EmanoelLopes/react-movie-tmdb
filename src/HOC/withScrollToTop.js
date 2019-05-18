import React from 'react';
import { object } from 'prop-types';

const withScrollToTop = WrappedComponent => {
  class Wrapped extends React.Component {
    componentDidUpdate(prevProps) {
      const { location } = this.props;

      if (location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Wrapped.propTypes = {
    location: object,
  };

  return Wrapped;
};

export default withScrollToTop;
