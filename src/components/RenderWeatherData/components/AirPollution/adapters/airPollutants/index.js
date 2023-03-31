export const airPollutanst = (components) => {
  return [
    {
      name: "Monóxido de Carbón",
      micrograms: components.co,
      key: 1,
    },
    {
      name: "Monóxido de Nitrógeno",
      micrograms: components.no,
      key: 2,
    },

    {
      name: "Dióxido  de Nitrógeno",
      micrograms: components.no2,
      key: 3,
    },
    {
      name: "Ozono",
      micrograms: components.o3,
      key: 4,
    },
    {
      name: "Dióxido de sulfuro",
      micrograms: components.so2,
      key: 5,
    },
    {
      name: "Partículas en suspensión",
      micrograms: components.pm2_5,
      key: 6,
    },
    {
      name: "Partículas gruesas",
      micrograms: components.pm10,
      key: 7,
    },
    {
      name: "Amoníaco",
      micrograms: components.nh3,
      key: 8,
    },
  ];
};
