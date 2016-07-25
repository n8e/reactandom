import React from 'react';

require('./Order.less');

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  render() {
    return(
      <div className='orderform'>
        <div className='name'>
          <div className='name-label'>
            <label>Name:</label>
          </div>
          <div className='first-name'>
            <input type='text' placeholder='First Name'></input>
          </div>
          <div className='last-name'>
            <input type='text' placeholder='Last Name'></input>
          </div>
        </div>
        <div className='phone'>
          <div className='phone-label'>
            <label>Contact Phone Number:</label>
          </div>
          <div className='area-code'>
            <input type='text' placeholder='code' />
          </div>
          <div className='phone-number'>
            <input type='text' placeholder='phone number' />
          </div>
        </div>
        <div className='address'>
          <div className='address-label'>
            <label>Delivery address:</label>
          </div>
          <div className='address-inputs'>
            <input type='text' placeholder='address line 1' />
            <input type='text' placeholder='address line 2' />
            <div className='city-state'>
              <div className='city'>
                <input type='text' placeholder='city' />
              </div>
              <div className='state'>
                <input type='text' placeholder='state/province' />
              </div>
            </div>
            <div className='zip-country'>
              <div className='zip'>
                <input type='text' placeholder='ZIP' />
              </div>
              <div className='country'>
                <input type='text' placeholder='country' />
              </div>
            </div>
          </div>
        </div>
        <button>Submit</button>
      </div>
    )
  }
}

export default Order;