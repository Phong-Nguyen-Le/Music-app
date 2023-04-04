import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import { auth, db } from "../../firebase/config";
import { useContext,useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditProfile from "../Layout/DefaultLayout/Header/EditProfile";

import firebase from 'firebase/compat/app';

export default function UserInfo() {

 
    // let auth2 =  getIdToken()
    const user = useContext(AuthContext);
    const navigate = useNavigate();




    const handleSignOut = async() => {
      let signOut =  await auth.signOut()
      navigate(0)
    }
    
    const [openEditProfile, setOpenEditProfile] = useState(false);
    const handleOpenEditProfile = () => setOpenEditProfile(!openEditProfile);
    return (
        <div className="mx-5 flex items-center justify-center w-[50px] sm:w-[35px]">
            {!user.email? (
              <Link to='/login'>
                <Button className="sm:px-3 sm:py-1">Đăng nhập</Button>
              </Link>
            ) : (
                <Menu>
                    <EditProfile open={openEditProfile} handleOpen={handleOpenEditProfile} />
                    <MenuHandler>
                        <Avatar
                            src={user.photoURL}
                            alt="avatar"
                            variant="circular"
                            className="sm:w-[35px] sm:h-[35px]"
                        />
                    </MenuHandler>
                    <MenuList>
                        <MenuItem className="flex items-center gap-2">
                            <Typography variant="small" className="font-normal">
                                {user.displayName||user.email}
                            </Typography>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2">
                            <Typography variant="small" className="font-normal" onClick={handleOpenEditProfile}>
                                Chỉnh sửa Profile
                            </Typography>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2">
                            <Typography variant="small" className="font-normal">
                                Inbox
                            </Typography>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2">
                            <Typography variant="small" className="font-normal">
                                Trợ giúp
                            </Typography>
                        </MenuItem>
                        <hr className="my-2 border-blue-gray-50" />
                        <MenuItem
                            className="flex items-center gap-2 "
                            onClick={handleSignOut}
                        >
                            <Typography variant="small" className="font-normal">
                                Đăng xuất
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </div>
    );
}
