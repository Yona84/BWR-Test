const express = require("express");
const bodyParser = require("body-parser");

const DEFAULT_LAT = -21.38917;
const DEFAULT_LNG = -42.696676;

const newArray = [...new Array(100)];
const listOfVehicles = ["tractor", "drone"];
const listOfStatus = ["unreachable", "idle", "on-mission"];

newArray.forEach((item, key) => {
  let vehicle = {
    id: "",
    type: "",
    createdAt: "",
    updatedAt: "",
    status: "",
    location: {},
  };
  vehicle.id = key;
  vehicle.createdAt = Date.now();
  vehicle.updatedAt = Date.now();
  vehicle.type =
    listOfVehicles[Math.floor(Math.random() * listOfVehicles.length)];
  vehicle.status =
    listOfStatus[Math.floor(Math.random() * listOfStatus.length)];
  vehicle.location.lat = DEFAULT_LAT + Math.random() * 0.01;
  vehicle.location.lng = DEFAULT_LNG + Math.random() * 0.01;

  newArray[key] = vehicle;
});

const app = express();
const port = 5000;

app.use(bodyParser.json());

// api calls for 100 vehicles

app.get("/api/vehicles", (req, res) => {
  res.send({ vehicles: newArray });
});

app.get("/api/vehicles/updateLocation", (req, res) => {
  const updatedData = [...newArray].map((vehicle) => {
    return {
      ...vehicle,
      location: {
        lat: vehicle.location.lat + Math.random() * 0.0005,
        lng: vehicle.location.lng + Math.random() * 0.0005,
      },
    };
  });
  res.send({ vehicles: updatedData });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
