import { useState } from "react";
import Checkbox from "..";

const AllCheckBox = () => {
  const options = [
    {
      text: "a",
      value: "a",
    },
    {
      text: "b",
      value: "b",
    },
    {
      text: "c",
      value: "c",
    },
  ];

  const [value, setValue] = useState([]);

  const handleChangeCheckbox = (value) => {
    setValue(value);
  };

  console.log("all checkbox Value : ", value);

  return (
    <>
      <Checkbox
        options={options}
        value={value}
        onChange={handleChangeCheckbox}
      />
    </>
  );
};

const MultipleCheckBox = () => {
  const options = [
    {
      text: "a",
      value: "a",
    },
    {
      text: "b",
      value: "b",
    },
    {
      text: "c",
      value: "c",
    },
  ];

  const [value, setValue] = useState([[], [], []]);

  const handleChangeCheckbox = (idx) => (value) => {
    setValue((prev) =>
      prev.map((data, index) => (idx === index ? value : data))
    );
  };

  console.log("multiple checkbox1 Value : ", value[0]);
  console.log("multiple checkbox2 Value : ", value[1]);
  console.log("multiple checkbox3 Value : ", value[2]);

  return (
    <>
      {options.map((option, idx) => (
        <Checkbox
          options={[option]}
          value={value[idx]}
          onChange={handleChangeCheckbox(idx)}
        />
      ))}
    </>
  );
};

const SingleCheckBox = () => {
  const [value, setValue] = useState([false]);

  const handleChangeCheckbox = (value) => {
    setValue(value);
  };

  console.log("single checkbox Value : ", value);

  return (
    <>
      <Checkbox
        options={[
          {
            text: "a true",
            value: true,
          },
        ]}
        value={value}
        onChange={handleChangeCheckbox}
        booleanType
      />
      <Checkbox
        options={[
          {
            text: "a false",
            value: false,
          },
        ]}
        value={value}
        onChange={handleChangeCheckbox}
        booleanType
      />
    </>
  );
};

const State = () => {
  return (
    <div>
      <h3>State</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>all checkbox</h2>
          <AllCheckBox />
        </div>

        <div
          style={{
            margin: "0 20px",
          }}
        >
          <h2>multiple checkbox</h2>
          <MultipleCheckBox />
        </div>

        <div>
          <h2>single checkbox</h2>
          <SingleCheckBox />
        </div>
      </div>
    </div>
  );
};

export default State;
