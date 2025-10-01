import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input defaultValue="Tanishq" placeholder="username" className="wd-username" /><br/>
      <input defaultValue="Neela" placeholder="abc@123" type="password" className="wd-password" /><br/>
      <input defaultValue="abc@123" placeholder="verify password"
             type="password" className="wd-password-verify" /><br/>
      <Link  href="Profile" > Sign up </Link><br />
      <Link  href="Signin" > Sign in </Link>
    </div>
);}
