import React, { useState } from 'react';

function DoubleRangeSlider() {
  const [slots, setSlots] = useState(24);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [labelMode, setLabelMode] = useState('mid'); // mid, long

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragStart = (e) => {
    const slider = e.target.dataset.slider;
    // You can use the setSliderType function to update the sliderType state.
    // For simplicity, I'm not including it here.
    // setSliderType(slider);
  };

  const onDrag = (e) => {
    // Implement the logic for onDrag here, if needed.
  };

  const onDrop = (e, target: any) => {
    const source = e.target.dataset.slider;
    const slot = Number(e.target.dataset.slot);

    if (isNaN(slot)) return;

    if (source === 'min') {
      if (slot >= end) return;
      setStart(slot);
    } else if (source === 'max') {
      if (slot <= start) return;
      setEnd(slot);
    }
    // sliderType state is not used in this code.

    // You can update the sliderType state to null if needed.
    // setSliderType(null);
  };

  const MinSlider = () => {
    return (
      <div
        data-slider="min"
        onDragStart={onDragStart}
        onTouchStart={onDragStart}
        onDrag={onDrag}
        draggable
        className="slider-thumb slider-thumb-min"
      ></div>
    );
  };

  const MaxSlider = () => {
    return (
      <div
        data-slider="max"
        onDragStart={onDragStart}
        onTouchStart={onDragStart}
        onDrag={onDrag}
        draggable
        className="slider-thumb slider-thumb-max"
      ></div>
    );
  };

  const scale = [];
  const slider = [];
  const currentScale = [];
  let minThumb = null;
  let maxThumb = null;

  for (let i = 0; i <= slots; i++) {
    let label = 0;

    if (i === 0 || i === 12 || i === 24) {
      label = i;
    }

    scale.push(
      <div key={i} className="slot-scale">
        {label}
      </div>,
    );

    let currentLabel = 0;

    if (i === start || i === end) {
      currentLabel = i;
    }

    currentScale.push(
      <div key={i} className="slot-scale">
        {currentLabel}
      </div>,
    );

    if (i === start) {
      minThumb = <MinSlider />;
    } else if (i === end) {
      maxThumb = <MaxSlider />;
    } else {
      minThumb = null;
      maxThumb = null;
    }

    let lineClass = 'line';

    if (i > start && i < end) {
      lineClass += ' line-selected';
    }

    slider.push(
      <div
        data-slot={i}
        onDragOver={onDragOver}
        onTouchMove={onDragOver}
        onTouchEnd={(e) => onDrop(e, i)}
        onDrop={(e) => onDrop(e, i)}
        key={i}
        className="slot"
      >
        <div data-slot={i} className={lineClass} />
        <span className="scale-mark"></span>
        {minThumb}
        {maxThumb}
      </div>,
    );
  }

  return (
    <div>
      <h2>React Slider</h2>

      <div className="example-1">
        <div className="slider-container">
          <div className="slider-scale">{scale}</div>

          <div className="slider">{slider}</div>

          <div className="slider-selected-scale">{currentScale}</div>
        </div>
      </div>
    </div>
  );
}

export default DoubleRangeSlider;
