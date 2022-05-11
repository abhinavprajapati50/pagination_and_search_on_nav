import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Post } from './Post';
import { PaginationNav } from './Pagination';
const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'lname', text: 'Lname', sort: true },
    { dataField: 'age', text: 'age', sort: true }
];

const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
}];


const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
        console.log('page', page);
        console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
        console.log('page', page);
        console.log('sizePerPage', sizePerPage);
    }
});

const { SearchBar, ClearSearchButton } = Search;

export const Demo = () => {
    const [arr, setArr] = useState([
        { id: 1, name: "abhinav", lname: "tak", age: 30 },
        { id: 2, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 3, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 4, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 5, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 6, name: "bhavesh", lname: "prajapati", age: 3 },
        { id: 7, name: "bhavesh", lname: "tak", age: 70 },
        { id: 8, name: "niraj", lname: "tak", age: 70 },
        { id: 9, name: "niraj", lname: "tak", age: 70 },
        { id: 10, name: "niraj", lname: "tak", age: 70 },
        { id: 12, name: "niraj", lname: "tak", age: 70 },
        { id: 13, name: "yo yo", lname: "tak", age: 70 },
        { id: 14, name: "yo yo", lname: "tak", age: 70 },
        { id: 15, name: "yo yo", lname: "tak", age: 70 },
        { id: 16, name: "yo yo", lname: "tak", age: 70 },
        { id: 17, name: "yo yo", lname: "tak", age: 70 },
        { id: 18, name: "yo yo", lname: "tak", age: 70 },
        { id: 19, name: "yo yo", lname: "prajapati", age: 3 },
        { id: 20, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 21, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 22, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 23, name: "bhavesh", lname: "prajapati", age: 3 },
        { id: 24, name: "bhavesh", lname: "tak", age: 70 },
        { id: 25, name: "niraj", lname: "tak", age: 70 },
        { id: 26, name: "niraj", lname: "tak", age: 70 },
        { id: 27, name: "niraj", lname: "tak", age: 70 },
        { id: 28, name: "niraj", lname: "tak", age: 70 },
        { id: 29, name: "anjali", lname: "tak", age: 70 },
        { id: 30, name: "anjali", lname: "tak", age: 70 },
        { id: 31, name: "anjali", lname: "tak", age: 70 },
        { id: 32, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 33, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 34, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 35, name: "abhinav", lname: "prajapati", age: 3 },
        { id: 36, name: "bhavesh", lname: "prajapati", age: 3 },
        { id: 37, name: "bhavesh", lname: "tak", age: 70 },
        { id: 38, name: "niraj", lname: "tak", age: 70 },
        { id: 39, name: "niraj", lname: "tak", age: 70 },
        { id: 40, name: "niraj", lname: "tak", age: 70 },
        { id: 41, name: "niraj", lname: "tak", age: 70 },
        { id: 42, name: "anjali", lname: "tak", age: 70 },
        { id: 43, name: "anjali", lname: "tak", age: 70 },
        { id: 44, name: "anjali", lname: "tak", age: 70 },
    ])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(5)

    const searchData = (window.location.pathname.split("/")[1]);
    console.log(searchData);

    const datass = arr.filter(cur => cur.name === searchData ? cur : "")
    console.log(datass);

    const indexOfLastPost = currentPage * postPerPage;
    // console.log(indexOfLastPost);
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    // console.log(indexOfFirstPost);
    const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost)
    // console.log(currentPosts);

    //change page

    const paginate = (curNO) => setCurrentPage(curNO)

    console.log("+++++++++++++++++++++++++++++++++++++", currentPosts);

    // const MyExportCSV = (props) => {
    //     const handleClick = () => {
    //         props.onExport();
    //     };
    // }
    return (
        <div>
            <Post pagination={pagination}
                defaultSorted={defaultSorted}
                columns={columns}
                arr={currentPosts}
                searchData={searchData}
            datass={datass}

            />
            <PaginationNav postPerPage={postPerPage} totalPosts={arr.length} paginate={paginate} />



        </div>
    )
}
