import { Layout } from "antd";
import React, { useEffect } from "react";
import Homex from "../homex";
interface Props {
  setTagIndex: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ setTagIndex }: Props) => {
  useEffect(() => {
    setTagIndex("home");
  });

  return (
    <Layout.Content
      style={{
        borderRadius: "24px",
        minHeight: "963px",
        backgroundColor: "white",
        padding: "28.5px 24.5px",
      }}
    >
      {/* <Typography.Title style={{ fontSize: "36px", fontWeight: "700" }}>
        Thống kê
      </Typography.Title> */}
      <Homex />
    </Layout.Content>
  );
};

export default Home;
