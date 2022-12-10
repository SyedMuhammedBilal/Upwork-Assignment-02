import { Typography, Input } from "antd";
import React from "react";
import "./stylesheet.css";

const TextFields = ({
  label,
  value,
  name,
  type,
  onChange,
  placeholder,
  defaultValue,
}: {
  label: string;
  value?: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  defaultValue: string;
}) => {
  console.log("value", defaultValue);
  return (
    <div className="inputWrapper">
      <Typography className="bodyTypo"><span style={{ color: "red" }}>*</span> {label}:</Typography>
      <Input
        id="outlined-basic"
        className="input"
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required
        value={value}
        status={
          value === "" || value === undefined || value === null ? "error" : ""
        }
      />
    </div>
  );
};

export default TextFields;
