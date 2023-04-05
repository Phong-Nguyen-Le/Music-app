export default function InformationContact() {
    return (
        <div className="h-full flex flex-col justify-between sm:mx-5 ">
            <h5 className="text-lg font-semibold sm:pb-5">My Account</h5>
            <div className="flex items-center sm:pb-5">
                <i className="fa-solid fa-location-dot"></i>
                <p className="pl-3 text-base">
                    28 Mai Chi Tho, An Phu Ward, District 2, Ho Chi Minh City, Viet Nam
                </p>
            </div>
            <div className="flex items-center sm:pb-5">
                <i className="fa-regular fa-envelope"></i>
                <p className="pl-3 text-base">Mail Us: yourmail@gmail.com</p>
            </div>
            <div className="flex items-center sm:pb-5">
                <i className="fa-solid fa-phone"></i>
                <p className="pl-3 text-base">Phones: (012) 0973 857 045</p>
            </div>
            <div className="py-2 sm:mx-auto sm:pb-5">
                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/payment-pic.png"></img>
            </div>
        </div>
    );
}
