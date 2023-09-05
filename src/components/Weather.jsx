import { useEffect } from "react";
import { useGlobalContext } from "../context";

export default function Weather() {
  const { fetchData } = useGlobalContext();

  useEffect(() => {
    fetchData(
      "https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=f441cb7b77702bb2d9648180922cae59"
    );
  }, []);

  return <div>Ob-havo ma'lumotlari</div>;
}
