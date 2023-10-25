import { useController, useForm } from "react-hook-form";
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

  const { control, watch, reset } = useForm({
    defaultValues: {
      checkbox: [],
    },
  });

  const { field } = useController({
    control,
    name: "checkbox",
  });

  const handleChangeCheckbox = (value) => {
    field.onChange(value);
  };

  console.log("all checkbox Value : ", watch("checkbox"));

  return (
    <>
      <Checkbox
        options={options}
        value={watch("checkbox")}
        onChange={handleChangeCheckbox}
      />
      <button onClick={() => reset()}>test</button>
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

  const { control, watch, reset } = useForm({
    defaultValues: {
      checkbox1: [],
      checkbox2: [],
      checkbox3: [],
    },
  });

  const { field: filed1 } = useController({
    control,
    name: "checkbox1",
  });
  const { field: filed2 } = useController({
    control,
    name: "checkbox2",
  });
  const { field: filed3 } = useController({
    control,
    name: "checkbox3",
  });

  const field = [filed1, filed2, filed3];

  const handleChangeCheckbox = (idx) => (value) => {
    field[idx].onChange(value);
  };

  console.log("Multiple checkbox1 Value : ", watch("checkbox1"));
  console.log("Multiple checkbox2 Value : ", watch("checkbox2"));
  console.log("Multiple checkbox3 Value : ", watch("checkbox3"));

  return (
    <>
      {options.map((option, idx) => (
        <Checkbox
          options={[option]}
          value={watch(`checkbox${idx + 1}`)}
          onChange={handleChangeCheckbox(idx)}
        />
      ))}
      <button onClick={() => reset()}>test</button>
    </>
  );
};

const SingleCheckBox = () => {
  const { control, watch, reset } = useForm({
    defaultValues: {
      checkbox: [],
    },
  });

  const { field } = useController({
    control,
    name: "checkbox",
  });

  const handleChangeCheckbox = (value) => {
    field.onChange(value);
  };

  console.log("Single checkbox Value : ", watch("checkbox"));

  return (
    <>
      <Checkbox
        options={[
          {
            text: "a true",
            value: true,
          },
        ]}
        value={watch("checkbox")}
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
        value={watch("checkbox")}
        onChange={handleChangeCheckbox}
        booleanType
      />
      <button onClick={() => reset()}>test</button>
    </>
  );
};

const ReactHook = () => {
  return (
    <div>
      <h1>ReactHook</h1>

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

export default ReactHook;
