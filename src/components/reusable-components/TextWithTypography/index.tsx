import React from "react";
import { Typography } from "antd";
import "../../user-detail-card/stylesheet.css"

export const TypographyWithIcon = ({
  Icon,
  text,
}: {
  Icon: any;
  text: string;
}) => {
  return (
    <div className="userEmailWrapper">
      <Icon style={{ fill: "rgba(0,0,0,.65)" }} />
      <Typography className="userEmail">{text}</Typography>
    </div>
  );
};
