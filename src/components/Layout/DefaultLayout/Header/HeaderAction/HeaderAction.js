import { useState, Fragment, useContext } from "react";
import { 
    Button,
} from "@material-tailwind/react";
import MiniCart from "../../../../MiniCart/MiniCart";
import UserInfo from "../../../../UserInfo/UserInfo";
import { AuthContext } from "../../../../Context/AuthProvider";
import Alert from "../../../../Alert/Alert";
import displayMsg from "../../../../Toastify";


export default function HeaderAction() {
    const user = useContext(AuthContext)
    


    const [openCart, setOpenCart] = useState(false);
    const handleOpenCart = () => {
        if(user.email) {
            setOpenCart(!openCart);
            setIsDragging(true)
        } else {
            displayMsg('!!!Bạn phải đăng nhập để sử dụng giỏ hàng!', false , 3000)
            setIsDragging(!isDragging)
        }
    }
    const [shownAlert, setShownAlert] = useState(false);
    const handleShownAlert = () => {
        setIsDragging(!isDragging)
    }




    const [position, setPosition] = useState({ x: 20, y: 220 });
    const [isDragging, setIsDragging] = useState(false);
    const buttonSize = 64; // change this value to adjust the size of the button


    function handleTouchStart(event) {
        setIsDragging(true);
      const startX = event.touches[0].clientX - position.x;
      const startY = event.touches[0].clientY - position.y;
  
      function handleTouchMove(event) {
        if (event.cancelable) {
            event.stopImmediatePropagation();
          }
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const maxX = screenWidth - buttonSize;
        const maxY = screenHeight - buttonSize;
  
        let x = event.touches[0].clientX - startX;
        let y = event.touches[0].clientY - startY;
  
        // Make sure the button doesn't move out of the screen
        x = Math.min(Math.max(x, 10), maxX);
        y = Math.min(Math.max(y, 10), maxY);
  
        setPosition({ x, y });
      }
  
      function handleTouchEnd() {
        setIsDragging(false);
        event.preventDefault();
        document.removeEventListener('touchmove', handleTouchMove,  { passive: false });
        document.removeEventListener('touchend', handleTouchEnd, { passive: false });
      }
  
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    



    return (
        <>
            <div className="h-full flex items-center justify-end sm:flex-col sm:absolute sm:right-0 sm:top-0 sm:justify-center">
                <UserInfo />

                {/* Cart */}
                <Fragment>
                    <Button
                        className="mx-5 sm:mx-0 sm:px-4 sm:py-1 sm:hidden"
                        onClick={handleOpenCart}
                        variant="gradient"
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Button>

                    <MiniCart
                        openCart={openCart}
                        handleOpenCart={handleOpenCart}
                    />
                </Fragment>

               {shownAlert&&<Alert handleShown={handleShownAlert}/>}
            </div>
            
            {/* <MoveableButton /> */}


            <button
                className={`hidden fixed bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded-full transition duration-300 ease-in-out sm:block left-0 top-[340px] ${
                    isDragging ? 'opacity-100' : 'opacity-50'} transition-opacity`}
                onClick={handleOpenCart}
                onTouchStart={handleTouchStart}
                variant="gradient"
                style={{ top: position.y + 'px', left: position.x + 'px',  zIndex: 999}}
            >
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </>
    );
}
