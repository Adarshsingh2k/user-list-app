import React from 'react';
import './usertable.css'
import "../App.css"


const UserTable = ({ users, onRemoveUser, onAddUser }) => {
  return (
      <>
          <div className="d-flex justify-content-end mb-3">
              <button className="primary btn mb-3 text-white mt-2 " onClick={onAddUser}>+ Add New User</button>
              </div>
      <table className="custom-bordered-table table     table-hover">
        <thead className='custom-table-header '>
          <tr >
            <th>STATUS</th>
            <th>USER ID</th>
            <th>EMAIL ADDRESS</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>USER ROLE</th>
            <th>EXPIRY BY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}  >
              <td className='align-middle'> <span className='status-badge text-black' >{user.status}</span></td>
              <td className='align-middle'>{user.userId}</td>
              <td className='align-middle'>{user.email}</td>
              <td className='align-middle'>{user.firstName}</td>
              <td className='align-middle'>{user.lastName}</td>
              <td className='text-green align-middle'>{user.userRole}</td>
              <td className='align-middle'>{user.expiryBy}</td>
              <td className='align-middle'>
                <div className="dropdown">
                  <button onClick={()=>console.log("hit")} className="grey btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Actions
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <button className="dropdown-item" onClick={() => onRemoveUser(user.userId)}>Remove User</button>
                    </li>
                  </ul>
                </div>
                      
                    
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
