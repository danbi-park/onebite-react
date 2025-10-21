import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [introduce, setIntroduce] = useState("");


    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeIntroduce = (e) => {
        setIntroduce(e.target.value);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>Register</h1>
            <div>
                <input type="text"
                    value={name}
                    placeholder="이름"
                    onChange={onChangeName}
                />
            </div>

            <div>
                <input type="date"
                    value={birth}
                    placeholder="생년월일"
                    onChange={onChangeBirth}
                />
            </div>

            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option value="none">국가 선택</option>
                    <option value="KR">한국</option>
                    <option value="US">미국</option>
                    <option value="JP">일본</option>
                </select>
            </div>
            <div>
                <textarea value={introduce} onChange={onChangeIntroduce} placeholder="소개글" />
            </div>
            <button style={{ width: "100px", height: "30px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                가입하기
            </button>
        </div>
    );
}

export default Register;