import './User.css';
const User = ({id,name, age, college, OnRemoveUser}) => {
    function handleClick(event){
        OnRemoveUser(event.target.id);
    }
    return(
        <div className="User_container">
            <li onClick={handleClick} id={id}>{name} {`(${age} years old) `} {college}</li>
        </div>
    )
}

export default User;