import { toast, Bounce } from "react-toastify";
import { Link } from "react-router-dom";

const Msg = ({ content, type }) => (
    <div>
        <p
            className={`text-center font-bold ${
                (type && "text-green-500") || " text-red-700"
            }`}
        >
            {content}
        </p>
        <div className="grid grid-cols-2">
            {!type && (
                <>
                    <Link to="/login">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-light py-2 px-1 rounded">
                            Đăng nhập ngay
                        </button>
                    </Link>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-light py-2 px-1 rounded">
                        Để lúc khác
                    </button>
                </>
            )}
        </div>
    </div>
);

export default function displayMsg(toastContent, type, timeToClose) {
    toast(<Msg content={toastContent} type={type} />, {
        className: "toast-message",
        autoClose: timeToClose,
        transition: Bounce,
        zIndex: 9999,
    });
}
