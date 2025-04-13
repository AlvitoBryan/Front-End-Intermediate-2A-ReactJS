import React, { useEffect } from 'react'
import AuthForm from "../../components/AuthForm";
import AuthFormContentWrapper from "../../components/AuthFormContentWrapper";
import AuthHeader from "../../components/AuthHeader";
import { Button, GoogleLogin } from "../../components/Button";
import { FormInput, InputPassword, InputDropdown, InputNoHP } from "../../components/FormInput";
import Navigation from "../../components/NavigationBar";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
          document.title = "Register | videobelajar"
      })
  return (
    <>
      <Navigation/>
      <AuthForm>
                <AuthHeader
                    title="Pendaftaran Akun"
                    subtitle="Yuk, daftarkan akunmu sekarang juga!"
                />

                <AuthFormContentWrapper
                    inputs={[
                        <FormInput id="namaLengkap-input" label="Nama Lengkap" name="namalengkap" required type="text"  />,
                        <FormInput id="register-email-input" label="E-Mail" name="email" required type="text"  />,
                        <InputDropdown id="kelamin-input" label="Jenis Kelamin" name="jeniskelamin" required type="text"  />,
                        <InputNoHP/>,
                        <InputPassword id="kataSandi-input" label="Kata Sandi" name="katasandi" required type="password"  />,
                        <InputPassword id="konfirmasiKataSandi-input" label="Konfirmasi Kata Sandi" name="konfirmasikatasandi" required type="password"  />

                    ]}
                    buttons={[
                        <Button text="Daftar" onclick={() => navigate('/')}/>,
                        <Button onclick={() => navigate('/login')}/>,
                        <GoogleLogin/>  
                    ]}
                />

            </AuthForm>
    </>
  )
}

export default Register
