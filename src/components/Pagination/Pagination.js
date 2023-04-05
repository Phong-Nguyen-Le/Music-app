import React, { Children, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.css";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { sideBarFilterRemainingSelector } from "../../redux/selector";

export default function Pagination({ itemsPerPage, productList }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = productList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productList.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productList.length;
        setItemOffset(newOffset);
    };


    let productListAfterFilter = useSelector(sideBarFilterRemainingSelector);
    
    useEffect(() => {
        if(productListAfterFilter.length<itemsPerPage){
            setItemOffset(0)
        }
    }, [productListAfterFilter]);

  

    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-2">
                {currentItems &&
                    currentItems.map((productItem, index) => (
                        <ProductCard key={index} product={{ ...productItem }} />
                    ))}
            </div>

            <div className="flex justify-center">
                <ReactPaginate
                    className="flex paginate-container"
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}
