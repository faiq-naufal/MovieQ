import { useState, useEffect } from "react";
import axios from "axios";

export default ( endPoint, defaultData ) => {
  const [ data, setData ] = useState( defaultData );

  useEffect( () => {
    const getApiData = async url => {
      let tryFetch;
      let response;
      do {
        try {
          response = await axios.get( endPoint );
          tryFetch = false;
          setData( {
            isLoading: false,
            data: response
          } );
        } catch ( error ) {
          tryFetch = true;
          console.log( error, "  Keep Trying..." );
        }
      } while ( tryFetch );
    };

    getApiData( endPoint );
  }, [ endPoint ] );

  return data;
};
