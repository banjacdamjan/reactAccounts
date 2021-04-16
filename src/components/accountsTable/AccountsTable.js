import React from 'react'
import Account from '../account/Account'

const AccountsTable = ({ accounts }) => {

    const allAccounts = accounts.map(account => {
        return (
            <Account account={account} key={account.id} />
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Accounts</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>LastName</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allAccounts}
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccountsTable;