import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selector";
import { cartSlice } from "../CartSlice";
import formatNumberFunc from "../../../components/numericFormat";

export default function DetailCart() {
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector)[0];

    console.log(cart);
    const boderStyle = "border-solid border-2 border-[#494a4b6c]";

    const handleDecreaseItem = (quantity, nameItem) => {
        if (quantity > 1) {
            dispatch(
                cartSlice.actions.decreaseQuantityProduct([nameItem, quantity])
            );
        } else if (quantity === 1) {
            dispatch(cartSlice.actions.removeProductFromCart(nameItem));
        }
    };

    const handleIncreaseItem = (quantity, nameItem) => {
        dispatch(
            cartSlice.actions.increaseQuantityProduct([nameItem, quantity])
        );
    };
    const handleRemoveItem = (nameItem) => {
        dispatch(cartSlice.actions.removeProductFromCart(nameItem));
    };

    return (
        <div>
            {cart.length == 0 ? (
                <div className="text-center text-xl text-red-1">
                    Chưa có sản phẩm nào được thêm vào giỏ hàng
                </div>
            ) : (
                <table className="w-full border-solid border-2 border-[#494a4b6c]">
                    <tr className={`${boderStyle}`}>
                        <th className={`${boderStyle}`}>THUMBNAIL</th>
                        <th className={`${boderStyle}`}>PRODUCT</th>
                        <th className={`${boderStyle}`}>PRICE</th>
                        <th className={`${boderStyle}`}>QUANTITY</th>
                        <th className={`${boderStyle}`}>TOTAL</th>
                        <th className={`${boderStyle}`}>REMOVE</th>
                    </tr>
                    {cart.map((product, index) => {
                        let { name, image, price, quantity } = product;
                        return (
                            <tr
                                id={index}
                                className={`${boderStyle} text-center`}
                            >
                                <td
                                    className={`${boderStyle} text-center w-[140px] h-[140px]`}
                                >
                                    <img
                                        className="w-[100px] h-[100px] mx-auto"
                                        src={image[0]}
                                    />
                                </td>
                                <td
                                    className={`${boderStyle} text-left w-[450px]`}
                                >
                                    {name}
                                </td>
                                <td className={`${boderStyle}`}>{formatNumberFunc(price)}</td>
                                <td className={`${boderStyle}`}>
                                    <div
                                        className={`${boderStyle} w-[60%] mx-auto`}
                                    >
                                        <button
                                            onClick={() =>
                                                handleDecreaseItem(
                                                    quantity,
                                                    name
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <span className="mx-5">{quantity}</span>
                                        <button
                                            onClick={() =>
                                                handleIncreaseItem(
                                                    quantity,
                                                    name
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </td>
                                <td className={`${boderStyle}`}>
                                    {formatNumberFunc(price * quantity)}
                                </td>
                                <td
                                    className={`${boderStyle}`}  
                                >
                                    <i className="fa-regular fa-trash-can text-xl"  onClick={() => handleRemoveItem(name)}></i>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            )}
        </div>
    );
}
