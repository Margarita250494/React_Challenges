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
        try {
            if(!formData.userName ||!formData.fullName ||formData.age === ""){
                throw new Error("Please fill in all the information");
            }
            if (!formData.userName) {
                throw new Error("User Name is required");
            }
            if (!formData.fullName) {
                throw new Error("Full Name is required");
            }
            if (formData.age === "") {
                throw new Error("Age is required");
            }
            setSubmittedData(formData);
            setFormData({ userName: "", fullName: "", age: "" });
    
        } catch (error) {
            alert(error.message);
        }

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
