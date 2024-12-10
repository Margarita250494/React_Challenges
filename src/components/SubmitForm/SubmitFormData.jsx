
import { FormInput } from "./FormInput";
import { useFormData } from "./useFormData";


export const SubmitFormData = () => {
  
  const {submittedData, formData, handleChange, submit, handleAgeChange} = useFormData()
 
  return (
    <section className="challenge ">
      <h2>Submit Form Data</h2>
      <div className="submitSection">
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
              name="age"
              type="number"
              value={formData.age}
              onChange={handleAgeChange} />    
            <input className="submitButton" type="submit" value="Submit"  />
        </form>
        {submittedData && (
            <div>
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

