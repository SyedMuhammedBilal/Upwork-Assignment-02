import React from "react";
import { Card, Modal } from "antd";

import { createAvatar } from "../../utils/avatar";
import { TextFields, TypographyWithIcon } from "../reusable-components";
import "./stylesheet.css";

import { UserInputInterface, UserInterface } from "../../types/user.type";
import {
  DeleteFilled,
  EditOutlined,
  GlobalOutlined,
  HeartFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const UserDetailCard = ({
  user,
  onSubmit,
}: {
  user: UserInterface;
  onSubmit: (userInput: UserInputInterface, id: number) => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [userInput, setUserInput] = React.useState<UserInputInterface>({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const { username, email, phone, website, name, id } = user;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onSubmit(userInput, id);
  };

  const handleHeartClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <div className="userAvatarWrapper">
            <img
              alt="avatar"
              className="userImage"
              src={createAvatar(username)}
            />
          </div>
        }
        actions={[
          !isClicked ? (
            <HeartOutlined
              onClick={handleHeartClick}
              key="heart"
              style={{ color: "red" }}
            />
          ) : (
            <HeartFilled
              onClick={handleHeartClick}
              style={{ color: "red" }}
              key="heart"
            />
          ),
          <EditOutlined onClick={handleOpen} key="edit" />,
          <DeleteFilled key="delete" />,
        ]}
      >
        <Meta
          title={name}
          description={<TypographyWithIcon Icon={MailOutlined} text={email} />}
        />
        <Meta
          description={<TypographyWithIcon Icon={PhoneOutlined} text={phone} />}
        />

        <Meta
          description={
            <TypographyWithIcon Icon={GlobalOutlined} text={website} />
          }
        />
      </Card>
      <Modal
        title="Basic Modal"
        className="modal"
        open={open}
        onCancel={handleClose}
        onOk={handleClose}
      >
        <div className="modalContainer">
          <div className="body">
            <TextFields
              label="Name"
              value={
                userInput.name ? userInput.name : name
              }
              name="name"
              type="text"
              onChange={onChange}
              placeholder="Enter your name"
              defaultValue={name}
            />
            <TextFields
              label="Email"
              value={
                userInput.email ? userInput.email : email
              }
              name="email"
              type="email"
              onChange={onChange}
              placeholder="Enter your email"
              defaultValue={email}
            />
            <TextFields
              label="Phone"
              value={
                userInput.phone ? userInput.phone : phone
              }
              name="phone"
              type="text"
              onChange={onChange}
              placeholder="Enter your phone"
              defaultValue={phone}
            />
            <TextFields
              label="Website"
              value={
                userInput.website ? userInput.website : website
              }
              name="website"
              type="text"
              onChange={onChange}
              placeholder="Enter your website"
              defaultValue={website}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserDetailCard;
