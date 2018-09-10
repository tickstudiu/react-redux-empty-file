import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';

import { AppText } from './app.text';
import ContainerMiddlePage from '../../layouts/ContainerMiddlePage';
import { BtnLang } from '../../components';

class App extends Component {
  handleChagneLang = (lang) =>{
    this.props.changeLanguage(lang);
  }

    render() {
      const staticText = tools.checkLanguage(AppText);
      const { handleChagneLang } = this;

        return (
            <ContainerMiddlePage>
              <h1 className="display-4">{staticText.helloW}</h1>
              <BtnLang handleChagneLang={handleChagneLang} />
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
