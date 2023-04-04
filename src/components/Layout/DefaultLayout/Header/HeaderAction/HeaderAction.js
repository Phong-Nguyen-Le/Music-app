import { useState, Fragment } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import MiniCart from "../../../../MiniCart/MiniCart";
import UserInfo from "../../../../UserInfo/UserInfo";

export default function HeaderAction() {
  
    const [openCart, setOpenCart] = useState(false);
    const handleOpenCart = () => setOpenCart(!openCart);

    

    return (
        <>
            <div className="h-full flex items-center justify-end sm:flex-col sm:absolute sm:right-0 sm:top-0 sm:justify-center">  
                <UserInfo />
             
                {/* Cart */}
                <Fragment >
                    <Button className="mx-5 sm:mx-0 sm:px-4 sm:py-1" onClick={handleOpenCart} variant="gradient">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                    <MiniCart openCart={openCart} handleOpenCart={handleOpenCart}/>
                </Fragment>
                
            </div>
        </>
    );
}
