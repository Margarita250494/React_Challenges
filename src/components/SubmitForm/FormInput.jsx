import PropTypes from 'prop-types';


export const FormInput = ({ id, label, type = "text", name, value, onChange }) => {
  return (
    <div className='formDiv'>
      <label htmlFor={id}>{label}</label> <br />
      <input
        id = {id}
        type = {type}
        name = {name}
        value = {value}
        onChange = {onChange}
      /><br />
    </div>
  );
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired, 
    label: PropTypes.string.isRequired, 
    type: PropTypes.string,
    name: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired, 
  };