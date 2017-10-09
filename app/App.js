import React from 'react';
import Timepicker from './components/Timepicker';
import Order from './components/Order';
import Story from './components/Story';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import { Link } from 'react-router';

require("./style.less");

const randomList = ["Before", "you", "can", "begin", "to"];

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

  onChangeTime(e) {
    this.setState({selectedTime: Object.assign({}, this.state.selectedTime, {[e.target.name]: e.target.value})});
  }

  onChangeMeridiem(e) {
    this.refs.timePicker ? this.refs.timePicker.needRenderFunction() : null;
    this.setState({selectedTime: Object.assign({}, this.state.selectedTime, {['meridiem']: e.target.value})});
  }

  render() {
    console.log('this.refs.timePicker', this.refs.timePicker ? this.refs.timePicker : 'not defined');
    return (
      <div className="Timer">
        <p>
          Pick your time {this.state.selectedTime.hour}:{this.state.selectedTime.minute} {this.state.selectedTime.meridiem}!!!
        </p>
        <div>
          <Order />
          <Timepicker ref='timePicker' time={this.state.selectedTime} onChange={this.onChangeTime} onClick={this.onChangeMeridiem} />
	        <AddTodo />
   	      <VisibleTodoList />
          <Story style={{width: '20%'}} list={randomList} count='3' />
          <Footer />
        </div>
      </div>
    );
 }
}

export default App;
