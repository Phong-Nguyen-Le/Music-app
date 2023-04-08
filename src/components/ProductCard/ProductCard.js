import Modal from "../Modal/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../pages/CartPage/CartSlice";
import { cartSelector } from "../../redux/selector";
import formatNumberFunc from "../numericFormat";
import { Tooltip } from "@material-tailwind/react";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";
import displayMsg from "../Toastify";
import 'react-toastify/dist/ReactToastify.css'


export default function ProductCard({ product }) {
 
 
    const user = useContext(AuthContext);

   

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(!openModal);

    const dispatch = useDispatch();
    const cart = useSelector(cartSelector)[0];


    const handleChangeCart = (product) => {
        if (user.email) {
            let productInfo = {
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
            };
            if (!cart.some((item) => item.name === productInfo.name)) {
                dispatch(cartSlice.actions.addProductToCart(productInfo));
            }
        } else {
            displayMsg('!!!Bạn phải đăng nhập để sử dụng giỏ hàng!', false , 3000)
           
        }
    };

    return (
        <>
               
            <div className="m-pri-margin shadow-xl rounded-lg sm:m-2">
                <Modal
                    // className="hidden"
                    product={product}
                    open={openModal}
                    handleOpen={handleOpenModal}
                />
                <div className="">
                    <div className="w-[250px] mx-auto relative sm:w-[150px]">
                        <img
                            className=" mx-auto object-cover "
                            src={product.image[0]}
                            onMouseOver={(e) =>
                                (e.currentTarget.src = product.image[1])
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.src = product.image[0])
                            }
                            alt="Product"
                        ></img>
                        <div className="absolute flex flex-col top-5 text-white">
                            <div className="w-10 h-5 bg-red-1 text-xs">NEW</div>
                            <div className="w-10 h-5 bg-black text-xs">
                                -10%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <h3 className="font-semibold mb-2 truncate mx-5 text-lg sm:text-sm sm:mx-2">
                        {product.name}
                    </h3>
                    <div className="text-lg flex justify-between mx-5 sm:mx-2">
                        <span className="font-medium text-base sm:text-xs">
                            {formatNumberFunc(product.price)}
                        </span>
                        <span className="ml-5 font-medium text-base text-gray-500 line-through sm:text-xs">
                            {formatNumberFunc(Math.floor(product.price * 1.1))}
                        </span>
                    </div>
                </div>

                <div className="flex justify-between mx-5 py-5 sm:mx-2">
                    <Tooltip
                        content="Thêm vào danh sách yêu thích"
                        placement="top"
                        className="bg-red-1"
                    >
                        <button
                            onClick={handleOpenModal}
                            className="text-red-1 border-solid border-[1px] border-red-200  hover:text-white hover:bg-red-1  px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
                        >
                            <i className=" fa-regular fa-heart"></i>
                        </button>
                    </Tooltip>

                    <Tooltip
                        content="Xem thông tin sản phẩm"
                        placement="top"
                        className="bg-red-1"
                    >
                        <button
                            onClick={handleOpenModal}
                            className="text-red-1 border-solid border-[1px] border-red-200  hover:text-white hover:bg-red-1  px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </Tooltip>

                    <Tooltip
                        content="Thêm vào giỏ hàng"
                        placement="top"
                        className="bg-red-1"
                    >
                        <button
                            onClick={() => handleChangeCart(product)}
                            className="text-red-1 border-solid border-[1px] border-red-200  hover:text-white hover:bg-red-1  px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
                        >
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                    </Tooltip>
                </div>
            </div>
        </>
    );
}
