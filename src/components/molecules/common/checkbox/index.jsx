import Box from "component/atoms/box";
import Text from "component/atoms/text";
import { useEffect, useState } from "react";

const booleanTypeChanger = {
  true: true,
  false: false,
};

const Checkbox = ({
  options,
  value,
  booleanType,
  onChange,
  //
  size,
  fontStyle,
}) => {
  const [current, setCurrent] = useState(value ?? []);

  const handleChangeCheckbox = (e, index) => {
    const valueCopy = [...current];
    const currentValue = e.target.checked ? e.target.value : null;

    valueCopy[index] = booleanType
      ? booleanTypeChanger[currentValue]
      : currentValue;

    onChange(valueCopy);
    setCurrent(valueCopy);
  };

  useEffect(() => {
    setCurrent(value);
  }, [value]);

  return options.map(({ text, value }, index) => {
    const isChecked = current.includes(value);

    return (
      <Box
        as={"label"}
        display={{
          display: "flex",
          align: "center",
        }}
        key={index}
      >
        <input
          onChange={(e) => handleChangeCheckbox(e, index)}
          checked={isChecked}
          type="checkbox"
          hidden
          value={value}
        />

        <Box
          size={{
            width: "12px",
            height: "12px",
            ...size,
          }}
          border={{
            all: "1px",
            style: "solid",
            color: isChecked ? "black01" : "gray02",
          }}
          background={{
            color: isChecked ? "pink02" : "white01",
          }}
        />

        {text && <Text {...fontStyle}>{text}</Text>}
      </Box>
    );
  });
};

export default Checkbox;
