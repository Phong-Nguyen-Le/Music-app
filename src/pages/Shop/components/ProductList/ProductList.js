import ProductSort from "../TopBar/ProductSort";
import TopBar from "../TopBar/TopBar";
import Pagination from "../../../../components/Pagination/Pagination";
import React from "react";
import { sideBarFilterRemainingSelector } from "../../../../redux/selector";
import { useSelector } from "react-redux";

export default function ProductList() {
    const productList = useSelector(sideBarFilterRemainingSelector);

    return (
        <div className="min-h-[600px] relative">
            <div className="h-[100px]">
                <TopBar />
            </div>
            <div>
                <Pagination itemsPerPage={9} productList={productList} />
            </div>
        </div>
    );
}
