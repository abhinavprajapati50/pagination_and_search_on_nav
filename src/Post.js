import React from 'react'

export const Post = ({ pagination, arr, searchData
    , datass =0,
    defaultSorted,
    columns }) => {
        
    return (
        <div>
            <div className="row row-cols-1 row-cols-3 p-4">
                {
                     arr.map((cur, id) => (
                        <div className="col p-2" key={id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p>{cur.name}</p>
                                    <p>{cur.lname}</p>
                                    <p>{cur.age}</p>
                                </div>
                            </div>
                        </div>
                    ))
                        
                }
            </div>

            <div style={{ display: 'block', width: 700, padding: 30 }}>
                <h4>React-Bootstrap Pagination Component</h4>

                {/* <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav> */}

            </div>
        </div>
    )
}
