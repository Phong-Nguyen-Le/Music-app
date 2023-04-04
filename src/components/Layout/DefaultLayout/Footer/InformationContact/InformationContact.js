export default function InformationContact() {
    return (
        <div className="h-full flex flex-col justify-between">
            <h5 className="text-lg font-semibold">My Account</h5>
            <div className="flex items-center">
                <i className="fa-solid fa-location-dot"></i>
                <p className="pl-3 text-base">
                    28 Mai Chi Tho, An Phu Ward, District 2, Ho Chi Minh City
                </p>
            </div>
            <div className="flex items-center">
                <i className="fa-regular fa-envelope"></i>
                <p className="pl-3 text-base">Mail Us: yourmail@gmail.com</p>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-phone"></i>
                <p className="pl-3 text-base">Phones: (012) 800 456 789-987</p>
            </div>
            <div className="py-2">
                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/payment-pic.png"></img>
            </div>
        </div>
    );
}
