const Button = ({ text, color = "black", children }) => {
    return (
        <>
            <button style={{ color: color }}>
                {text} - {color}
                {children}
            </button>
        </>
    );
}

export default Button;