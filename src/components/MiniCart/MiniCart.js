import { Link } from "react-router-dom";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/selector";
import formatNumberFunc from "../numericFormat";




export default function MiniCart({ openCart, handleOpenCart }) {
    const cart = useSelector(cartSelector)[0];

    return (
        <Dialog
            className="max-w-[380px] min-w-0 h-screen p-0 m-0 absolute right-0  max-h-screen overflow-y-scroll"
            open={openCart}
            handler={handleOpenCart}
        >
            <DialogHeader>Giỏ hàng</DialogHeader>
            <DialogBody divider className="">
                {cart.length == 0 ? (
                    <div className="text-center">
                        Chưa có sản phẩm nào trong giỏ hàng
                    </div>
                ) : (
                    cart.map((product) => {
                        let { name, image, price} = product;
                        return (
                            <div className="flex py-2">
                                <img
                                    className="w-24 h-24 border-2 border-solid"
                                    src={image[0]}
                                ></img>
                                <div className="pl-2 text-black text-sm">
                                    <h3 className="h-[40px] overflow-hidden text-ellipsis">
                                        {name}
                                    </h3>
                                    <p className="pt-2">
                                        Giá: {formatNumberFunc(price)}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
                
            </DialogBody>
           

            <DialogFooter className="flex flex-col">
                <Link className="w-full h-full" to="/cartpage">
                    <Button className="w-full">
                        Xem chi tiết giỏ hàng
                    </Button>
                </Link>
                <Button
                    className="w-full"
                    variant="gradient"
                    color="red"
                    onClick={handleOpenCart}
                >
                    <span>Đóng</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
