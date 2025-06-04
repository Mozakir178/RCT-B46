
function Profile({name, age})  {
    // type of code will be js
    const user = {
        name: name,
        age: age
    }

    return (
        <div>
            <h1>Hello, {user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Status: { user.age > 18 ? "Adult" : "Minor"}</p>
        </div>
    )
}



export default Profile ;