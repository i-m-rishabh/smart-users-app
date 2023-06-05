import { useState } from 'react';
import './Form.css';
import Warning from './Warning.js';

const Form = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    function formSubmitHandler(event) {
        event.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            // alert('please enter all the details');
            setErrorMessage('Please enter all the details');
            setIsValid(false);
            props.onModalActive(false);
        } else {
            if (age < 0) {
                // alert('age can not be in negative');
                setErrorMessage('age can not be negative');
                setIsValid(false);
                props.onModalActive(false);
            } else {
                props.OnAddUser(name, parseInt(age), isValid);
                setName('');
                setAge('');
            }
        }
    }

    function handleNameChange(event) {
        isValid && setName(event.target.value);
    }

    function handleAgeChange(event) {
        isValid &&setAge(event.target.value);
    }

    function handleConfirm(){
        setIsValid(true);
        props.onModalActive(true);
    }
    return (
        <div className='container'>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="user_name">Username</label>
                <input type="text" name="user_name" id="user_name" onChange={handleNameChange} value={name} />
                <label htmlFor="user_age">Age (Years)</label>
                <input type="number" name="user_age" id="user_age" onChange={handleAgeChange} value={age} />
                <button type="submit">Add User</button>
            </form>
            {
                !isValid && <Warning message={errorMessage} OnConfirm={handleConfirm}/>
            }
        </div>
    )
}

export default Form;