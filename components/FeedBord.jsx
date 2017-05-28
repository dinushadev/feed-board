import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { Checkbox, List } from 'material-ui';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

class FeedBord extends Component {
  constructor(props, context) {
    super(props, context);
  //  this.state = { filter: SHOW_ALL };
  }


  render() {
    // const { todos, actions } = this.props;
    // const { filter } = this.state;
    //
    // const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    // const completedCount = todos.reduce((count, todo) =>
    //   todo.completed ? count + 1 : count,
    //   0
    // );

    return (
      <section className="main-contaner" >
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
    );
  }
}

// MainSection.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

export default FeedBord;
