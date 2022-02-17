/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { DinamicForm } from "../components/workFormik/DinamicForm";

const baseURL = "https://sisboa.net/Json-Formularios/Jaon-Formularios.json";
export const ApiFetch = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        setDataApi(res.data);
        console.log(dataApi);
      })
      .catch((err) => console.log(err));
  };

  if (!dataApi) return null;

  return <></>;
};
*/