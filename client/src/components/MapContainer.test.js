import React from "react";
import MapContainer from "./MapContainer";
import { mount } from "enzyme";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GoogleMapReact from "google-map-react";

configure({ adapter: new Adapter() });

const mockDatasmall = [
  {
    id: 1,
    type: "tractor",
    status: "idle",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    location: {
      lat: 32.053199699999996,
      lng: 34.7650957,
    },
  },
  {
    id: 2,
    type: "tractor",
    status: "on-mission",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    location: {
      lat: 32.055199699999996,
      lng: 34.7650957,
    },
  },
  {
    id: 3,
    type: "drone",
    status: "idle",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    location: {
      lat: 32.054199699999996,
      lng: 34.7650957,
    },
  },
];

const lat = 32;
const lng = 32;

describe("<MapContainer />", () => {
  it("accepts lat prop", () => {
    const wrapper = mount(
      <MapContainer lat={lat} lng={lng} data={[]} setData={() => {}} />
    );
    expect(wrapper.props().lat).toEqual(lat);
    expect(wrapper.props().lng).toEqual(lng);
  });
});

describe("<MapContainer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MapContainer
        MapContainer
        lat={lat}
        lng={lng}
        data={[]}
        setData={() => {}}
      />
    );
  });

  it("should render <GoogleMapReact /> when receiving data", () => {
    wrapper.setProps({ data: mockDatasmall });
    expect(wrapper.find(GoogleMapReact)).toHaveLength(1);
  });
});
