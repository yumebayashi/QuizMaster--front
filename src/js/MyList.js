import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import QuizCard from './QuizCard';

class MyList extends Component {

    chooseCourse(id) {
        this.props.handleClose();
        this.props.chooseCourse(id);
    }

    render() {
        const nested = [];
        this.props.item.courses.map((data) => {
            nested.push(<ListItem key={data.id} primaryText={data.name} onClick={() => {this.chooseCourse(data.name)}}/>);
        });
        return (
            <ListItem key={this.props.item.id}
                      primaryText={this.props.item.name}
                      primaryTogglesNestedList={true}
                      nestedItems={nested}
                />
        );
    }
}

export default MyList;