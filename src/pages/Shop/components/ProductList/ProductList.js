import ProductSort from "../TopBar/ProductSort";
import TopBar from "../TopBar/TopBar";
import Pagination from "../../../../components/Pagination/Pagination";
import React from "react";
import { sideBarFilterRemainingSelector } from "../../../../redux/selector";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductList() {
    const productList = useSelector(sideBarFilterRemainingSelector);

    const [itemsPerPage, setItemsPerPage] = useState(9);
    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 767) {
                setItemsPerPage(8);
            } else setItemsPerPage(9);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="min-h-[600px] relative">
            <div className="h-[100px]">
                <TopBar />
            </div>
            <div>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    productList={productList}
                />
            </div>
        </div>
    );
}
