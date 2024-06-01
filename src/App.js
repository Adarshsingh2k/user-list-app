import React, { useState } from "react";
import UserTable from "./Component/UserTable";
import AddUserForm from "./Component/AddUserForm";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (userId) => {
    console.log("handled");
    setUsers(users.filter((user) => user.userId !== userId));
  };

  const handleAddUser = (data) => {
    const newUser = {
      status: "Active",
      userId: Math.random().toString(36).substr(2, 9),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      userRole: data.role,
      expiryBy: "2024-12-31",
    };
    addUser(newUser);
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <UserTable
            users={users}
            onRemoveUser={removeUser}
            onAddUser={() => setShowModal(true)}
          />
        </div>
      </div>

      {showModal && <div className="modal-backdrop show"></div>}

      <div
        className={`modal right ${showModal ? "show d-block" : "d-none"}`}
        tabIndex="-1"
      >
        <div className="modal-dialog p-1">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New User</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <AddUserForm
                onSubmit={handleAddUser}
                onCancel={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
