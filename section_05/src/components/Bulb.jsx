import { useState } from 'react';

const Bulb = () => {
    const [light, setLight] = useState("OFF");
    console.log(light);
    return (
        <>
            {light === "ON" ?
                (<h1 style={{ backgroundColor: "orange", width: "min-content" }}>ON</h1>)
                : (<h1 style={{ backgroundColor: "gray", width: "min-content" }}>OFF</h1>)}
            <button onClick={() =>
                setLight(light === "ON" ? "OFF" : "ON")}>
                전구 {light === "ON" ? "끄기" : "켜기"}
            </button>

        </>
    );
}

export default Bulb;