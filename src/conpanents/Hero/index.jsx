import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  let [status, setStatus] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { world } = useSelector((s) => s);

  const weather = async () => {
    setStatus(false);
    if (inputValue.length) {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
      );
      dispatch({ type: "ADD_WORLD", payload: data });
    } else {
      setInputValue("Bishkek");
    }
  };
  console.log(world);
  useEffect(() => {
    weather();
  }, []);
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => toString(setInputValue(e.target.value))}
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
            />
            <button
              onClick={weather}
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>

        {Object.keys(world).length ? (
          <div className="container">
            <div className="con">
              <div className="content">
                <h1>
                  {world.name}:{world.sys?.country}
                </h1>
                <h1 style={{display: !status ? "block" : "none"}}>Температура:{world?.main?.temp}</h1>
                <h1>Скоройсть ветра:{world?.wind?.speed}~</h1>
                <div className="img">
                  <img src={`http://openweathermap.org/img/w/${world.weather[0].icon}.png`} alt="img"  width={200}/>
                </div>
                </div>
            </div>
          </div>
        ) : (
          <h1>Not Cart</h1>
        )}
      </div>
    </div>
  );
};

export default Hero;
