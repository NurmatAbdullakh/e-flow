export const Paths = {
  HOME: "/",
  MAP: "/map",
  CALCULATOR: "/calculator",
  DATA: "/data",
  RIVERS: "/rivers",
  RIVER_DETAILS: "/rivers/:id",
  RIVER_HYDRO_STATIONS: "/rivers/:id/hydro-stations",
  RIVER_HYDRO_DATA_DETAILS: "/rivers/:id/hydro-stations/details",
  RIVER_METEO_STATIONS: "/rivers/:id/meteo-stations",
  RIVER_METEO_DATA_DETAILS: "/rivers/:id/meteo-stations/details",
  ABOUT: "/about",
  NOT_FOUND: "/*",
};

export const PathGenerators = {
  RIVER_DETAILS: (id: string) => Paths.RIVER_DETAILS.replace(":id", id),
  RIVER_HYDRO_STATIONS: (id: string) =>
    Paths.RIVER_HYDRO_STATIONS.replace(":id", id),
  RIVER_HYDRO_DATA_DETAILS: (id: string) =>
    Paths.RIVER_HYDRO_DATA_DETAILS.replace(":id", id),
  RIVER_METEO_STATIONS: (id: string) =>
    Paths.RIVER_METEO_STATIONS.replace(":id", id),
  RIVER_METEO_DATA_DETAILS: (id: string) =>
    Paths.RIVER_METEO_DATA_DETAILS.replace(":id", id),
};
