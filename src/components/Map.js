import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import classes from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import { Array2 } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
let colorThis = "red";
let byNumber = 800000;
let obj;
const Map = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCircles, setShowCircles] = useState(Array2[0]);
  const defaultPosition = [38.7287535, 35.4817568, 13.87];
  const dropDownFunc = () => {
    setShowDropDown((prev) => {
      return !prev;
    });
  };

  const showCirclesFuncR = (e) => {
    e.preventDefault();
    colorThis = "red";
    obj = {
      value: "reported",
      color: colorThis,
    };
    props.onChange(obj);
    byNumber = 800000;
    setShowCircles(Array2[0]);
  };
  const showCirclesFuncG = (e) => {
    e.preventDefault();
    colorThis = "rgb(0, 211, 0)";
    obj = {
      value: "recovered",
      color: colorThis,
    };
    props.onChange(obj);
    byNumber = 800000;
    setShowCircles(Array2[1]);
  };
  const showCirclesFuncD = (e) => {
    e.preventDefault();
    colorThis = "rgb(179, 179, 179)";
    obj = {
      value: "deaths",
      color: colorThis,
    };
    props.onChange(obj);
    byNumber = 15000;
    setShowCircles(Array2[2]);
  };

  let circlesArray = showCircles;
  return (
    <div className={classes["map__container"]}>
      <MapContainer
        center={defaultPosition}
        style={{ width: "100%", height: "100%" }}
        className={classes["map__container"]}
        zoom={1.5}
        zoomControl={false}
        scrollWheelZoom={false}
        worldCopyJump={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {circlesArray.map((element) => (
          <CircleMarker
            center={{ lat: element.lat, lng: element.lng }}
            fillOpacity={0.5}
            //  fillColor: colorThis
            // color:colorThis
            //border: colorThis

            pathOptions={{
              color: colorThis,
              fillColor: colorThis,
              border: colorThis,
            }} // we used pathoptions instead of above commented out methods because it was not working using those methods
            radius={+element.cases.split(",").join("") / byNumber}
            key={element.id}
          >
            <Popup>
              Country : {element.country}
              <br />
              Rank : {element.id} <br /> Cases: {element.cases}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      <button
        className={classes.btn}
        onClick={dropDownFunc}
        style={{ color: colorThis }}
      >
        <FontAwesomeIcon icon={faChevronCircleDown} />
      </button>

      <div
        className={`${classes.dropBox} ${classes[showDropDown ? "show" : ""]}`}
      >
        <a href={"/"} onClick={showCirclesFuncR}>
          Total Cases
        </a>
        <a href={"/"} onClick={showCirclesFuncG}>
          Total Recovered
        </a>
        <a href={"/"} onClick={showCirclesFuncD}>
          Total Deaths
        </a>
      </div>
    </div>
  );
};

export default Map;
