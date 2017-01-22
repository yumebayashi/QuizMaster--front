import React, { Component } from 'react';
import Header from './Header';
import QuizCard from './QuizCard';
import MyDrawer from './MyDrawer';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    handleCourseClick() {
        this.refs.drawer.handleCourseClick();
    }

    chooseCourse(id){
        this.refs.quiz.setTitle(id);
    }

    render() {
        return (
            <div>
              <div>
                <Header handleCourseClick={this.handleCourseClick.bind(this)}/>
              </div>
              <div>
                <MyDrawer ref="drawer" chooseCourse={this.chooseCourse.bind(this)}/>
              </div>
              <div className="content">
                <QuizCard ref="quiz" />
              </div>
            </div>
        );
    }
}

export default MyApp;