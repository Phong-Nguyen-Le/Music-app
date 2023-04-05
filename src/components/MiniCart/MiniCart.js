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
            className="max-w-[380px] min-w-0 h-screen p-0 m-0 absolute right-0 "
            open={openCart}
            handler={handleOpenCart}
        >
            <DialogHeader>Giỏ hàng</DialogHeader>
            <DialogBody divider>
                {cart.length == 0 ? (
                    <div className="text-center">
                        Chưa có sản phẩm nào trong giỏ hàng
                    </div>
                ) : (
                    cart.map((product) => {
                        let { name, image, price, quantity } = product;
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
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 h-96">
      <img className="h-48 w-full object-cover" src="https://via.placeholder.com/300x200" alt="Product" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">Product Name</h2>
        <p className="text-gray-700 text-base">Product description goes here.</p>
        <div className="mt-4">
          <span className="text-gray-700 font-bold text-xl">$19.99</span>
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>

            <DialogFooter className="flex flex-col">
                <Link className="w-full h-full" to="/cartpage">
                    <Button className="w-full" onClick={handleOpenCart}>
                        Xem chi tiết giỏ hàng
                    </Button>
                </Link>
                <Button
                    className="w-full"
                    variant="gradient"
                    color="red"
                    onClick={handleOpenCart}
                >
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
