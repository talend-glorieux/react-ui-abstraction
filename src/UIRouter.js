import React from 'react';
import { Router as BaseRouter } from 'react-router';
import { connect } from 'react-redux';

import api from './api';

class UIRouter extends React.Component {

  render() {
    const routes = api.route.getRoutesFromSettings(this.context, this.props.routes);
    if (routes.path === '/' && !!routes.component) {
      return (
        <BaseRouter routes={routes} history={this.props.history} />
      );
    }
    return (
      <div>loading</div>
    );
  }
}

UIRouter.propTypes = {
  history: React.PropTypes.object,
  routes: React.PropTypes.object,
};
UIRouter.contextTypes = {
  registry: React.PropTypes.object,
};
const mapStateToProps = (state) => ({ routes: state.settings.routes });
export default connect(
  mapStateToProps
)(UIRouter);
