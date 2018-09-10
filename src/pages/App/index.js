import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';

import { AppText } from './app.text';
import ContainerMiddlePage from '../../layouts/ContainerMiddlePage'

class App extends Component {
    render() {
      const staticText = tools.checkLanguage(AppText);

        return (
            <ContainerMiddlePage>
              {staticText.helloW}
            </ContainerMiddlePage>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(App);
