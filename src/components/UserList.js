import User from "./User.js"
import './UserList.css';
const UserList = (props) => {

    return(
        <div className="UserList_container">
            <ul>
            {
                props.users.map((user)=>{
                   return <User key={user.id} id={user.id} name={user.name} age={user.age} college={user.college} OnRemoveUser={props.OnRemoveUser}/>
                    {/* console.log(user.id,user.name,user.age) */}
                })
            }    
            </ul>
        </div>
    )
}

export default UserList;