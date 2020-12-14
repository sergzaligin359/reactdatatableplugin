import React from 'react'

export const Table = ({ data, onSort }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={onSort.bind(null, 'id')}>ID</th>
                    <th onClick={onSort.bind(null, 'name')}>Name</th>
                    <th onClick={onSort.bind(null, 'username')}>Username</th>
                    <th onClick={onSort.bind(null, 'email')}>Email</th>
                    <th onClick={onSort.bind(null, 'phone')}>Phone</th>
                    <th onClick={onSort.bind(null, 'website')}>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(({id, name, username, email, phone, website}) => (
                        <tr key={id} >
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{website}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
