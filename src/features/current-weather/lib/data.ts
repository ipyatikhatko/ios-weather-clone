export interface ICurrentWeather {
  city: string;
  temperature: {
    high: number;
    low: number;
    current: number;
  };
  description: string;
}

export const fetchCurrentWeather = async () => {
  // simulate deelay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data: ICurrentWeather = {
    city: "Kyiv",
    temperature: {
      high: 21,
      low: 13,
      current: 20,
    },
    description: "cloudy",
  };

  return data;
};
