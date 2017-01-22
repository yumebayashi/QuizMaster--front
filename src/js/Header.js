import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import School from 'material-ui/svg-icons/social/school';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    handleCourseClick() {
        this.props.handleCourseClick();
    }

    render() {
        return (
            <div>
              <AppBar
                 title="Sample Quiz"
                 iconElementLeft={<IconButton><School /></IconButton>}
                 iconElementRight={<FlatButton label="Courses" onClick={this.handleCourseClick.bind(this)}/>}
              />
            </div>
        );
    }
}

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};


export default Header;