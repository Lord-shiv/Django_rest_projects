import React from 'react'
import MaterialTable from 'material-table';

function UserList(props) {
    return (
        <div>
            {props.users && props.users.map((user, index) => {
                return (
                    <div key={'user.id' + index}>
                        <MaterialTable title="User List"
                            data={user.first_name}
                            coulms={user}
                        />
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
