import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CoursesList from './CoursesList';

class MyDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleClose = this.handleClose.bind(this);
        this.chooseCourse = this.chooseCourse.bind(this);
    }

    handleCourseClick() {
        this.setState({ open: !this.state.open });
    }

    handleClose() {
        this.setState({ open: false });
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    chooseCourse(id) {
        this.props.chooseCourse(id);
    }

    render() {
        return (
            <div>
              <Drawer open={this.state.open} onRequestChange={(open) => this.setState({open})} docked={false}>
                <CoursesList handleClose={this.handleClose} chooseCourse={this.chooseCourse}/>
              </Drawer>
            </div>
        );
    }
}

MyDrawer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default MyDrawer;