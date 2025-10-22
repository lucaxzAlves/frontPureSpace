import { createContext, useContext, useState, useEffect } from 'react';

const PlacesContext = createContext();

export function PlacesProvider({ children }) {
  const [places, setPlaces] = useState([]);

  async function fetchPlaces() {
    const response = await fetch('https://back-pure-space-g4cnbh202-lucas-projects-27aead0d.vercel.app/api/places');
    const data = await response.json();
    setPlaces(data);
  }

  useEffect(() => {
    fetchPlaces(); // Carrega na primeira vez
  }, []);

  return (
    <PlacesContext.Provider value={{ places, fetchPlaces }}>
      {children}
    </PlacesContext.Provider>
  );
}

export function usePlacesList() {
  return useContext(PlacesContext).places;
}

export function useUpdatePlaces() {
  return useContext(PlacesContext).fetchPlaces;
}
