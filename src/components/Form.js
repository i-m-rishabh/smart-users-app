import { useState } from 'react';
import './Form.css';
import Warning from './Warning.js';
import Backdrop from './Backdrop.js';

const Form = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    function formSubmitHandler(event) {
        event.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            setErrorMessage('Please enter all the details');
            setIsValid(false);
        } else {
            if (age < 0) {
                setErrorMessage('age can not be negative');
                setIsValid(false);
            } else {
                props.OnAddUser(name, parseInt(age));
                setName('');
                setAge('');
            }
        }
    }

    function handleNameChange(event) {
        isValid && setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    function handleConfirm() {
        setIsValid(true);
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
                !isValid && <>
                    <Backdrop />
                    <Warning message={errorMessage} OnConfirm={handleConfirm} />
                </>
            }
        </div>
    )
}

export default Form;