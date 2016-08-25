import React from 'react';

require("./Timepicker.less");

const pad = (value) => value < 10 ? '0' + value.toString() : value.toString();

const hours = () => {
  var hours = [], i;
  for(i = 1; i <= 12; i++) {
    hours.push(pad(i));
  }
  return hours;
}

const minutes = () => {
  var minutes = [], i;
  for(i = 0; i < 60; i++) {
    minutes.push(pad(i));
  }
  return minutes;
}

class Timepicker extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTime(list) {
    return list.map(function(timeValue) {
      return (
        <option key={timeValue} value={timeValue}>{timeValue}</option>
      )
    })
  }

  render() {
    const selectedMeridiem = this.props.time.meridiem;
    const selectedButtonStyle = function(meridiem) {
      const isSelected = selectedMeridiem === meridiem;
      return {
        backgroundColor: isSelected ? '#000' : '#FFF',
        color: isSelected ? '#FFF': '#000'
      }
    }
    return (
      <div className='time'>
        <div className='time-picker'>
          <select className='hour' name='hour' value={this.props.time.hour} onChange={this.props.onChange}>
            {this.renderTime(hours())}
          </select>
          {':'}
          <select className='minute' name='minute' value={this.props.time.minute} onChange={this.props.onChange}>
            {this.renderTime(minutes())}
          </select>
        </div>
        <div className='buttons'>
          <button
            className='morn'
            style={selectedButtonStyle('AM')}
            value='AM'
            onClick={this.props.onClick}
          >AM</button>
          <button
            className='even'
            style={selectedButtonStyle('PM')}
            value='PM'
            onClick={this.props.onClick}
          >PM</button>
        </div>
      </div>
    )
  }
}

export default Timepicker;
