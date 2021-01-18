import React from "react";
import { useGetData } from "./hooks/hooks";
import MapContainer from "./components/MapContainer";
import { css } from "emotion";
import { CircularProgress } from "@material-ui/core";

const DEFAULT_LAT = -21.38917;
const DEFAULT_LNG = -42.69667;
const BWR_ICON_SRC =
  "https://media-exp1.licdn.com/dms/image/C4E0BAQEIqz2N3WEx_A/company-logo_200_200/0/1519898785363?e=1619049600&v=beta&t=xGOP08KI-0arMSR06PU62tgz945jXFpGAsOM-TqZZC8";

const App = () => {
  const [data, setData] = useGetData();

  if (data && data.length > 0) {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <span> Vehicles: O'coffee Brazil</span>
          <img src={BWR_ICON_SRC} alt="icon" className={styles.icon} />
        </div>
        <MapContainer
          data={data}
          lat={DEFAULT_LAT}
          lng={DEFAULT_LNG}
          setData={setData}
        />
      </div>
    );
  } else
    return (
      <div className={styles.loader}>
        <CircularProgress size={50} />
      </div>
    );
};

const styles = {
  root: css({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  }),
  info: css({
    width: "100%",
    display: "flex",
    backgroundColor: "#1d1d1d",
    justifyContent: "center",
  }),
  loader: css({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(50%,50%)",
  }),
  header: css({
    background: "#38548c",
    color: "white",
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    position: "fixed",
    width: "100%",
    zIndex: 1,
  }),
  icon: css({
    width: 50,
    height: 50,
    borderRadius: 24,
    marginRight: 24,
  }),
};

export default App;
