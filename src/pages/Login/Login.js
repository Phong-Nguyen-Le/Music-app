import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Alert
} from "@material-tailwind/react";
import React, { useRef, useState } from "react"
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthProvider";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'


const fbProvider = new FacebookAuthProvider()
const GgProvider = new GoogleAuthProvider()

export default function Login() {
  

  const navigate = useNavigate();
  const user = useContext(AuthContext)

  const handleFbLogin = async () => {
       const data = await signInWithPopup(auth,fbProvider)   
  }

  const handleGgLogin = async() => {
    const data = await signInWithPopup(auth,GgProvider)
  }
  

//   Đăng nhập bằng mật khẩu và password
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
 
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signInWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value)
        // navigate("/")
    } catch {
      setError("Failed to log in")
    }
    
    setLoading(false)
  }

    return (
      <>
        {!user.email?(<div className="h-screen flex justify-center mt-[200px]">
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Đăng nhập
            </Typography>
            {error && <Alert color="red">{error}</Alert>}
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Email" inputRef={emailRef}/>
                    <Input type="password" size="lg" label="Password" inputRef={passwordRef}/>
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-blue-500"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button disabled={loading} className="mt-6" fullWidth type="submit">
                    Đăng nhập 
                </Button>
                <Button className="mt-6" fullWidth onClick={handleGgLogin}>
                    Đăng nhập bằng google
                </Button>
                <Button className="mt-6" fullWidth onClick={handleFbLogin}>
                    Đăng nhập bằng Facebook
                </Button>
                <Button className="mt-6" fullWidth onClick={() => navigate('/')}>
                    Để sau
                </Button>
                <Typography
                    color="gray"
                    className="mt-4 text-center font-normal"
                >
                    Chưa có tài khoản?{" "}
                    <Link to='/signup'
                    href="#"
                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Đăng ký tại đây         
                    </Link>
                </Typography>
            </form>
        </Card>
    </div>): navigate('/')}
      
      </>
    );
}
