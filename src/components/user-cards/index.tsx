import React, { useEffect, useMemo } from "react";
import { UserService } from "../../services/user.service";
import { UserInputInterface, UserInterface } from "../../types/user.type";
import { Spin } from "antd";
import UserDetailCard from "../user-detail-card";
import "./stylesheet.css";

const UsersCards = () => {
  const [usersData, setUsersData] = React.useState<UserInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const userService = useMemo(() => new UserService(), []);

  const onSubmit = async (userInput: UserInputInterface, id: number) => {
    const response = await userService.updateUser(id, userInput);

    if (response) {
      const updatedUsers = usersData.map((user: any) => {
        if (user.id === id) {
          user.name = userInput.name;
          user.email = userInput.email || user.email;
          user.phone = userInput.phone || user.phone;
          user.website = userInput.website || user.website;
        }
        return user;
      });
      setUsersData(() => updatedUsers);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const users = await userService.getUsers();
      setUsersData(users);
      setLoading(false);
    };
    getUsers();
  }, [userService]);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <Spin size="large" />
        </div>
      ) : (
        <div className="mainContainer-card">
          {usersData.map((user: any) => (
            <UserDetailCard
              user={user}
              key={user.id}
              onSubmit={(userInput: UserInputInterface, id: number) =>
                onSubmit(userInput, id)
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default UsersCards;
