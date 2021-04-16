import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'

function AddAccount(props) {

    // state = {
    //     newAccount: {
    //         id: "",
    //         name: "",
    //         lastname: "",
    //         phone: "",
    //         email: ""
    //     }
    // }

    const [newAccount, setNewAccount] = useState({
        id: "",
        name: "",
        lastname: "",
        phone: "",
        email: ""
    })

    const idInput = useRef();

    useEffect(() => {
        idInput.current.focus();
    }, [])

    //    const changeHandler = (event) => {
    //         let id = event.target.id;
    //         let newAccountCopy = { ...this.state.newAccount }
    //         newAccountCopy[id] = event.target.value;
    //         this.setState
    //             ({
    //                 newAccount: newAccountCopy
    //             })

    //     }

    const addNewAccount = () => {
        props.addNewAccountToState(newAccount)
        props.history.push("/")
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Add account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            {/* <input onChange={this.changeHandler} type="text" id="id" placeholder="id" className="form-control" /> <br /> */}
                            <input ref={idInput} onChange={e => { setNewAccount({ ...newAccount, id: e.target.value }) }} type="text" id="id" placeholder="id" className="form-control" /> <br />
                            <input onChange={e => { setNewAccount({ ...newAccount, name: e.target.value }) }} type="text" id="name" placeholder="name" className="form-control" /> <br />
                            <input onChange={e => { setNewAccount({ ...newAccount, lastname: e.target.value }) }} type="text" id="lastname" placeholder="lastname" className="form-control" /> <br />
                            <input onChange={e => { setNewAccount({ ...newAccount, phone: e.target.value }) }} type="text" id="phone" placeholder="phone" className="form-control" /> <br />
                            <input onChange={e => { setNewAccount({ ...newAccount, email: e.target.value }) }} type="email" id="email" placeholder="email" className="form-control" /> <br />
                            <br />
                            <button onClick={addNewAccount} className="btn btn-primary form-control">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default withRouter(AddAccount) //ovako saljemo i informacije o routeru