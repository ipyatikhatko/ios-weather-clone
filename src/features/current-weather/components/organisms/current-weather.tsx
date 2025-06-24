import "@/features/current-weather/styles.css";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeather } from "../../lib/data";
import {
  WeatherInfo,
  WeatherSkeleton,
} from "@/features/current-weather/components/molecules";

export default function CurrentWeather() {
  const { data, isLoading } = useQuery({
    queryKey: ["current-weather"],
    queryFn: fetchCurrentWeather,
  });

  return (
    <header className="current-weather-grid">
      {isLoading ? (
        <WeatherSkeleton />
      ) : data !== undefined ? (
        <WeatherInfo weather={data} />
      ) : (
        <span>No data</span>
      )}
    </header>
  );
}
