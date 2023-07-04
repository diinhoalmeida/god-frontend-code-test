import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Flex, Icon, Text, View } from "vcc-ui";
import { capitalizeFirstLetters } from "../../../utils/stringConvert";
import { DataProps } from "../models";

interface SliderProps {
  data: DataProps[];
  filterSelected: string;
}

export default function Slider({ data, filterSelected }: SliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [slideStyles, setSlideStyles] = useState<number>();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { perView: 4, spacing: 20 },
    breakpoints: {
      "(max-width: 1235px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(max-width: 795px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 405px)": {
        slides: {
          perView: 1,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider?.details?.relativeSlide);
    },
    created() {
      setLoaded(true);
    },
  });

  const slidesToShow = 4;

  useEffect(() => {
    instanceRef?.current?.moveToIdx(0);
  }, [filterSelected, instanceRef]);

  return (
    <>
      {data.length > 0 && (
        <div ref={sliderRef} className="keen-slider">
          {data.map((item, index) => (
            <div
              key={index}
              className="keen-slider__slide number-slide"
              onMouseEnter={() => setSlideStyles(index)}
              onMouseLeave={() => setSlideStyles(-1)}
            >
              <Flex extend={{ width: "100%" }}>
                <Flex extend={{ marginBottom: 50 }}>
                  <Text
                    extend={{
                      color: slideStyles === index ? "#2A609D" : "black",
                    }}
                  >
                    {item.bodyType.toUpperCase()}
                  </Text>
                  <Text
                    subStyle="emphasis"
                    extend={{
                      color: slideStyles === index ? "#2A609D" : "black",
                    }}
                  >
                    {item.modelName}
                    <Text
                      variant="columbus"
                      extend={{
                        marginLeft: "10px",
                        color: slideStyles === index ? "#2A609D" : "black",
                      }}
                    >
                      {capitalizeFirstLetters(item.modelType)}
                    </Text>
                  </Text>
                </Flex>
                <View
                  extend={{
                    overflow: "hidden",
                  }}
                >
                  <Image
                    className="image_slide"
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    width="400px"
                    height="300px"
                  />
                </View>
                <Flex extend={{ flexDirection: "row", marginTop: 20 }}>
                  <ul
                    style={{
                      display: "flex",
                      padding: 0,
                      margin: 0,
                      width: "100%",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <li
                      style={{ display: "flex", alignItems: "center", gap: 3 }}
                    >
                      <Text
                        extend={{
                          ":hover": { color: "#2C619E", cursor: "pointer" },
                        }}
                      >
                        CONHEÇA
                      </Text>
                      <Icon type="navigation-chevronforward-16" />
                    </li>
                    <li
                      style={{ display: "flex", alignItems: "center", gap: 3 }}
                    >
                      <Text
                        extend={{
                          ":hover": { color: "#2C619E", cursor: "pointer" },
                        }}
                      >
                        COMPRAR
                      </Text>
                      <Icon type="navigation-chevronforward-16" />
                    </li>
                  </ul>
                </Flex>
              </Flex>
            </div>
          ))}
        </div>
      )}
      {loaded && instanceRef && data && (
        <Flex
          extend={{
            position: "relative",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
            height: 80,
          }}
        >
          <div className="dots">
            {Array.from(
              Array(Math.ceil(data.length / slidesToShow)).keys()
            ).map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef?.current?.moveToIdx(idx);
                  }}
                  className={
                    "dot" +
                    (currentSlide >= idx * slidesToShow &&
                    currentSlide < (idx + 1) * slidesToShow
                      ? " active"
                      : "")
                  }
                ></button>
              );
            })}
          </div>
          <div className="arrows_page">
            <Flex
              extend={{
                position: "absolute",
                flexDirection: "row",
                right: 0,
                justifyContent: "flex-end",
                gap: 10,
              }}
            >
              <View
                extend={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef?.current?.prev();
                }}
              >
                <Icon type="mediacircled-previous-40" />
              </View>
              <View
                extend={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef?.current?.next();
                }}
              >
                <Icon type="mediacircled-next-40" />
              </View>
            </Flex>
          </div>
        </Flex>
      )}
    </>
  );
}
