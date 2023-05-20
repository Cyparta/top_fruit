
interface InputControlType {
    text: string;
    placeholder?: string;
    width?:string;
    fullWidth?: boolean
}

function InputControl({text, placeholder = "", width="auto", fullWidth = false}: InputControlType) {
    return <div className="d-flex align-items-center flex-1">
        <p className="label" dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
        <input type="text" className={`main-input ${fullWidth &&  'flex-1' }`} placeholder={placeholder} style={{width: width}}/>
    </div>
}

export default InputControl