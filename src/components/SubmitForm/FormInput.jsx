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
    id: PropTypes.string.isRequired, // обязательный пропс
    label: PropTypes.string.isRequired, // обязательный пропс
    type: PropTypes.string,
    name: PropTypes.string.isRequired, // обязательный пропс
    value: PropTypes.string.isRequired, // обязательный пропс
    onChange: PropTypes.func.isRequired, // обязательный пропс
  };