import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class QuizCard extends Component {

    constructor(props) {
        super(props);
        this.state = { title: "yasu" };
    }

    static setTitle(title) {
        console.log(this);
        this.setState({ title: title });
        // this.titleRender(title);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render() {
        return (
            <Card>
              <CardHeader
                title={this.state.title}
                subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
        );
    }
}

QuizCard.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default QuizCard;