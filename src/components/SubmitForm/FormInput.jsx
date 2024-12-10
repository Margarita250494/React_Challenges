import PropTypes from 'prop-types';


export const FormInput = ({ id, label, type = "text", name, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label> <br />
      <input
        id = {id}
        type = {type}
        name = {name}
        value = {value}
        onChange = {onChange}
      /><br />
    </>
  );
};

FormInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };