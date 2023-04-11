import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserService from "../../services/UserService";
import { logoutAuth } from "../../store/Slices/authSlice";

const CharacterCreatorPage = () => {
  const [users, setUsers] = useState([]);
  const store = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {}
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "white" }}>
        You are logged in with {store.user.email} with this username{" "}
        {store.user.username}
      </h1>
      <h2 style={{ color: "white" }}>
        {store.user.isActivated ? "Account activated" : "Account not activated"}
      </h2>
      <button onClick={() => dispatch(logoutAuth())}>LOGOUT </button>
      <button onClick={getUsers}>get users </button>
      {users.map((user) => (
        <div style={{ color: "white" }} key={user.email}>
          {user.email}
        </div>
      ))}
    </div>
  );
};

export default CharacterCreatorPage;
