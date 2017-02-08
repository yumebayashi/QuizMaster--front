import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyCardAction from './MyCardAction';

class QuizCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quizs: [],
            count: 0
        };
    }

    setQuizs(id) {
        fetch("http://160.16.121.168/api/courses/" + id)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    quizs: json,
                    count: 0
                });
            });
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    render() {
        if (this.state.quizs.length < 1) {
            return (<div>no quiz</div>);
        } else if (this.state.quizs.length <= this.state.count) {
            return (<div>finished</div>);
        } else {

            const tmp = this.state.quizs[this.state.count]
            return (
                <Card>
                <CardHeader
                  title={tmp.title}
                  subtitle={tmp.body}
                />
                <MyCardAction data={tmp}/>
                <CardActions>
                  <FlatButton label="Next" onClick={() => this.increment()}/>
                </CardActions>
                </Card>
            );
        }
    }
}

QuizCard.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default QuizCard;