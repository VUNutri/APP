import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import './Blocker.css';

class Blocker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [
        { id: '1', text: 'pienas' },
        { id: '2', text: 'svogūnai' },
        { id: '3', text: 'pomidorai' },
        { id: '4', text: 'bulvės' },
     ]
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
    const { tags, suggestions } = this.state;
    return (
      <div className="tag-div">
        <div className="col col-sm-12">
          Produktai, kurių neįtraukti į maisto racioną:
          <ReactTags
            tags={tags}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            suggestions={suggestions}
            placeholder=""
          />
        </div>
      </div>
    )
  }
};

export default Blocker;