import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function Modal({open, handleOpen, product}) {
  
  return (
    <Fragment>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={open} handler={handleOpen} className='grid grid-cols-10'>
        <div className=" col-span-4">
          <img src={product.image[0]}></img>
        </div>
        <div className=" col-span-6">
        <DialogHeader>{product.name}</DialogHeader>
        <DialogBody>
          <div>{product.price}</div>
          <div className="flex items-center mb-4">
              <label
                className="mr-2 font-medium text-gray-700"
                htmlFor="quantity"
              >
                Quantity:
              </label>
              <input
                className="rounded-lg border-gray-400 py-2 px-3 w-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="quantity"
                type="number"
                defaultValue={1}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110">
              Add to Cart
            </button>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>

        </div>
      </Dialog>
    </Fragment>
  );
}