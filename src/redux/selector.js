import { createSelector } from "@reduxjs/toolkit";
import convert_vi_to_en from "../components/convertVNtoENG";

const productListSelector = (state) => state.productList;
const categoryFilterSelector = (state) => state.sideBarFilter.typeOfCategory;
const priceRangeFilterSelector = (state) => state.sideBarFilter.priceRange;
const brandFilterSelector = (state) => state.sideBarFilter.brand;
const sortFilterSelector = (state) => state.topBarFilter.typeOfSort;
const searchTextFilterSelector = (state) => state.topBarFilter.searchText;

const cartInfoSelector = (state) => state.cartInfo




export const sideBarFilterRemainingSelector = createSelector(
    productListSelector,
    categoryFilterSelector,
    priceRangeFilterSelector,
    brandFilterSelector,
    sortFilterSelector,
    searchTextFilterSelector,
    (productList, typeOfCategory, priceRange,  brandArr, typeOfSort, searchText) => {


    // Filter by category
        let productListAfterCategory = productList;
        if (typeOfCategory !== "All") {
            productListAfterCategory = productList.filter(
                (item) => item.type === typeOfCategory
            );
        }


    // Filter by price
        let productAfterPriceFilter = [];
        if (priceRange.length) {
            productAfterPriceFilter = productListAfterCategory.filter(
                (item) =>
                    item.price >= priceRange[0] && item.price <= priceRange[1]
            );
        } else {
            productAfterPriceFilter = productListAfterCategory;
        }

    // Filter by brand
        let productListAfterBrandFilter = [];
        if (brandArr.length) {
            productListAfterBrandFilter = productAfterPriceFilter.filter(
                (item) => brandArr.includes(item.brand)
            );
        } else {
            productListAfterBrandFilter = productAfterPriceFilter;
        }

        

     // Filter by Sort
        let productListAfterSort = []
        if(typeOfSort === 'a-b') {
            productListAfterSort= [...productListAfterBrandFilter].sort((a,b) => a.price-b.price )
            
        } else if (typeOfSort === 'b-a') {           
            productListAfterSort= [...productListAfterBrandFilter].sort((a,b) => b.price-a.price )
        } else (productListAfterSort = productListAfterBrandFilter )




        let productAfterSearch = productListAfterSort.filter((product) => {
            return (
                // Search by English
                convert_vi_to_en(product.name)
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                convert_vi_to_en(product.type)
                      .toLowerCase()
                      .includes(searchText.toLowerCase())  ||
                // Seach by Vietnamese
                product.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                product.type
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
            )
        })
        return productAfterSearch;
    }
);


export const brandListRemainingSelector = createSelector (
    productListSelector,
    categoryFilterSelector,
    priceRangeFilterSelector,
    searchTextFilterSelector,
     // Filter by category
    (productList, typeOfCategory, priceRange, searchText) => {
        let productListAfterCategory = productList;
        if (typeOfCategory !== "All") {
            productListAfterCategory = productList.filter(
                (item) => item.type === typeOfCategory
            );
        }

    // Filter by price
        let productAfterPriceFilter = [];
        if (priceRange.length) {
            productAfterPriceFilter = productListAfterCategory.filter(
                (item) =>
                    item.price >= priceRange[0] && item.price <= priceRange[1]
            );
        } else {
            productAfterPriceFilter = productListAfterCategory;
        }


        let productAfterSearch = productAfterPriceFilter.filter((product) => {
            return (
                // Search by English
                convert_vi_to_en(product.name)
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                convert_vi_to_en(product.type)
                      .toLowerCase()
                      .includes(searchText.toLowerCase())  ||
                // Seach by Vietnamese
                product.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                product.type
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
            )
        })

        return productAfterSearch;
    }
)

export const cartSelector = createSelector (
    cartInfoSelector,
    (detailCart) => {
        let totalCart = detailCart.reduce((acc, cur) => acc+cur.price*cur.quantity, 0)

        return [detailCart,totalCart]
    }
)