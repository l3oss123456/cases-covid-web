import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <div>
      <LoadingOutlined style={{ fontSize: "36px", color: "blue" }} spin />
    </div>
  );
};
export default Loading;
