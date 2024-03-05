import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [usersData, setUsersData] = useState([
    { username: '', country: '', mobileNo: '' },
  ]);

  const [error, setError] = useState(false);

  const handleChangeInput = (e, i, inputName) => {
    const { name, value } = e.target;
    const updatedUserData = [...usersData];
    updatedUserData[i] = { ...updatedUserData[i], [inputName]: value };
    setUsersData(updatedUserData);
  };

  const handleAddInput = () => {
    setUsersData([...usersData, { username: '', country: '', mobileNo: '' }]);
  };

  console.log(usersData);
  const handleSubmit = () => {
    usersData.map((eachItem, index) => eachItem[0].username === '');
    // setError(true);

    console.log(usersData, 'submitted');
  };

  return (
    <>
      <div className="">
        <h1 className="heading">Dynamic Input Form Handling</h1>
        <div className="main-container">
          {usersData.map((eachItem, index) => (
            <>
              <input
                type="text"
                name="username"
                value={eachItem.username}
                onChange={(e) => handleChangeInput(e, index, 'username')}
                placeholder="Enter Name Here "
              />
              <select
                name="country"
                value={eachItem.country}
                placeholder="Please Select Country"
                onChange={(e) => handleChangeInput(e, index, 'country')}
              >
                <option value="">Please Select Country</option>
                <option>India</option>
                <option>US</option>
                <option>Pak</option>
              </select>
              <input
                type="number"
                name="mobileNo"
                value={eachItem.mobileNo}
                onChange={handleChangeInput}
                placeholder="Enter Mobile Number Here"
                onChange={(e) => handleChangeInput(e, index, 'mobileNo')}
              />
              <button className="add-more" onClick={handleAddInput}>
                Add More
              </button>
            </>
          ))}
        </div>
        {error ? <p style={{ color: 'red' }}>Please Enter First Name</p> : null}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
