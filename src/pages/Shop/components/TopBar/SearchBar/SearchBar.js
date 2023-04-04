import React, { useEffect, useState, useRef } from "react";
import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "../../../../../components/Popper";
import Tippy from "@tippyjs/react/headless";
import data from "../../../../../data/data.json";
import { useDispatch } from "react-redux";
import { topBarSlice } from "../topBar.Slice";
import convert_vi_to_en from "../../../../../components/convertVNtoENG";

const cx = classNames.bind(styles);

export default function SearchBar() {

    const productList = data.product;
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();



    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const handleClearResult = () => {
        setSearchInput("");
        dispatch(topBarSlice.actions.searchTextChange(''))
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };


    useEffect(() => {
        if(searchInput === ''){
            dispatch(topBarSlice.actions.searchTextChange(''))
        }  
        let filterData = [];  
        if (searchInput !== "") {
          filterData = productList.filter((product) => {
              return (
                // Search by English
                convert_vi_to_en(product.name)
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                convert_vi_to_en(product.type)
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                // Search by Vietnamese
                product.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                product.type
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
              );
          });
      } 
        setSearchResult(filterData)
    }, [searchInput]);


    const handleItemSelectOnSearchResult = (value) => {
        setSearchInput(value)
        setShowResult(false)
    }

    //Handle search button
    const dispatch = useDispatch()
    const handleButtonSearch = (value) => {
      dispatch(topBarSlice.actions.searchTextChange(value))
      setShowResult(false)
    }

    const handleKeyDown = (e,value) => {
        if(e.key === "Enter") {
            dispatch(topBarSlice.actions.searchTextChange(value))
            setShowResult(false)
          }      
    }

    return (
        <div>
            <Tippy
                onClickOutside={handleHideResult}
                placement="bottom"
                interactive
                visible={searchResult.length > 0 && showResult}
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4
                                className={cx("search-title")}
                            >{`${searchResult.length} matches were found`}</h4>
                            {searchResult.map((product) => {
                                return (
                                    <div className={cx("search-result-item")}>
                                        <img
                                            onClick={() => {handleItemSelectOnSearchResult(product.name)}}
                                            src={product.image[0]}
                                        ></img>
                                        <div
                                            className={cx(
                                                "search-result-content"
                                            )}
                                            onClick={() => {handleItemSelectOnSearchResult(product.name)}}
                                        >
                                            <p>{product.name}</p>
                                            <span>{product.type}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx("search")}>
                    <input
                        className={cx("input")}
                        ref={inputRef}
                        value={searchInput}
                        placeholder="Search for song, artist..."
                        onFocus={() => setShowResult(true)}
                        onChange={handleSearchInput}
                        onKeyDown={(e) => handleKeyDown(e,searchInput)}
                    ></input>
                    {searchInput && (
                        <button
                            onClick={handleClearResult}
                            className={cx("clear")}
                        >
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                    )}
                    <button
                        onClick={() => handleButtonSearch(searchInput)}
                        className={cx("search-btn")}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </Tippy>
        </div>
    );
}
