import React, { useState } from 'react'
import Header from './components/header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AccountsTable from "./components/accountsTable/AccountsTable"
import AddAccount from './components/addAccount/AddAccount'
import EditTable from './components/editTable/EditTable'
import EditAccount from './components/accountEdit/EditAccount'

function App() {

    // state = {
    //     accounts: [
    //         { id: 1, name: "damjan", lastname: "Banjac", phone: "12345", email: "damjanbanjac14@gmail.com" },
    //         { id: 2, name: "danica", lastname: "Banjac", phone: "225", email: "dankac14@gmail.com" },
    //         { id: 3, name: "dadule", lastname: "kum", phone: "3342345", email: "dado@gmail.com" }
    //     ]
    // }

    const [accounts, setAccounts] = useState([{ id: 1, name: "damjan", lastname: "Banjac", phone: "12345", email: "damjanbanjac14@gmail.com" },
    { id: 2, name: "danica", lastname: "Banjac", phone: "225", email: "dankac14@gmail.com" },
    { id: 3, name: "dadule", lastname: "kum", phone: "3342345", email: "dado@gmail.com" }])

    const addNewAccountToState = (acc) => {
        // this.setState({
        //     accounts: [...this.state.accounts, acc]
        // })
        setAccounts([...accounts, acc])
    }

    const deleteAccount = (id) => {
        console.log(id)
        // const accountsCopy = [...this.state.accounts];
        const newCopyAccounts = accounts.filter(account => account.id !== id);
        setAccounts(newCopyAccounts)
    }

    const editAccount = (acc) => {

        //  const copyAccounts = [...this.state.accounts];
        let accountPosition = accounts.map(account => {
            return account.id;
        }).indexOf(acc.id)

        accounts[accountPosition] = acc;

        setAccounts(accounts);

    }


    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact>
                <AccountsTable accounts={accounts} />
            </Route>
            <Route path="/add">
                <AddAccount addNewAccountToState={addNewAccountToState} />
            </Route>
            <Switch>
                <Route path="/edit/:id">
                    <EditAccount editAccount={editAccount} accounts={accounts} />

                </Route>
                <Route path="/edit">
                    <EditTable deleteAccount={deleteAccount} accounts={accounts} />

                </Route>

            </Switch>

        </BrowserRouter>

    )

}

export default App;