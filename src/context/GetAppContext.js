import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import Cookies from "js-cookie";
import api from "../apis";
import { message } from "antd";

const StoreInfoContext = createContext();

export function AppInfoProvider({ children }) {
  const token = Cookies.get("token");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchStoreInfo = useCallback(async () => {
    try {
      const response = await api.getStoreInfo(token);
      if (response) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("error", error);
      // message.error(error?.response?.data?.message);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchStoreInfo();
    }
  }, [fetchStoreInfo, token]);

  return (
    <StoreInfoContext.Provider value={{ data, loading }}>
      {children}
    </StoreInfoContext.Provider>
  );
}

export function useStoreInfoContext() {
  return useContext(StoreInfoContext);
}
