import React, { Component } from 'react';
import MobileTearSheet from './MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyList from './MyList';

class CoursesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            subjects: []
        };
        this.handleClose = this.handleClose.bind(this);
        this.chooseCourse = this.chooseCourse.bind(this);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    componentDidMount() {
        fetch("https://demo2739984.mockable.io/user/1")
            .then(response => response.json())
            .then(json => {
                this.setState({ subjects: json });
            });
    }

    handleClose() {
        this.props.handleClose();
    }

    chooseCourse(id) {
        this.props.chooseCourse(id);
    }

    render() {

        const subjects = [];
        this.state.subjects.map((data) => {
            subjects.push(<MyList key={data.id} item={data} handleClose={this.handleClose} chooseCourse={this.chooseCourse}/>);
        });

        return (
            <div>
              <MobileTearSheet>
                <List>
                  {subjects}
                </List>
              </MobileTearSheet>
            </div>
        );
    }
}

CoursesList.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};


export default CoursesList;