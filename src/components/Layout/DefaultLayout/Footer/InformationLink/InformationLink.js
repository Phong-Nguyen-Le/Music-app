

export default function Informationlink() {
  return (
    <div className="h-full grid grid-cols-3 pl-28">
      <div className="flex flex-col justify-between px-10">
        <h5 className="text-lg font-semibold">Categories</h5>
        <a>Ecommerce</a>
        <a>Shopify</a>
        <a>Prestashop</a>
        <a>Opencart</a>
        <a>Magento</a>
      </div>
      <div className="flex flex-col justify-between px-10">
        <h5 className="text-lg font-semibold">Information</h5>
        <a>Home</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Exchanges</a>
        <a>Shipping</a>
      </div>
      <div className="flex flex-col justify-between px-10">
        <h5 className="text-lg font-semibold">Quick Links</h5>
        <a>Store Location</a>
        <a>My Account</a>
        <a>Orders Tracking</a>
        <a>Size Guide</a>
        <a>Contact Us</a>
      </div>

    </div>
  )
}