import Box from "components/atoms/box";
import data from "./data.json";
import Button from "components/atoms/button";
import { useState } from "react";
import Text from "components/atoms/text";
import Image from "components/atoms/image";

const blank = {
  value: 0,
  select: null,
};

const Home = () => {
  const [current, setCurrent] = useState();
  const [selectAnswer, setSelectAnswer] = useState();

  const key = Object.keys(data);
  const currentData = data[current] ?? [];

  const handleSelectData = (select) => {
    const currentData = data[select];

    setCurrent(select);
    setSelectAnswer(new Array(currentData.length).fill({ ...blank }));
  };

  const handleSelect = (idx, value, index) => {
    const newSelect = [...selectAnswer];
    newSelect[idx] = { value, select: index };

    setSelectAnswer(newSelect);
  };

  return (
    <Box
      size={{
        width: "100%",
        maxWidth: "1280px",
      }}
      margin={{
        all: "0 auto",
      }}
      padding={{
        all: "0 5px",
      }}
      longMobile={{
        size: {
          width: "100%",
        },
        padding: {
          all: "0 5px",
        },
      }}
    >
      {key.map((value) => (
        <Button
          border={{
            all: "1px",
          }}
          typo={{
            size: "18px",
            weight: "600",
            color: value === current ? "white" : "black",
          }}
          background={{
            color: value === current ? "black" : "white",
          }}
          padding={{
            all: "5px 20px",
          }}
          onClick={() => handleSelectData(value)}
        >
          {value}
        </Button>
      ))}

      <Box
        display={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
        size={{
          width: "100%",
        }}
      >
        {currentData.map(({ question, select, info }, idx) => (
          <Box
            size={{
              width: "100%",
            }}
            margin={{
              bottom: "20px",
            }}
          >
            <Box
              margin={{
                bottom: "5px",
              }}
            >
              <Text
                typo={{
                  size: "18px",
                  weight: "700",
                  align: "left",
                }}
              >
                {question.text}
              </Text>
              {question.img && (
                <Image
                  src={question.img}
                  size={{
                    width: "100%",
                  }}
                />
              )}
              {question.info && (
                <Box
                  background={{
                    color: "#f1f2f6",
                  }}
                  padding={{
                    all: "10px",
                  }}
                >
                  <Text
                    typo={{
                      size: "16px",
                      weight: "400",
                      align: "left",
                    }}
                  >
                    {question.info}
                  </Text>
                </Box>
              )}
            </Box>

            <Box
              display={{
                display: "flex",
                direction: "column",
                align: "flex-start",
              }}
            >
              {select.map(({ type, value, answer }, index) => (
                <Button onClick={() => handleSelect(idx, answer, index)}>
                  <Text
                    typo={{
                      size: "16px",
                      weight: "400",
                      align: "left",
                      color:
                        selectAnswer[idx].value !== 0
                          ? selectAnswer[idx].value
                            ? answer
                              ? "green"
                              : "black"
                            : answer
                            ? "green"
                            : selectAnswer[idx].select === index
                            ? "red"
                            : "black"
                          : "black",
                    }}
                    margin={{
                      bottom: "5px",
                    }}
                  >
                    {index + 1} {value}
                  </Text>
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
