import { Flex, Text } from "vcc-ui";
import Slider from "./Slider/slider";
import { useEffect, useState } from "react";

export interface DataProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export default function Models() {
  const [data, setData] = useState<DataProps[]>([]);
  const [originalData, setOriginalData] = useState<DataProps[]>([]);
  const [dataQuantity, setDataQuantity] = useState<number>(0);
  const [suvQuantity, setSuvQuantity] = useState<number>(0);
  const [estateQuantity, setEstateQuantity] = useState<number>(0);
  const [sedanQuantity, setSedanQuantity] = useState<number>(0);
  const [filterSelected, setFilterSelected] = useState<string>("all");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterVehicules();
  }, [filterSelected]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/cars.json");
      const jsonData: DataProps[] = await response.json();
      const suvQt = jsonData.filter((item) => item.bodyType === "suv").length;
      setSuvQuantity(suvQt);
      const estateQt = jsonData.filter(
        (item) => item.bodyType === "estate"
      ).length;
      setEstateQuantity(estateQt);
      setSuvQuantity(suvQt);
      const sedanQt = jsonData.filter(
        (item) => item.bodyType === "sedan"
      ).length;
      setSedanQuantity(sedanQt);
      setData(jsonData);
      setOriginalData(jsonData);
      setDataQuantity(jsonData.length);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const filterVehicules = () => {
    if (filterSelected === "all") fetchData();
    const vehiculesFiltered = originalData.filter(
      (item) => item.bodyType === filterSelected
    );

    setData(vehiculesFiltered);
  };

  return (
    <Flex
      extend={{
        maxWidth: "1240px",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        overflow: "hidden",
        gap: 40,
      }}
    >
      <Text
        subStyle="emphasis"
        variant="ootah"
        extend={{ textAlign: "center" }}
      >
        Todos os modelos Recharge
      </Text>
      <ul
        style={{
          display: "flex",
          padding: 0,
          listStyle: "none",
          gap: 30,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <li
          onClick={() => setFilterSelected("all")}
          style={{
            borderBottom: `2px solid ${
              filterSelected === "all" ? "#2C619E" : "transparent"
            }`,
            cursor: "pointer",
          }}
        >
          <Text>Todos ({dataQuantity})</Text>
        </li>
        <li
          onClick={() => setFilterSelected("suv")}
          style={{
            borderBottom: `2px solid ${
              filterSelected === "suv" ? "#2C619E" : "transparent"
            }`,
            cursor: "pointer",
          }}
        >
          <Text>SUV ({suvQuantity})</Text>
        </li>
        <li
          onClick={() => setFilterSelected("estate")}
          style={{
            borderBottom: `2px solid ${
              filterSelected === "estate" ? "#2C619E" : "transparent"
            }`,
            cursor: "pointer",
          }}
        >
          <Text> ESTATE ({estateQuantity})</Text>
        </li>
        <li
          onClick={() => setFilterSelected("sedan")}
          style={{
            borderBottom: `2px solid ${
              filterSelected === "sedan" ? "#2C619E" : "transparent"
            }`,
            cursor: "pointer",
          }}
        >
          <Text>SEDAN ({sedanQuantity})</Text>
        </li>
      </ul>
      <Slider data={data} filterSelected={filterSelected} />
    </Flex>
  );
}
