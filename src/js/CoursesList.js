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

class CoursesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            subjects: []
        };
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    componentDidMount() {
        const userId = window.prompt("input your userId", "");
        fetch("http://160.16.121.168/api/users/" + userId)
            .then(response => response.json())
            .then(json => {
                this.setState({ subjects: json });
            });
    }

    chooseCourse(id) {
        this.props.chooseCourse(id);
        this.props.handleClose();
    }

    render() {
        const subjects = [];
        this.state.subjects.map((data) => {
            subjects.push(
              <ListItem key={data.id} primaryText={data.name} secondaryText={data.subject_name} onClick={() => {this.chooseCourse(data.id)}}/>
            );
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
