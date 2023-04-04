import HeaderAction from "./HeaderAction/HeaderAction";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

export default function Header() {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-2">
            <div className="">
                <HeaderLogo />
            </div>
            <div>
                <HeaderAction />
            </div>
            <div className="col-span-2 flex justify-center">
                <HeaderNavbar className="w-full"/>
            </div>
        </div>
    );
}
