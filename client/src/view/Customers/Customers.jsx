import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleReset, setCustomer } from '../../redux/features/Customer/CustomerSlice';

export default function Customers() {
  const { loading, customers } = useSelector((state) => state.customer);
  const dispatch = useDispatch()
  const handleChange = ({ target }) => {
    const newData = { ...customers }
    newData[target.name] = target.value
    dispatch(setCustomer(newData))
  }

  const handleSubmit = (event) => {
    console.log("submit Data", customers);
    event.preventDefault();
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <form>
            <input type="text" name='fName' onChange={handleChange} /><br />
            <input type="text" name='lName' onChange={handleChange} /><br />
            <input type="text" name='phone' onChange={handleChange} /><br />
            <input type="submit" title='Submit' onClick={handleSubmit} />
            <input type="reset" title='React' onClick={() => dispatch(handleReset())} />
          </form>
        </div>
        <dic className="col-md-6">
          <ul>
            <li>{customers.fName}</li>
            <li>{customers.lName}</li>
            <li>{customers.phone}</li>
          </ul>
        </dic>
      </div>

    </div>
  )
}
