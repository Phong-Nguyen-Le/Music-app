import HeaderAction from "./HeaderAction/HeaderAction";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

export default function Header() {
    return (
        <div className=" relative max-w-[1200px] mx-auto grid grid-cols-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
                <HeaderLogo />
            </div>
            <div className="flex justify-center sm:col-span-2">
                <HeaderNavbar className="w-full"/>
            </div>
            <div className="">
                <HeaderAction />
            </div>
        </div>
    );
}
