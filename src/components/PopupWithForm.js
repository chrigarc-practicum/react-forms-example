export default function PopupWithForm(props) {

    const hanldeInput = event => {

        const data = props.errors[props.name] ? props.errors[props.name] : {}

        if(event.target.validity.valid) {
            data[event.target.name] = '';
        }else{
            data[event.target.name] = event.target.validationMessage;
        }
        const newErrors = {...props.errors}
        newErrors[props.name] = data;
        props.setErrors(newErrors)
    }

    return (
        <form onInput={hanldeInput}>
            {props.children}
        </form>
    )
}