import React, { useMemo } from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import drone from "../icons/drone.svg";
import tractor from "../icons/tractor.svg";

const propTypes = {
  cluster: PropTypes.object,
  id: PropTypes.string,
  setIdOfToolTip: PropTypes.func,
};

const getBackgroundColor = (status) => {
  if (status === "on-mission") {
    return "green";
  } else if (status === "unreachable") {
    return "red";
  } else if (status === "idle") {
    return "orange";
  } else return "red";
};

const VehicleComponent = ({
  cluster: { id, type, status, geometry },
  setIdOfToolTip,
  idOfToolTip,
}) => {
  const isTractorImg = useMemo(() => type === "tractor", [type]);

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIdOfToolTip(id)}
      onMouseLeave={() => setIdOfToolTip(null)}
    >
      <div className={styles.status({ status })} />
      {idOfToolTip === id && (
        <div className={styles.toolTip}>
          <span className={styles.text}>ID: {id}</span>
          <span className={styles.text}>Type: {type}</span>
          <span className={styles.text}>Status {status}</span>
          <span>
            <span className={styles.text} style={{ display: "block" }}>
              Location: lat:{geometry.coordinates[0]}
            </span>
            <span style={{ display: "block" }} className={styles.text}>
              long:
              {geometry.coordinates[1]}
            </span>
          </span>
        </div>
      )}
      <img
        src={isTractorImg ? tractor : drone}
        alt="car"
        width={30}
        height={30}
      />
    </div>
  );
};

const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  }),
  toolTip: css({
    position: "absolute",
    top: -145,
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: 8,
    zIndex: 1,
    background: "blue",
    color: "white",
    padding: 12,
    display: "flex",
    flexDirection: "column",
    "&:before": {
      content: '""',
      display: "block",
      width: 0,
      height: 0,
      position: "absolute",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
      borderRight: "10px solid blue",
      left: "50%",
      bottom: -10,
      transform: "rotate(-90deg) translateX(-50%)",
    },
  }),
  status: ({ status }) =>
    css({
      background: getBackgroundColor(status),
      height: 12,
      width: 12,
      borderRadius: "50%",
    }),
  text: css({
    whiteSpace: "nowrap",
    margin: "3px 0",
    fontSize: 14,
  }),
};

VehicleComponent.propTypes = propTypes;

export default VehicleComponent;
