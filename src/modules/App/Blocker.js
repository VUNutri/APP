import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import axios from 'axios';
import './Blocker.css';
import Const from '../Const/Const';

class Blocker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [],
      blocks: this.props.blockedItems,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  componentWillMount() {
    const resp = [];
    axios.get(`${Const.apiHost}products/getAll`)
      .then((res) => {
        res.data.map((r) => {
          resp.push({ id: r.id.toString(), text: r.title });
        });
        this.setState({ suggestions: resp });
      });
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
    const arr = [];
    this.state.tags.map((t) => {
      arr.push(parseInt(t.id));
    });
    this.props.handler({
      items: arr,
    });
  }

  handleAddition(tag) {
    let is = false;
    for (let i = 0; i < this.state.suggestions.length; i += 1) {
      if (this.state.suggestions[i].text === tag.text) {
        is = true;
        break;
      }
    }
    if (is) {
      this.setState(state => ({ tags: [...state.tags, tag] }));
      const arr = [];
      this.state.tags.map((t) => {
        arr.push(parseInt(t.id));
      });
      this.props.handler({
        items: arr,
      });
    }
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
            minQueryLength={1}
            placeholder=""
          />
        </div>
      </div>
    )
  }
};

export default Blocker;