const FormInput = ({
  label,
  id,
  type,
  register,
  error,
  options,
  isRequired = true,
}) => {
  const inputProps = register(id, { required: isRequired });

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <div className="input">
            <label htmlFor={id}>{label}</label>
            <select id={id} {...inputProps}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && <span className="error">Please select an option</span>}
          </div>
        );
      case "textarea":
        return (
          <div className="input">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...inputProps} />
            {error && <span className="error">Please provide a reason</span>}
          </div>
        );
      default:
        return (
          <div className="input">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} {...inputProps} />
            {error && (
              <span className="error">
                Please provide a valid {label.toLowerCase()}
              </span>
            )}
          </div>
        );
    }
  };

  return renderInput();
};

export default FormInput;
