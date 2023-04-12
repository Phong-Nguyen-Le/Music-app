import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
    Navbar,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function HeaderNavbar() {
    return (
        <>
            <div className=" flex items-center justify-center sm:h-8 sm:w-full sm:justify-between mx-10">            
                        <Link to="/">
                            <button className="w-[80px] font-header sm:w-12 &sm:text-xs sm:h-8">
                                HOME
                            </button>
                        </Link>

                        <Link to='/shop'>
                            <button className="w-[80px] font-header sm:w-12 sm:text-xs sm:h-8">
                                SHOP
                            </button>
                        </Link>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            <Menu>
                                <MenuHandler>
                                    <button
                                        className="w-[90px] font-header sm:w-13 sm:text-xs sm:h-8"
                                    >
                                        ABOUT US
                                    </button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Menu Item 1</MenuItem>
                                    <MenuItem>Menu Item 2</MenuItem>
                                    <MenuItem>Menu Item 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </Typography>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <Menu>
                                <MenuHandler>
                                    <button
                                        className="w-[80px] font-header sm:w-12 sm:text-xs sm:h-8"
                                        variant="gradient"
                                    >
                                        CONTACT
                                    </button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Menu Item 1</MenuItem>
                                    <MenuItem>Menu Item 2</MenuItem>
                                    <MenuItem>Menu Item 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </Typography>
            </div>
        </>
    );
}
