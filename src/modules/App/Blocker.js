import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import './Blocker.css';

class Blocker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }
 
  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  render() {
    const { tags } = this.state;
    return (
      <table id="table">
        <p>Įveskite nenorimus produktus</p>
        <ReactTags 
          tags={tags}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          placeholder=""  
        />
        <br/>
      </table>
    )
  }
};

export default Blocker;