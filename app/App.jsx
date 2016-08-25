import React from 'react';
import Timepicker from "./components/timepicker/Timepicker.jsx";
import { Link } from 'react-router';

require("./style.less");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTime: {
        hour: '08',
        minute: '30',
        meridiem: 'AM'
      }
    };
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeMeridiem = this.onChangeMeridiem.bind(this);
  }

  onChangeTime(event) {
    this.setState({selectedTime: Object.assign({}, this.state.selectedTime, {[event.target.name]: event.target.value})});
  }

  onChangeMeridiem(event) {
    this.setState({selectedTime: Object.assign({}, this.state.selectedTime, {['meridiem']: event.target.value})});
  }

  render() {
    return (
      <div className="Timer">
        <Link to="/order">Order Form</Link>
        <p>
          Pick your time {this.state.selectedTime.hour}:{this.state.selectedTime.minute} {this.state.selectedTime.meridiem}!!!
        </p>
        <div>
          <Timepicker time={this.state.selectedTime} onChange={this.onChangeTime} onClick={this.onChangeMeridiem} />
        </div>
      </div>
    );
 }
}

export default App;
