import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';

import {AppText} from './app.text';
import ContainerMiddlePage from '../../layouts/ContainerMiddlePage';
import MsgBox from '../../layouts/MsgBox';

class App extends Component {
    render() {
        const staticText = tools.checkLanguage(AppText);

        return (
            <ContainerMiddlePage>
                <MsgBox ProfileImg="https://www.mypum.com/wp-content/uploads/2017/01/IMG_7521-min.jpg" ProfileAlt="profile image">
                    <h1 className="display-4">{staticText.helloW}</h1>
                </MsgBox>
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
