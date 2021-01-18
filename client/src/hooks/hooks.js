import React from "react";

export const useGetData = () => {
  const [data, setData] = React.useState([]);

  const getVehicles = async () => {
    const rawResponse = await fetch("/api/vehicles/", {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await rawResponse.json();
    setData(response.vehicles);
  };
  React.useEffect(() => {
    getVehicles();
  }, []);

  return [data, setData];
};

export const useGetUpdatedData = () => {
  const [data, setData] = React.useState([]);

  const updateVehicles = async () => {
    const rawResponse = await fetch("/api/vehicles/updateLocation", {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await rawResponse.json();
    setData(response.vehicles);
  };
  React.useEffect(() => {
    setTimeout(() => setInterval(() => updateVehicles(), 5000), 3000);
  }, []);

  return data;
};
