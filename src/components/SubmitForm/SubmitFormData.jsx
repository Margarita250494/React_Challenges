import { useState } from "react"
import { FormInput } from "./FormInput";


export const SubmitFormData = () => {
    
  const [submittedData, setSubmittedData] = useState(null);

    const [formData, setFormData] = useState({
      userName: "",
      fullName: "",
      age: ""
    })

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]:value,
      })
    }

    const submit = (event) =>{
        event.preventDefault();
        setSubmittedData(formData);
        setFormData({ userName: "", fullName: "", age: "" });
    }

    const handleAgeChange = (e) => {
      const { value } = e.target;
      if (/^\d*$/.test(value)) {
        setFormData({
          ...formData,
          age: value,
        });
      }
    };

   
  return (
    <section className="challenge ">
      <h2>Submit Form Data</h2>
      <div>
        <form onSubmit={submit}>
            <FormInput
              id="userName"
              label = "User Name:"
              name="userName"
              value={formData.userName}
              onChange={handleChange}/>
            <FormInput
              id="fullName"
              label = "Full Name:"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}/>
            <FormInput
              id="age"
              label = "Age:"
              type="number"
              value={formData.age}
              onChange={handleAgeChange} />    
            <input type="submit" value="Submit"  />
        </form>
        {submittedData && (
            <div >
            <h4>Request Sent to DB with below request data</h4>
            <ul className="request">
                <li>User Name: {submittedData.userName} </li>
                <li>Full Name: {submittedData.fullName} </li>
                <li>Age: {submittedData.age} </li>
            </ul>
        </div>
        )}
      </div>
      
    </section>
  )
}

