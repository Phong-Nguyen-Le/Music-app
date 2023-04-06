import { Select, Option } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { useEffect, useState, useRef  } from "react";
import data from "../../../../data/data.json";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { sideBarSlice } from "./sideBarSlice";
import { useSelector } from "react-redux";
import { brandListRemainingSelector } from "../../../../redux/selector";
import "./SideBar.css";

export default function SideBar() {
    const productList = data.product;
    const dispatch = useDispatch();

    // CALCULATE TOTAL PRODUCT BY TYPE

    const [category, setCategory] = useState([]);
    const [typeOfCategory, setTypeOfCategory] = useState("All");

    // Xử lí data Productlist ban đầu thành Array có dạng [{Loại nhạc cụ: tổng số lượng}....]
    useEffect(() => {
        let totalProductByTypeObj = {};
        let totalProductByTypeArr = [];
        for (let i = 0; i < productList.length; i++) {
            if (totalProductByTypeObj[productList[i].type]) {
                totalProductByTypeObj[productList[i].type]++;
            } else totalProductByTypeObj[productList[i].type] = 1;
        }

        for (const property in totalProductByTypeObj) {
            totalProductByTypeArr.push({
                name: property,
                value: totalProductByTypeObj[property],
            });
        }
        totalProductByTypeArr.unshift({
            name: "All",
            value: productList.length,
        });
        setCategory(totalProductByTypeArr);
    }, []);

    // Dispatch action để render ra list sản phẩm theo từng Loại nhạc cụ  + đưa bộ lọc (Filter by brand) về mặc định [] -> Học thêm reduct thunk để tối ưu (dispatch multiple action)
    const handeChangeTypeOfCategory = (value) => {
        dispatch(sideBarSlice.actions.categoryFilterChange(value));
        setcheckedBrandArr([]);
        setTypeOfCategory(value);
    };

    // HANDLE MIN/MAX VALUE FILTER
    const [valueRange, setValueRange] = useState([0, Infinity]);
    const handleChangeMValue = (value) => {
        console.log(`value`, value);
        dispatch(sideBarSlice.actions.priceRangeFilterChange(value));
        setcheckedBrandArr([]);
        setValueRange(value);
    };

    useEffect(() => {
        setCheckedState(new Array(brandArr.length).fill(false));
    }, [typeOfCategory, valueRange]);

    // HANDLE CHECKBOX
    // Render ra Mảng chứa các brand sau khi filter by category and price

    const productListBeforeBrandFilter = useSelector(
        brandListRemainingSelector
    );

    let brandArr = [];
    for (let i = 0; i < productListBeforeBrandFilter.length; i++) {
        if (!brandArr.includes(productListBeforeBrandFilter[i].brand)) {
            brandArr.push(productListBeforeBrandFilter[i].brand);
        }
    }

    // Tạo mảng checkedState có giá trị ban đầu là [false, false, ....] -> khi click vào checkbox thứ i -> Arr[i] == true
    const [checkedState, setCheckedState] = useState(
        new Array(brandArr.length).fill(false)
    );

    // Tạo mảng checkedBrandArr chứa tên của các Brand ['Yamaha', 'Rosen'....]  -> Brand được thêm vào mảng khi có index tương ứng với mảng CheckedState == true và loại ra khi == false
    const [checkedBrandArr, setcheckedBrandArr] = useState([]);

    const handleCheckedChange = (idValue, brandName) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === idValue ? !item : item
        );
        setCheckedState(updatedCheckedState);

        let BrandArr = [];
        if (!checkedState[idValue]) {
            BrandArr = [...checkedBrandArr, brandName];
        } else {
            BrandArr = checkedBrandArr.filter((item) => item !== brandName);
        }
        setcheckedBrandArr(BrandArr);
        dispatch(sideBarSlice.actions.brandFilterChange(BrandArr));
    };


    const [openFilter, setOpenFilter] = useState(false);
    const handleOpenFilter = () => {
        setOpenFilter(!openFilter)
        setIsDragging(!isDragging)
    };




    // filter button on phone display setting 
    const [position, setPosition] = useState({ x: 20, y: 180 });
    const [isDragging, setIsDragging] = useState(false);
    const buttonSize = 64; // change this value to adjust the size of the button
        console.log(position)
    function handleTouchStart(event) {
        setIsDragging(true);
      const startX = event.touches[0].clientX - position.x;
      const startY = event.touches[0].clientY - position.y;
  
      function handleTouchMove(event) {
        if (event.cancelable) {
            event.stopImmediatePropagation();
          }
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const maxX = screenWidth - buttonSize;
        const maxY = screenHeight - buttonSize;
  
        let x = event.touches[0].clientX - startX;
        let y = event.touches[0].clientY - startY;
  
        // Make sure the button doesn't move out of the screen
        x = Math.min(Math.max(x, 10), maxX);
        y = Math.min(Math.max(y, 10), maxY);
  
        setPosition({ x, y });
      }
  
      function handleTouchEnd() {
        setIsDragging(false);
        event.preventDefault();
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
  
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }




    return (
        <>
            {/* The filter button display on phone screen */}
            <button
                onClick={handleOpenFilter}
                onTouchStart={handleTouchStart}
                style={{left: `${position.x}px`, top: `${position.y}px` }}
                className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-full transition duration-300 ease-in-out hidden fixed  z-30 sm:block ${
                    isDragging ? 'opacity-100' : 'opacity-50'} transition-opacity`}
            >
                <i class="fa-solid fa-filter"></i>
            </button>



            
            <div className="p-pri-padding bg-white z-10 sm:hidden">
                {/* FILTER BY CATEGORIES */}
                <div>
                    <h3>Categories</h3>
                </div>
                <div>
                    {category.map((item) => {
                        return (
                            <>
                                <p
                                    className="py-2 text-sm"
                                    onClick={() =>
                                        handeChangeTypeOfCategory(item.name)
                                    }
                                    value={item.name}
                                >
                                    {item.name}
                                    <span className=" float-right">
                                        {item.value}
                                    </span>
                                </p>
                            </>
                        );
                    })}
                </div>

                {/* FILTER BY PRICE */}
                <div className="mt-10">
                    <h3>Price</h3>
                    <div>
                        <div className="w-72">
                            <Select
                                label="Mức giá"
                                onChange={handleChangeMValue}
                            >
                                <Option value={[0, 999999]}>
                                    {" "}
                                    Dưới 1.000.000 đ
                                </Option>
                                <Option value={[1000000, 2000000]}>
                                    Từ 1.000.000đ đến 2.000.000đ
                                </Option>
                                <Option value={[2000000, 5000000]}>
                                    Từ 2.000.000đ đến 5.000.000đ
                                </Option>
                                <Option value={[5000000, 10000000]}>
                                    Từ 5.000.000đ đến 10.000.000đ
                                </Option>
                                <Option value={[10000000, Infinity]}>
                                    Trên 10.000.000đ
                                </Option>
                                <Option value={[0, Infinity]}>Tất cả</Option>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* FILTER BY BRAND */}
                <div>
                    <h3>Brand</h3>
                    <div className="flex flex-col">
                        {brandArr.map((item, index) => {
                            return (
                                <Checkbox
                                    key={index}
                                    id={index}
                                    label={item}
                                    checked={checkedState[index]}
                                    onChange={() =>
                                        handleCheckedChange(index, item)
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div>
                <Dialog
                    className=" absolute top-0 left-0 m-0 bottom-0 z-20 flex flex-col justify-start pt-10 px-3 "
                    open={openFilter}
                    handler={handleOpenFilter}
                >
                    <div>
                        <h3>Danh mục</h3>
                    </div>
                    <div>
                        {category.map((item) => {
                            return (
                                <>
                                    <p
                                        className="py-2 text-sm"
                                        onClick={() =>
                                            handeChangeTypeOfCategory(item.name)
                                        }
                                        value={item.name}
                                    >
                                        {item.name}
                                        <span className=" float-right">
                                            {item.value}
                                        </span>
                                    </p>
                                </>
                            );
                        })}
                    </div>

                    {/* FILTER BY PRICE */}
                    <div className="mt-10">
                        <h3>Lọc theo giá</h3>
                        <div>
                            <div className="">
                                <Select
                                    label="Mức giá"
                                    onChange={handleChangeMValue}
                                    className="w-full text-xs"
                                >
                                    <Option value={[0, 999999]}>
                                        {" "}
                                        Dưới 1.000.000 đ
                                    </Option>
                                    <Option value={[1000000, 2000000]}>
                                        Từ 1.000.000đ đến 2.000.000đ
                                    </Option>
                                    <Option value={[2000000, 5000000]}>
                                        Từ 2.000.000đ đến 5.000.000đ
                                    </Option>
                                    <Option value={[5000000, 10000000]}>
                                        Từ 5.000.000đ đến 10.000.000đ
                                    </Option>
                                    <Option value={[10000000, Infinity]}>
                                        Trên 10.000.000đ
                                    </Option>
                                    <Option value={[0, Infinity]}>
                                        Tất cả
                                    </Option>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* FILTER BY BRAND */}
                    <div>
                        <h3>Brand</h3>
                        <div className="flex flex-col">
                            {brandArr.map((item, index) => {
                                return (
                                    <Checkbox
                                        key={index}
                                        id={index}
                                        label={item}
                                        checked={checkedState[index]}
                                        onChange={() =>
                                            handleCheckedChange(index, item)
                                        }
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <button onClick={handleOpenFilter}>
                        <span>Cancel</span>
                    </button>
                </Dialog>
            </div>
        </>
    );
}
