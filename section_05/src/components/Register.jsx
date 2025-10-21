import { useState } from 'react';

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })


    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        console.log(input);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>Register</h1>
            <div>
                <input type="text"
                    name="name"
                    value={input.name}
                    placeholder="이름"
                    onChange={onChange}
                />
            </div>

            <div>
                <input type="date"
                    name="birth"
                    value={input.birth}
                    placeholder="생년월일"
                    onChange={onChange}
                />
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value="none">국가 선택</option>
                    <option value="KR">한국</option>
                    <option value="US">미국</option>
                    <option value="JP">일본</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} placeholder="소개글" />
            </div>
            <button style={{ width: "100px", height: "30px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
                onClick={onSubmit}>
                가입하기
            </button>
        </div>
    );
}

export default Register;