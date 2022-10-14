const API_KEY = "4d57f3b1745ef0e0a7517344ad92fa23";

export const getWaetherByCoords = async (LAT: number, LON: number): Promise<any> => {
    
    const API_COORDS =`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

    const response = await fetch(API_COORDS);
    const data = await response.json();
    return data;

};

export const getWeatherBySearch = async (CITY: string): Promise<any> =>{
    const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid={API_KEY}`;
    
    const response = await fetch(API_CITY);
    const respData = await response.json();

    return respData;
}