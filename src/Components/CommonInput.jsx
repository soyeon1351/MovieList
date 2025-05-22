export default function CommonInput({ label, type, name, value, onChange, placeholder, errorMessage }) {
    
    return (
    <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
    );
}
