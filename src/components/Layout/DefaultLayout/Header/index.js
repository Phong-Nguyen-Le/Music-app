import HeaderAction from "./HeaderAction/HeaderAction";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

export default function Header() {
    return (
        <>
            <div className="fixed h-[82px] w-screen flex justify-center bg-white z-30">
                <div className="w-full max-w-[1200px] grid grid-cols-3 sm:grid-cols-2  mx-auto">
                    <div className="sm:col-span-2 ">
                        <HeaderLogo />
                    </div>
                    <div className="flex justify-center sm:col-span-2">
                        <HeaderNavbar className="w-full" />
                    </div>
                    <div className="sm:col-span-2">
                        <HeaderAction />
                    </div>
                </div>
            </div>

            <div className="h-[82px]"></div>
        </>
    );
}
