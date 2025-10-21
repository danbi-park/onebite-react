import { useInput } from "../hooks/useInput";

const HookExam = () => {
    const [input, onChange] = useInput();
    return (
        <div>
            <input type="text" value={input} onChange={onChange} />
        </div>
    );
}

export default HookExam;