import React from "react";
const pageManagment = {
    currentPage: 1,
    changePageState: (pageParam: number) => {
        pageManagment.currentPage = pageParam
        console.log(pageManagment.currentPage, pageParam)
    }
};
const pageContext = React.createContext(pageManagment);

export default pageContext
