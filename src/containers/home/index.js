import React, { useState, useEffect } from "react";
import * as R from "ramda";
// import axios from "../../cores/axios/index";
import Chart from "./components/Chart/index";
import Loading from "../../components/Loading/index";
import connection_websocket from "../../cores/websocket/index";
import theme from "../../cores/theme/index";
import styles from "./css/home.module.css";

const Home = (props) => {
  // const country = [
  //   "USA",
  //   "Spain",
  //   "Italy",
  //   "Germany",
  //   "France",
  //   "UK",
  //   "Russia",
  //   "Belgium",
  //   "Netherlands",
  //   "Brazil",
  // ];
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [lastdays, setLastdays] = useState(1);
  const [date, setDate] = useState("");

  connection_websocket.onmessage = (e) => {
    const resp = JSON.parse(e.data);
    setDate(resp.date);
    setListData(resp.data);
    // console.log("message from server: ", resp);
  };

  useEffect(() => {
    // initialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!R.isEmpty(listData)) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData]);

  return (
    <div
      className={styles.Container}
      style={{
        fontFamily: `${theme.fontFamily.primary}`,
        fontSize: `${theme.fontSize.text}`,
      }}
    >
      {isLoading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <p
            style={{
              // color: `${theme.colors.danger}`,
              fontFamily: `${theme.fontFamily.primaryBold}`,
              fontSize: `${theme.fontSize.title}`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Covid Global Cases by SGN
          </p>
          <p
            style={{
              fontFamily: `${theme.fontFamily.primary}`,
              fontSize: `${theme.fontSize.text}`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            date: {date}
          </p>
          <div
            style={{
              width: "80vw",
              height: "80vh",
            }}
          >
            <Chart chartData={listData} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
