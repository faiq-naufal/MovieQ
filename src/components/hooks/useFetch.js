import { useState, useEffect } from "react";
import axios from "axios";

export default (endPoint, defaultData) => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const getApiData = async url => {
      try {
        const response = await axios.get(endPoint);
        setData({
          isLoading: false,
          data: response
        });
      } catch (error) {
        console.log(error);
      }
    };

    getApiData(endPoint);
  }, [endPoint]);

  return data;
};
