import React from 'react'

export const PaginationNav = ({ postPerPage, totalPosts , paginate}) => {
    const pageNumber = [];

    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }
    console.log("-=-=-=pageNumber", pageNumber);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pageNumber.map((curNo, id) => (<li className="page-item" key={id}>
                    <a onClick={() => paginate(curNo)} className="page-link" href="!#">{curNo}</a>
                </li>))}
            </ul>
        </nav>
    )
}
