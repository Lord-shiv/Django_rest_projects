import React from 'react'

function UserList(props) {
    return (
        <div>
            {props.users && props.users.map((user, index) => {
                return (
                    <div key={'user.id' + index}>
                        <h3>{user.first_name}</h3>
                        <p>{user.last_name}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default UserList
