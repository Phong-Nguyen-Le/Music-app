import { Fragment } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import formatNumberFunc from "../numericFormat";
import { useState } from "react";
import CountdownTimer from "../CountdownTimer";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../pages/CartPage/CartSlice";
import { cartSelector } from "../../redux/selector";
import displayMsg from "../Toastify";
import { Alert } from "@material-tailwind/react";

export default function Modal({ open, handleOpen, product }) {
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector)[0];
    const user = useContext(AuthContext);

    const [image, setImage] = useState(product.image[0]);
    const handleSetImage = (index) => {
        setImage(product.image[index]);
    };

    const handleChangeCart = (product) => {
        if (user.email) {
            let productInfo = {
                name: product.name,
                price: product.price,
                quantity: quantity,
                image: product.image,
            };
            if (!cart.some((item) => item.name === productInfo.name)) {
                dispatch(cartSlice.actions.addProductToCart(productInfo));
            }
        } else {
            setShow(true)
        }
    };

    const [quantity, setQuantity] = useState(1);

    const [show, setShow] = useState(false);

    return (
        <Fragment>
           
            <Dialog
                open={open}
                handler={handleOpen}
                className="max-w-[60%] grid grid-cols-2 lg:max-w-[80%] md:max-w-[90%] md:h-[70%] sm:grid sm:grid-cols-1 sm:max-w-[90%] sm:h-[80%]"
            >
                <div className="p-2 max-w-[450px] flex mx-auto items-center">
                    <div className="sm:grid sm:grid-cols-5">
                        <img
                            className="w-[95%] object-cover mx-auto sm:col-span-4"
                            src={product.image[0] && image}
                        ></img>
                        <div className="grid grid-cols-4 mx-auto pt-2 sm:grid-cols-1 sm:pt-0">
                            {product.image.map((item, index) => {
                                return (
                                    <img
                                        className="w-[95%]"
                                        key={index}
                                        src={item}
                                        onClick={() => handleSetImage(index)}
                                    ></img>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <DialogHeader className="text-lg p-2 sm:text-sm">
                        {product.name}
                    </DialogHeader>
                    <DialogBody className="min-h-[60%] flex flex-col justify-between p-2 pt-0">
                        <div>
                            <div className=" text-red-1 text-base sm:text-sm">
                                {" "}
                                Giá khuyến mãi:{" "}
                                {formatNumberFunc(product.price)}
                            </div>
                            <div className="text-base sm:text-sm">
                                Giá gốc:{" "}
                                {formatNumberFunc(
                                    Math.floor(product.price * 1.1)
                                )}{" "}
                            </div>
                        </div>
                        <div>
                            <p className="sm:text-sm">
                                <strong className="text-red-600">
                                    Hurry up!
                                </strong>{" "}
                                Thời gian khyến mãi còn:
                            </p>
                            <CountdownTimer
                                targetDate={new Date("2023-04-10T00:00:00")}
                            />
                        </div>

                        {/* Mô tả nội dung sản phẩm */}
                        <div>
                            <p className="sm:text-sm">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat.
                            </p>
                        </div>

                        <div className="flex items-center mb-4">
                            <label
                                className="font-medium text-gray-700 sm:text-sm"
                                htmlFor="quantity"
                            >
                                Số lượng:
                            </label>
                            <input
                                className=" w-12 border-solid border-2 border-gray-400 px-2 mx-2 sm:text-sm"
                                id="quantity"
                                type="number"
                                onChange={(e) => setQuantity(e.target.value)}
                                min={0}
                                defaultValue={1}
                                value={quantity}
                            />
                            <Button
                                className="sm:px-4 sm:py-2"
                                variant="gradient"
                                color="green"
                                onClick={() => handleChangeCart(product)}
                            >
                                <span>Thêm vào giỏ hàng</span>
                            </Button>
                            <Alert
                                className=" absolute w-[75%] bottom-[-60px] py-2"
                                color="red"
                                show={show}
                                dismissible={{
                                    onClose: () => setShow(false),
                                }}
                            >
                               !Bạn phải đăng nhập để sử dụng giỏ hàng
                               <Button className="px-2 ml-5">Đăng nhập ngay</Button>
                            </Alert>
                        </div>
                    </DialogBody>
                    <DialogFooter className=" ">
                        <Button
                            variant="gradient"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Đóng</span>
                        </Button>
                    </DialogFooter>
                </div>
            </Dialog>
        </Fragment>
    );
}
