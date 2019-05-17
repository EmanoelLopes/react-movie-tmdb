import { Component } from 'react';
import { object, node } from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  
  render() {
    const { children } = this.props;

    return children;
  }
}

ScrollToTop.propTypes = {
  location: object.isRequired,
  children: node.isRequired,
};

export default withRouter(ScrollToTop);
