import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Alert,
} from "@material-tailwind/react";
import React, { useRef, useState, useMemo } from "react";
import firebase, { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthProvider";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
    const navigate = useNavigate();
    const user = useContext(AuthContext);

    //   Đăng nhập bằng mật khẩu và password
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
       
       
        e.preventDefault();
        console.log(emailRef.current.value)
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await createUserWithEmailAndPassword(auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            navigate("/login");
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
    }

    return (
        <>
            <div className="h-screen flex justify-center mt-[200px]">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Đăng ký
                    </Typography>
                    {error && <Alert color="red">{error}</Alert>}
                    <form
                        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4 flex flex-col gap-6">
                            <Input size="lg" label="Email" inputRef={emailRef} />
                            <Input
                                type="password"
                                size="lg"
                                label="Mật khẩu"
                                inputRef={passwordRef}
                            />
                            <Input
                                type="password"
                                size="lg"
                                label="Nhập lại Mật khẩu"
                                inputRef={passwordConfirmRef}
                            />
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
                        <Button
                            disabled={loading}
                            className="mt-6"
                            fullWidth
                            type="submit"
                        >
                            Đăng ký
                        </Button>
                        <Button
                            className="mt-6"
                            fullWidth
                            onClick={() => navigate("/")}
                        >
                            Để sau
                        </Button>
                        <Typography
                            color="gray"
                            className="mt-4 text-center font-normal"
                        >
                            Đã có tài khoản?{" "}
                            <Link
                                href="#"
                                to='/login'
                                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                            >
                                Đăng nhập
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
        </>
    );
}
