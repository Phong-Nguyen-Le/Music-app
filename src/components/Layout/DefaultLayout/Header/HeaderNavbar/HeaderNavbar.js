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
            <div className="">
                <Navbar className="max-w-[1200px]">
                    <ul className="flex justify-center items-center">
                        <Link to="/">
                            <Button className="w-[120px]" variant="gradient">
                                HOME
                            </Button>
                        </Link>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        className="w-[120px]"
                                        variant="gradient"
                                    >
                                        BLOGS
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Menu Item 1</MenuItem>
                                    <MenuItem>Menu Item 2</MenuItem>
                                    <MenuItem>Menu Item 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </Typography>
                        <Link to='/shop'>
                            <Button className="w-[120px]" variant="gradient">
                                SHOP
                            </Button>
                        </Link>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal"
                        >
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        className="w-[120px]"
                                        variant="gradient"
                                    >
                                        ABOUT US
                                    </Button>
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
                                    <Button
                                        className="w-[120px]"
                                        variant="gradient"
                                    >
                                        CONTACT
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Menu Item 1</MenuItem>
                                    <MenuItem>Menu Item 2</MenuItem>
                                    <MenuItem>Menu Item 3</MenuItem>
                                </MenuList>
                            </Menu>
                        </Typography>
                    </ul>
                </Navbar>
            </div>
        </>
    );
}
