import { useState } from "react";


export const useFormData = () => {
    const [submittedData, setSubmittedData] = useState(null);

    const [formData, setFormData] = useState({
      userName: "",
      fullName: "",
      age: ""
    })

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevState)=>({
        ...prevState,
        [name]:value,
      }))
    }

    const submit = (event) =>{
        event.preventDefault();
        setSubmittedData(formData);
        setFormData({ userName: "", fullName: "", age: "" });
    }

    const handleAgeChange = (e) => {
      const { value } = e.target;
      if (/^\d*$/.test(value)) {
        setFormData((prevState)=>({
          ...prevState,
          age: value,
        }))
      }
    };
    return { submittedData, formData, handleChange, submit, handleAgeChange };
}
