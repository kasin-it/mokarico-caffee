import React, { useState } from 'react';

function DoubleRangeSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxValue(value);
  };

  return (
    <div class="flex w-64 m-auto items-center h-32 justify-center">
      <div class="py-1 relative min-w-full">
        <div class="h-2 bg-gray-200 rounded-full">
          <div
            class="absolute h-2 rounded-full bg-teal-600 w-0"
            style="width: 24.1935%; left: 11.2903%;"
          ></div>
          <div
            class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
            unselectable="on"
            onselectstart="return false;"
            style="left: 11.2903%;"
          >
            <div class="relative -mt-2 w-1">
              <div
                class="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                style="margin-left: -25px;"
              >
                <div class="relative shadow-md">
                  <div class="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                    $ 15
                  </div>
                  <svg
                    class="absolute text-black w-full h-2 left-0 top-100"
                    x="0px"
                    y="0px"
                    viewBox="0 0 255 255"
                    xml:space="preserve"
                  >
                    <polygon
                      class="fill-current"
                      points="0,0 127.5,127.5 255,0"
                    ></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
            unselectable="on"
            onselectstart="return false;"
            style="left: 35.4839%;"
          >
            <div class="relative -mt-2 w-1">
              <div
                class="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                style="margin-left: -25px;"
              >
                <div class="relative shadow-md">
                  <div class="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                    $ 30
                  </div>
                  <svg
                    class="absolute text-black w-full h-2 left-0 top-100"
                    x="0px"
                    y="0px"
                    viewBox="0 0 255 255"
                    xml:space="preserve"
                  >
                    <polygon
                      class="fill-current"
                      points="0,0 127.5,127.5 255,0"
                    ></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
            $ 8
          </div>
          <div class="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
            $ 70
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoubleRangeSlider;
