import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const juliaData1 = [4, 5, 2, 12, 7];
const katData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const katData2 = [10, 5, 6, 1, 4];
export const JavscriptBasics = () => {
  const [humenAge, sethumenAge] = useState([]);
  // const euro =  [200, 500, -200, 50, -900]
  // const [allData, setallData] = useState([]);
  // const dogHandler = (julia, kat) => {
  //   const slicejuliaData = julia.slice(1, julia.length - 1);
  //   const slicekatData = kat.slice(1, kat.length - 1);
  //   // console.log(slicejuliaData, slicekatData);
  //   const concatData = slicejuliaData.concat(slicekatData);
  //   console.log(concatData >= 3);
  //   concatData.map((cur, i) => {
  //     if (cur >= 3) {
  //       return setallData(`the DOG IS  ${i+1} to up dog is${cur}`);
  //     } else {
  //       console.log(`THE CAT ID ${i+1} to up dog is${cur} `);
  //     }
  //   });
  //   // setallData(concatData);
  // };

  // useEffect(() => {
  //   dogHandler(juliaData1, katData1);
  //   dogHandler(juliaData2, katData2);
  //   // dogHandler(juliaData2, katData2);
  // }, [allData.length]);

  // ---------------------------------------------
  const dogAge = [2, 5, 7, 4, 8, 9, 1, 1.5];

  // const dogAgeFunc = (dogAge) =>
  // {
  //   // sethumenAge(dogAge.map((cur) => (cur <= 2 ? cur * 2 : cur * 4)))
  //  return  sethumenAge( dogAge.filter((cur) => (cur >= 8  )))
  //   // sethumenAge(humanAge);
  //   // sethumenAge(dogAgeFunc);
  // };

  // useEffect(() => {

  //   dogAgeFunc(dogAge)
  // }, [])
  // ---------------------------------START CHANNING--------------
  // const channingFunc = (data) => {
  //   const channingData = data
  //     .filter((ch) => ch >= 2)
  //     .map((cur) => cur * 2)
  //     .reduce((acc, cur) => acc + cur);
  //   console.log(channingData);
  // };

  // channingFunc(dogAge);
  // --------------------------------------END CHANNING---------

  // let firstName = 'abhinav';
  const abhi = {
    firstName: "firstName",
    greed: () => console.log(abhi.firstName)
  }

  abhi.greed()

  return (
    <div>
      ------------------------------------JavscriptBasics------------------------------------
      {/* { console.log( allData)} */}
      {/* {humenAge.join("-") } */}
      {
        // euro.map(cur => cur * 1.07)
        // juliaData1.reduce((acc, cur) =>acc+cur )
      }
    </div>
  );
};
