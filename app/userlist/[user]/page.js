"use client";

function User({ params }) {
    console.log(params);
    return (
        <div>
            <h1>User Page</h1>
            <h1 className="text-4xl">User:{params.user}</h1>
        </div>
    );
}

export default User;


