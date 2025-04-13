import { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import AuthFormContentWrapper from "../../components/AuthFormContentWrapper";
import AuthHeader from "../../components/AuthHeader";
import { Button, GoogleLogin } from "../../components/Button";
import { FormInput, InputPassword } from "../../components/FormInput";
import Navigation from "../../components/NavigationBar";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
            document.title = "Login | videobelajar"
        })
    return(
        <>
            <Navigation/>
            <AuthForm>
                <AuthHeader
                    title="Masuk ke Akun"
                    subtitle="Yuk, lanjutin belajarmu di videobelajar."
                />

                <AuthFormContentWrapper
                    inputs={[
                        <FormInput id="login-email-input" label="E-Mail" name="email" required type="text"  />,
                        <InputPassword id="password-input" label="Password" name="password" required type="password"  />

                    ]}
                    buttons={[
                        <Button onclick={() => navigate('/')} />,
                        <Button text="Daftar" onclick={() => navigate('/register')}/>,
                        <GoogleLogin/>  
                    ]}
                />

            </AuthForm>
            
            
        </>
    )
}

export default Login;