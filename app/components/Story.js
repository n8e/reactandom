import React, { Component, PropTypes } from 'react';

class Story extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.renderEllipsisList = this.renderEllipsisList.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  renderList(list) {
    return list.map((listItem, i) => {
      return (<div key={i} style={{marginRight: '4px', display: 'inline-block'}}><a href=''>{listItem}</a></div>)
    })
  }

  handleModal() {
    console.log('handling modal');
  }

  renderEllipsisList(list, count) {
    let nl = list.slice(0, count);
    nl.push('...');
    return nl.map((li, i) => {
      if (i === nl.length - 1) {
        return (<button key={i} onClick={this.handleModal} style={{border: 'none', backgroundColor: '#fff', marginRight: '4px', display: 'inline-block', color: '#337AB7'}}>{li}</button>)
      } else {
        return (<div key={i} style={{marginRight: '4px', display: 'inline-block'}}><a href=''>{li}</a></div>)
      }
    });
  }

  render() {
    return (
      <div>
        { (this.props.list.length > this.props.count) ?
          this.renderEllipsisList(this.props.list, this.props.count) :
          this.renderList(this.props.list)
        }
      </div>
    )
  }
}

Story.propTypes = {
  list: PropTypes.array.isRequired,
  count: PropTypes.string.isRequired,
}

export default Story;
