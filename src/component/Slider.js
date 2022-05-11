// import Slider from '@mui/material';
import Slider from "@mui/material/Slider";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export const DemoSlider = () => {
  const [value1, setValue1] = useState(["83", "100"]);
  const [value2, setValue2] = useState(["71", "85"]);
  const [value3, setValue3] = useState(["56", "70"]);
  const [value4, setValue4] = useState(["41", "55"]);
  const [value5, setValue5] = useState(["25", "40"]);
  const [dynamicValue, setDynamicValue] = useState(["70", "90"]);
  const [slider, setslider] = useState([]);

  const handleChange1 = (e, value, setValue1, activeThumb = 0) => {
    if (!Array.isArray(value)) {
      return;
    }

    // if (value[1] - value1[0] < minDistance) {
    //   if (activeThumb === 0) {
    //     const clamped = Math.min(value1[0], 100 - minDistance);
    //     console.log("clam1", clamped);
    //     setValue1([clamped, value1[1]]);
    //   } else {
    //     const clamped = Math.max(value[1], minDistance);
    //     console.log("clam2", clamped);
    //     setValue1([clamped - minDistance, clamped]);
    //   }
    // } else {
    setValue1(value);
    // }
  };

  const handleChange2 = (event, newValue, setValue2, activeThumb = 0) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  const handleChange3 = (event, newValue, setValue3, activeThumb = 0) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue3([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue3([clamped - minDistance, clamped]);
      }
    } else {
      setValue3(newValue);
    }
  };
  const handleChange4 = (event, newValue, setValue4, activeThumb = 0) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue4([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue4([clamped - minDistance, clamped]);
      }
    } else {
      setValue4(newValue);
    }
  };
  const handleChange5 = (event, newValue, setValue5, activeThumb = 0) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue5([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue5([clamped - minDistance, clamped]);
      }
    } else {
      setValue5(newValue);
      console.log(value5);
    }
  };
  const dynamicSliderChange = (
    event,
    newValue,
    setDynamicValue,
    activeThumb = 0
  ) => {
    console.log(newValue);
    // if (!Array.isArray(newValue)) {
    //   return;
    // }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        return setDynamicValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        return setDynamicValue([clamped - minDistance, clamped]);
      }
    } else {
      return setDynamicValue(newValue);
    }
  };

  console.log("------------dynamicValue", dynamicValue);

  const addSliderHandler = () => {
    setslider(
      slider.concat(
          <Slider
            key={slider.length}
            getAriaLabel={() => "Minimum distance"}
            value={dynamicValue}
            onChange={(e, value) =>
              dynamicSliderChange(e, value, setDynamicValue, 0)
            }
            valueLabelDisplay="auto"
          />
        //   {/* <TextField
        //   key={slider.length}
        //   optionalLabel={false}
        //   onChange={(e) =>
        //     setDynamicValue(parseInt(e.target.value.split(",")))
        //     }
        //     value={dynamicValue}
        //     //   onChange={(e, value) => handleChange1(e, value, setValue1, 0)}
        //     style={{ width: "10%" }}
        //     aria-labelledby="range-slider"
        // /> */}
        // <div style={{ padding: "3rem" }}>
        // </div>
      )
    );
  };

  return (
    <div>
      DemoSlider
      <div>
        <button onClick={addSliderHandler}>Add slider</button>
      </div>
      {slider.map((cur) => cur)}
      <div style={{ padding: "3rem" }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={(e, value) => handleChange1(e, value, setValue1, 0)}
          valueLabelDisplay="auto"
        />
        <TextField
          optionalLabel={false}
          value={value1}
          onChange={(e) => setValue1(e.target.value.split(","))}
          style={{ width: "10%" }}
          aria-labelledby="range-slider"
        />

        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value2}
          onChange={(e, value) => handleChange2(e, value, setValue2, 0)}
          valueLabelDisplay="auto"
        />

        <TextField
          optionalLabel={false}
          value={value2}
          //   onChange={(e, value) => handleChange1(e, value, setValue1, 0)}
          // onChange={(e) => setValue1(e.target.value)}
          onChange={(e) => setValue2(e.target.value.split(","))}
          style={{ width: "10%" }}
          aria-labelledby="range-slider"
        />

        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value3}
          onChange={(e, value) => handleChange3(e, value, setValue3, 0)}
          valueLabelDisplay="auto"
          //   getAriaValueText={valuetext}
          //   disableSwap
        />
        <TextField
          optionalLabel={false}
          value={value3}
          //   onChange={(e, value) => handleChange1(e, value, setValue1, 0)}
          // onChange={(e) => setValue1(e.target.value)}
          onChange={(e) => setValue3(e.target.value.split(","))}
          style={{ width: "10%" }}
          aria-labelledby="range-slider"
        />
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value4}
          onChange={(e, value) => handleChange4(e, value, setValue4, 0)}
          valueLabelDisplay="auto"
          //   getAriaValueText={valuetext}
          //   disableSwap
        />
        <TextField
          optionalLabel={false}
          value={value4}
          //   onChange={(e, value) => handleChange1(e, value, setValue1, 0)}
          // onChange={(e) => setValue1(e.target.value)}
          onChange={(e) => setValue4(e.target.value.split(","))}
          style={{ width: "10%" }}
          aria-labelledby="range-slider"
        />
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={value5}
          onChange={(e, value) => handleChange5(e, value, setValue5, 0)}
          valueLabelDisplay="auto"
          //   getAriaValueText={valuetext}
          //   disableSwap
        />
        <TextField
          optionalLabel={false}
          value={value5}
          //   onChange={(e, value) => handleChange1(e, value, setValue1, 0)}
          // onChange={(e) => setValue1(e.target.value)}
          onChange={(e) => setValue5(e.target.value.split(","))}
          style={{ width: "10%" }}
          aria-labelledby="range-slider"
        />
      </div>
    </div>
  );
};
