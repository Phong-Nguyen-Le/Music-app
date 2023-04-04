import Modal from "../Modal/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../pages/CartPage/CartSlice";
import { cartSelector } from "../../redux/selector";

export default function ProductCard({ product }) {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(!openModal);

    const dispatch = useDispatch();
    const cart = useSelector(cartSelector)[0];

    const handleChangeCart = (product) => {
        let productInfo = {
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
        };
        if (!cart.some((item) => item.name === productInfo.name)) {
            dispatch(cartSlice.actions.addProductToCart(productInfo));
        }
    };

    return (
        <div className="m-pri-marginX">
            <Modal
                className="hidden"
                product={product}
                open={openModal}
                handleOpen={handleOpenModal}
            />
            <div className="border-solid border-2">
                <div className="w-[250px] aspect-[1/1] mx-auto relative">
                    <img
                        className=" mx-auto object-cover"
                        src={product.image[0]}
                    ></img>
                    <div className="absolute flex flex-col top-5 text-white">
                        <div className="w-10 h-5 bg-red-700 text-xs">NEW</div>
                        <div className="w-10 h-5 bg-red-700 text-xs">10%</div>
                    </div>

                    <div className=" absolute top-5 right-5 flex flex-col ">
                        <span>
                            <i className="fa-regular fa-heart"></i>
                        </span>
                        <span onClick={handleOpenModal}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <span onClick={() => handleChangeCart(product)}>
                            <i className="fa-solid fa-cart-plus"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <h3 className="text-lg truncate">{product.name}</h3>
                <div className="text-lg">
                    <span className="font-medium">{product.price}</span>
                    <span className="ml-5 font-medium text-gray-500 line-through">
                       {Math.floor(product.price*1.1)}
                    </span>
                </div>
            </div>
        </div>
    );
}
