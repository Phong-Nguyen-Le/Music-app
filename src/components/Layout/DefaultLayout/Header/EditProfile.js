import { Fragment, useState, useContext, useRef } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import { AuthContext } from "../../../Context/AuthProvider";
import firebase from 'firebase/compat/app';
import { useNavigate } from "react-router";

export default function EditProfile({ open, handleOpen }) {
    const user = useContext(AuthContext);
    
    const { displayName, email, uid, photoURL } = user;
    const navigate = useNavigate()
    const nameRef = useRef()
    const photoRef = useRef()

   
    console.log(displayName,photoURL )
   

    const handleSubmit = () => {
      let usernow =firebase.auth().currentUser
      usernow.updateProfile({
        displayName: nameRef.current.value,
        photoURL:photoRef.current.value
    })
        navigate(0) 
    }

    return (
        <Fragment>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Chỉnh sửa thông tin</DialogHeader>
                    <DialogBody divider>
                        <div className="mb-4 flex flex-col gap-6">
                            <p>{displayName}</p>
                            <Input size="lg" label="Tên" inputRef={nameRef}/>
                            <Input size="lg" label="Email" inputRef={photoRef}/>
                        </div>
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
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={handleSubmit}
                            type="submit"
                        >
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </form>
        </Fragment>
    );
}
