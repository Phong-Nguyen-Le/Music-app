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