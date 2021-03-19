import React, { useState, useEffect } from "react";
import * as R from "ramda";
import axios from "../../cores/axios/index";
import Chart from "./components/Chart/index";
import Loading from "../../components/Loading/index";
import connection_websocket from "../../cores/websocket/index";
import theme from "../../cores/theme/index";
import styles from "./css/home.module.css";

const Home = (props) => {
  const country = [
    "USA",
    "Spain",
    "Italy",
    "Germany",
    "France",
    "UK",
    "Russia",
    "Belgium",
    "Netherlands",
    "Brazil",
  ];
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastdays, setLastdays] = useState(1);
  const [date, setDate] = useState("");

  connection_websocket.onmessage = (e) => {
    const resp = JSON.parse(e.data);
    setDate(resp.date);
    setListData(resp.data);
    // console.log("message from server: ", resp);
  };

  // if (!R.isEmpty(listData)) {
  //   // console.log("listData;", listData);
  //   setInterval(async () => {
  //     let _lastdays = lastdays;
  //     await axios(`GET`, `/?lastdays=${_lastdays}`);
  //     _lastdays = _lastdays + 1;
  //     console.log(_lastdays);
  //     setLastdays(_lastdays);
  //   }, [2000]);
  //   // setIsLoading(false);
  // }

  useEffect(() => {
    initialData();
    // get_covid_usa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!R.isEmpty(listData)) {
      // console.log("listData;", listData);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData]);

  const initialData = async () => {
    // const resp = await axios(`GET`, `/USA?lastdays=1`);
    // console.log("resp;", resp);
    // setListData(resp.data);
    // const _listData = [];
    // let amount_covid19 = 0;
    // let amount_deads = 0;
    // let amount_recovered = 0;
    // for (let key in country) {
    //   const resp = await axios(`GET`, `/${country[key]}?lastdays=30`);
    //   if (resp.status === 200) {
    //     const cases = Object.values(resp.data.timeline.cases);
    //     for (let index in cases) {
    //       amount_covid19 += cases[index];
    //     }
    //     const deaths = Object.values(resp.data.timeline.deaths);
    //     for (let index in deaths) {
    //       amount_deads += cases[index];
    //     }
    //     const recovered = Object.values(resp.data.timeline.recovered);
    //     for (let index in recovered) {
    //       amount_recovered += cases[index];
    //     }
    //     _listData.push({
    //       country: resp.data.country,
    //       cases: amount_covid19,
    //       deaths: amount_deads,
    //       recovered: amount_recovered,
    //     });
    //   }
    //   amount_covid19 = 0;
    // }
    // if (_listData) {
    //   const byCases = R.descend(R.prop("cases"));
    //   const ascendSort = R.sort(byCases, _listData);
    //   setListData(ascendSort);
    // }
  };

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
              color: `${theme.colors.danger}`,
              fontFamily: `${theme.fontFamily.primaryBold}`,
              fontSize: `${theme.fontSize.title}`,
            }}
          >
            Covid Global Cases by SGN (date: {date})
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
