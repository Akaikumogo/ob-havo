/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isLogined, setIsLogined] = useState(false);
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const wather = await response.json();
      setData(wather);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const signup = () => {
    setIsLogined(true);
    const navigate = useNavigate();
    navigate("/");
  };
  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        isLogined,
        setLoading,
        setIsLogined,
        signup,
        fetchData,
      }}
    ></AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
