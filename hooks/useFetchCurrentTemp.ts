import { useEffect, useState } from 'react';
import { celsiusToFahrenheit } from '../utils';

const OPEN_METEO_FORECAST_API = 'https://api.open-meteo.com/v1/forecast';

export interface CurrentTemp {
  precipitationChance: number;
  currentCelsius: number;
  currentFahrenheit: number;
  time: string;
}

/**
 * Get the current temp! Defaults to SLC.
 */
export const useFetchCurrentTemp = (
  latitude = 40.7608,
  longitude = -111.8911,
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
) => {
  const [fetching, setFetching] = useState(true);
  const [currentTemp, setCurrentTemp] = useState<CurrentTemp>({
    precipitationChance: 0,
    currentCelsius: 0,
    currentFahrenheit: 0,
    time: '',
  });

  const params = [
    `latitude=${latitude}`,
    `longitude=${longitude}`,
    `timezone=${timezone}`,
    'current=temperature_2m',
    'daily=precipitation_probability_max',
    'forecast_days=1',
  ].join('&');

  const url = encodeURI(`${OPEN_METEO_FORECAST_API}?${params}`);

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        setFetching(true);

        const response = await fetch(url);
        const { current, daily } = await response.json();

        const { time, temperature_2m } = current;
        const { precipitation_probability_max } = daily;

        setCurrentTemp({
          currentCelsius: temperature_2m,
          currentFahrenheit: celsiusToFahrenheit(temperature_2m),
          precipitationChance: precipitation_probability_max[0] ?? 0,
          time,
        });
      } catch (error) {
        console.error('oh gee, failed to fetch temp', error);
      } finally {
        setFetching(false);
      }
    };

    fetchTemp();
  }, [url]);

  return { fetching, currentTemp };
};
