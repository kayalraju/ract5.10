import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [user, setUser] = useState([])

    const getApi = async () => {
        const reaponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await reaponse.json()
        //console.log(data);
        setUser(data)
    }

    useEffect(() => {
        getApi()
        console.log('hi');
    },[])

    console.log(user);

    return (
        <>
            <h1>Fetch Api </h1>
            <div className="container">
                <div className="row">
                    {
                        user.map((users, index) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div class="card" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Name {users.name}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="card-link">Address: {users.address.city}</a>
                                                <a href="#" class="card-link">Another link</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default FetchApi
