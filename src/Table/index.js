import React from 'react'

export const Table = ({ data, onSort, sort, sortField }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={onSort.bind(null, 'id')}>ID { (sortField === 'id') && sort ? '^' : 'v' } </th>
                    <th onClick={onSort.bind(null, 'name')}>Name { (sortField === 'name') && sort ? '^' : 'v' }</th>
                    <th onClick={onSort.bind(null, 'username')}>Username { (sortField === 'username') && sort ? '^' : 'v' }</th>
                    <th onClick={onSort.bind(null, 'email')}>Email { (sortField === 'email') && sort ? '^' : 'v' }</th>
                    <th onClick={onSort.bind(null, 'phone')}>Phone { (sortField === 'phone') && sort ? '^' : 'v' }</th>
                    <th onClick={onSort.bind(null, 'website')}>Website { (sortField === 'website') && sort ? '^' : 'v' }</th>
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
