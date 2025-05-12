import { useEffect, useState } from "react";
import { getpatient } from "../services/ApiService";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    let mount = true;
    getpatient().then((res) => {
      console.log("Response from api", res);
      setPatients(res);
      return () => (mount = false);
    });
  }, []);

  return <div>PatientList</div>;
};

export default PatientList;
