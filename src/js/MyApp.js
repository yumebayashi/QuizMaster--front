import React, { Component } from 'react';
import Header from './Header';
import QuizCard from './QuizCard';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MyApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <div>
                <Header/>
              </div>
              <div className="content">
                <QuizCard />
              </div>
            </div>
        );
    }
}

export default MyApp;