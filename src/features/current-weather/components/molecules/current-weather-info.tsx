import {
  City,
  Temperature,
  Description,
} from "@/features/current-weather/components/atoms";
import type { ICurrentWeather } from "../../lib/data";

interface CurrentWeatherInfoProps {
  weather: ICurrentWeather;
}

export default function CurrentWeatherInfo(props: CurrentWeatherInfoProps) {
  const { weather } = props;
  return (
    <>
      <City>{weather.city}</City>
      <Temperature type="current">{weather.temperature.current}</Temperature>
      <Description>{weather.description}</Description>
      <Temperature type="high">{weather.temperature.high}</Temperature>
      <Temperature type="low">{weather.temperature.low}</Temperature>
    </>
  );
}
