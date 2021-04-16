import React, { useState } from "react";
import { withRouter } from 'react-router-dom';

function EditAccount(props) {

    // state = {
    //     account: {
    //         id: "",
    //         name: "",
    //         lastname: "",
    //         phone: "",
    //         email: "",

    //     }
    // }

    const [account, setAccount] = useState(props.accounts.filter(acc => acc.id == props.match.params.id)[0]);

    //klase znaju da budu komplikovane, manipulacija stateom i this keywordu kompllikovana
    // zato oristiti react hooks

    // const changeAccount = (event) => {
    //     const copyOfAccount = { ...this.state.account };
    //     copyOfAccount[event.target.id] = event.target.value;
    //     this.setState({
    //         account: copyOfAccount
    //     })
    // }

    const editAccount = () => {
        console.log("usao")
        props.editAccount(account);
        props.history.push("/")
    }

    // componentDidMount() {
    //     const accountForEdit = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0]; //vraca array u ovom slucaju sa jednim elementom
    //     this.setState({
    //         account: accountForEdit
    //     })
    // }





    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Edit account</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input onChange={e => { setAccount({ ...account, name: e.target.value }) }} type="text" value={account.name} id="name" className="form-control" /><br />
                            <input onChange={e => { setAccount({ ...account, lastname: e.target.value }) }} type="text" value={account.lastname} id="lastname" className="form-control" /><br />
                            <input onChange={e => { setAccount({ ...account, phone: e.target.value }) }} type="text" value={account.phone} id="phone" className="form-control" /><br />
                            <input onChange={e => { setAccount({ ...account, email: e.target.value }) }} type="text" value={account.email} id="email" className="form-control" /><br />
                            <button onClick={editAccount} className="form-control btn btn-info">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withRouter(EditAccount);