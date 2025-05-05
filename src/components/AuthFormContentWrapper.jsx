import React, { useState } from "react";

const AuthFormContentWrapper = ({ inputs, buttons }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDaftar = (e) => {
    e.preventDefault();

    // Validasi konfirmasi kata sandi
    if (e.target.katasandi.value !== e.target.konfirmasikatasandi.value) {
      setShowPopup(true);
      return;
    }

    // Ambil data dari form
    const dataBaru = {
      namalengkap: e.target.namalengkap.value,
      email: e.target.email.value,
      jeniskelamin: e.target.jeniskelamin.value,
      noHp: e.target.noHp.value,
      katasandi: e.target.katasandi.value,
      konfirmasikatasandi: e.target.konfirmasikatasandi.value,
    };

    // Ambil array user dari localStorage, jika belum ada, buat array kosong
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Tambahkan data baru ke array
    users.push(dataBaru);

    // Simpan kembali ke localStorage
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "/";
  };
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-center
            animate-popup-show">
            <span className="text-red-500 text-2xl mb-2">&#9888;</span>
            <p className="text-gray-800 text-center mb-4 font-semibold">Konfirmasi kata sandi tidak sama dengan kata sandi!</p>
            <button
              className="px-4 py-2 bg-[rgba(226,252,217,0.80)] font-semibold text-[#3ECF4C] rounded hover:bg-[#3ECF4C] hover:text-white transition"
              onClick={() => setShowPopup(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <form
        onSubmit={handleDaftar}
        className="flex flex-col items-start gap-[24px] w-full max-w-[518px]"
      >
        <div className="flex flex-col items-start gap-[24px] w-full max-w-[518px]">
          <div className="flex flex-col items-end gap-[16px] w-full max-w-[518px]">
            {inputs[0]}
            {inputs[1]}
            {inputs[2]}
            {inputs[3]}
            {inputs[4]}
            {inputs[5]}
            <a className="text-[#4A505C] text-center self-end cursor-pointer font-[DM_Sans] text-[0.875rem] sm:text-base font-medium leading-[140%] tracking-[0.2px] hover:underline ">
              Lupa Password?
            </a>
          </div>

          <div className="flex flex-col item-start gap-[16px] w-full max-w-[518px]">
            {buttons[0]}
            {buttons[1]}
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full h-[22px]">
          <hr className="absolute w-full h-[2px] bg-[#F1F1F1] outline-none border-none"></hr>
          <div className="bg-[#FFF] relative flex p-[0px_8px] h-[22px] text-center">
            <p className="text-[#4A505C] text-center font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.2px]">
              Atau
            </p>
          </div>
        </div>
        {buttons[2]}
      </form>
    </>
  );
};

export default AuthFormContentWrapper;

// Tambahkan style untuk animasi popup
const style = document.createElement('style');
style.innerHTML = `
@keyframes popup-show {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-popup-show {
  animation: popup-show 0.3s cubic-bezier(0.4,0,0.2,1);
}
`;
if (typeof document !== 'undefined' && !document.getElementById('popup-anim-style')) {
  style.id = 'popup-anim-style';
  document.head.appendChild(style);
}
