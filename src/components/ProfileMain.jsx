import { ButtonSimpanProfile, ButtonHapusProfile } from "./Button";
const ProfileMain = () => {
    return(
        <div className="flex p-[24px] w-full max-w-[872px] flex-col itmes-end gap-[24px] flex-1 rounded-[10px] border border-[rgba(58,53,65,0.12)] bg-[#FFF]">
            <div className="flex items-center gap-[16px] self-stretch">
                <img className="flex w-[92px] h-[92px] flex-col justify-center items-center rounded-[4px] " src="/images/default_profile_pict.svg" alt="default_profile_pict"/>

                <div className="flex flex-col items-start gap-[8px]">
                    <h2 className="text-[#222325] text-center font-[Poppins] text-xl font-semibold leading-[120%]">Jennie Ruby Jane</h2>
                    <h3 className="text-[#222325] text-center font-[DM_Sans] text-lg font-normal leading-[140%] tracking-[0.02px]">rubyjane@gmail.com</h3>
                    <h3 className="text-[#F64920] text-center font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.02px]">Ganti Foto Profil</h3> 
                </div>
            </div>

            <hr className="h-[1px] w-full self-stretch border border-[rgba(58,53,65,0.12)]" />

            <form className="flex flex-col items-end gap-[16px] self-stretch">
                <div className="flex items-start gap-[16px] self-stretch">
                    <div className="relative w-full max-w-[264px]">
                        <label className="absolute -top-3 left-4 bg-white px-2 text-[#3ECF4C] text-sm font-medium leading-[140%] tracking-[0.02px]">
                            Nama Lengkap
                        </label>
                        <input type="text" value="Jennie Ruby Jane" className="flex h-[49px] w-full p-[0px_17px] flex-col justify-center items-start self-stretch rounded-[10px] border-[1.5px] border-[#3ECF4C] bg-[#FFF] text-[#222325] font-[DM_Sans] text-base font-normal leading-[140%] tracking-[0.02px]"/>
                    </div>
                    
                    <div className="relative w-full max-w-[264px]">
                        <label className="absolute -top-3 left-4 bg-white px-2 text-[rgba(51,51,51,0.68)] text-sm font-medium leading-[140%] tracking-[0.02px]">
                            E-Mail
                        </label>
                        <input type="text" value="rubyjane@gmail.com" className="flex h-[49px] w-full p-[0px_17px] flex-col justify-center items-start self-stretch rounded-[10px] border-[1.5px] border-[rgba(58,53,65,0.12)] bg-[#FFF] text-[#222325] font-[DM_Sans] text-semibold font-normal leading-[140%] tracking-[0.02px]"/>
                    </div>
                    
                    <div className="flex flex-start gap-[16px] flex-1">
                        <div className="w-full max-w-[90px]">
                            <div className="flex h-[48px] p-[0px_12px] flex-col items-start rounded-[6px] border border-[rgba(58,53,65,0.12)] bg-[#FF]">
                                <div className="flex p-[12px_0px_12px_5px] items-center gap-[8px]">
                                    <p className="text-[rgba(51,51,51,0.68)] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.02px]">+62</p>
                                    <img src="/images/ArrowDropDown.svg" alt="arrow-down" />
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full max-w-[158px]">
                        <label className="absolute -top-3 left-4 bg-white px-2 text-[rgba(51,51,51,0.68)] text-sm font-medium leading-[140%] tracking-[0.02px]">
                            No. Hp
                        </label>
                        <input type="text" value="81234567890" className="flex h-[49px] w-full p-[0px_17px] flex-col justify-center items-start self-stretch rounded-[10px] border-[1.5px] border-[rgba(58,53,65,0.12)] bg-[#FFF] text-[#222325] font-[DM_Sans] text-semibold font-normal leading-[140%] tracking-[0.02px]"/>
                    </div>
                    </div>
                </div>

                <div className="flex gap-[16px]">
                    <ButtonHapusProfile/>
                    <ButtonSimpanProfile/>
                </div>

            </form>
        </div>
    )
}   

export default ProfileMain;
