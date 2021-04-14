import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';

export default class Home extends Component {
    render() {
        return (
            <div>
                Home Component
            </div>
        );
    }
}
