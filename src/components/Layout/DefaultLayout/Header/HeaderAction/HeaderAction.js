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
            <div className="flex items-center justify-end">
                <div className=" mx-5">
                    <Popover>
                        <PopoverHandler>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </PopoverHandler>
                        <PopoverContent>
                            Type search text here...
                        </PopoverContent>
                    </Popover>
                </div>
               
                <UserInfo />
             
                {/* Cart */}
                <Fragment >
                    <Button className="mx-5" onClick={handleOpenCart} variant="gradient">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                    <MiniCart openCart={openCart} handleOpenCart={handleOpenCart}/>
                </Fragment>

                <div className="mx-5">
                    <Menu>
                        <MenuHandler>
                            <Button variant="gradient">
                                <i className="fa-solid fa-bars"></i>
                            </Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Menu Item 1</MenuItem>
                            <MenuItem>Menu Item 2</MenuItem>
                            <MenuItem>Menu Item 3</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </>
    );
}
