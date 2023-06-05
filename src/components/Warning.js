import './Warning.css'

const Warning = (props) => {
    console.log('inside Warning');
    
    function handleClick(){
        props.OnConfirm();
    }
    return(
        <div className='warning_container'>
            <div className="warning_header">
                <h3>Invalid input</h3>
            </div>
            <div className="warning_body">
                <p>{props.message}</p>
            </div>
            <button className='warning_button' onClick={handleClick}>okey</button>
        </div>
    )
}

export default Warning;