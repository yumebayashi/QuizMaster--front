import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class MyCardAction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            is_correct: null,
            format: "",
            quiz_id: 0

        };
        this.updateAnswers(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        this.updateAnswers(nextProps.data);
    }

    updateAnswers(data) {
        fetch("http://160.16.121.168/api/answers/" + data.id)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    answers: json,
                    is_correct: null,
                    format: data.format,
                    quiz_id: data.id
                });
            });
    }
    checkAnswer(answer) {
        const quiz_id = this.state.quiz_id;
        fetch("http://160.16.121.168/api/answers/" + quiz_id + "/check?answer=" + answer)
            .then(response => response.text())
            .then(text => {
                this.setState({
                    is_correct: text
                });
            });
    }

    answer(body) {
        this.checkAnswer(body);
    }
    freeAnswer() {
        this.checkAnswer(this.refs.myField.getValue());
    }

    render() {
        let answer;
        if (this.state.is_correct == null) {
            answer = "";
        } else if (this.state.is_correct == "true") {
            answer = "correct";
        } else {
            answer = "incorrect";
        }

        if (this.state.format == "selection") {
            const nested = [];
            this.state.answers.map((data) => {
                nested.push(<FlatButton label={data.body} key={data.id} onClick={() => this.answer(data.body)}/>);
            });
            return (
                <CardActions>
                <div>{answer}</div>
                  {nested}
                </CardActions>
            );
        } else {

            return (
                <div>
                <div>{answer}</div>
                <TextField hintText="answer here" ref="myField"/>
                <FlatButton label="submit" onClick={() => this.freeAnswer()}/>
                </div>
            );


        }

    }
}

export default MyCardAction;