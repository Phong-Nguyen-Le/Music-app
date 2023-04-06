import { useState, Fragment, useContext } from "react";
import { 
    Button,
} from "@material-tailwind/react";
import MiniCart from "../../../../MiniCart/MiniCart";
import UserInfo from "../../../../UserInfo/UserInfo";

import { AuthContext } from "../../../../Context/AuthProvider";
import Alert from "../../../../Alert/Alert";
import MoveableButton from "../../../../MoveButton";



export default function HeaderAction() {
    const user = useContext(AuthContext)
    


    const [openCart, setOpenCart] = useState(false);
    const handleOpenCart = () => {
        if(user.email) {
            setOpenCart(!openCart);
        } else {setShownAlert(true)}
    }
    const [shownAlert, setShownAlert] = useState(false);
    const handleShownAlert = () => {
        setShownAlert(!shownAlert)
    }
    console.log(`showAlert`, shownAlert)




    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleTouchStart(event) {
      event.preventDefault();
      const startX = event.touches[0].clientX - position.x;
      const startY = event.touches[0].clientY - position.y;
  
      function handleTouchMove(event) {
        const x = event.touches[0].clientX - startX;
        const y = event.touches[0].clientY - startY;
        setPosition({ x, y });
      }
  
      function handleTouchEnd() {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
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

               {shownAlert&& <Alert handleShown={handleShownAlert}/>}
            </div>
            
            {/* <MoveableButton /> */}


            <button
                className="hidden absolute bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-full transition duration-300 ease-in-out sm:block left-0 top-[340px]"
                onClick={handleOpenCart}
                onTouchStart={handleTouchStart}
                variant="gradient"
                style={{ top: position.y + 'px', left: position.x + 'px' }}
            >
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </>
    );
}
