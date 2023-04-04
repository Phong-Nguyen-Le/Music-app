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
        <div className=" flex justify-center items-center m-pri-marginTop">
            {policyItems.map((item, index) => {
                return (
                    <div key={index} className="flex items-center px-5">
                        <img className="animate-spin-slow" src={item.img}></img>
                        <div className="pl-4">
                            <h5 className=" font-medium">{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
