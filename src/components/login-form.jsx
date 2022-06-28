import React, { useState } from 'react';

function LogInForm() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={() => setName(changeName)} />
                <input type="text" onChange={() => setPassword(changePassword)} />
            </div>

            <div>
                <p>{name}</p>
                <p>{password}</p>
            </div>
        </div>
    )
}

export default LogInForm