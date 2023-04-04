export default function StorePolicy() {
    const policyItems = [
        {
            img: "https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/free_shipping.png",
            title: "FREE SHIPPING",
            description: "Free shipping all order",
        },
        {
            img: "https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/support247.png",
            title: "SUPPORT 24/7",
            description: "Support 24 hours a day",
        },
        {
            img: "https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/money_back.png",
            title: "MONEY RETURN",
            description: "30 days for free return",
        },
        {
            img: "https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/promotions.png",
            title: "ORDER DISCOUNT",
            description: "On every order over $15",
        },
    ];

    return (
        <div className=" grid grid-cols-4 m-pri-marginTop sm:grid sm:grid-cols-2 sm:mt-5">
            {policyItems.map((item, index) => {
                return (
                    <div key={index} className="flex items-center px-5 sm:px-2 sm:py-3">
                        <img className=" sm:w-[30px]" src={item.img}></img>
                        <div className="pl-4">
                            <h5 className="font-medium sm:text-xs">{item.title}</h5>
                            <p className="sm:text-xs">{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
