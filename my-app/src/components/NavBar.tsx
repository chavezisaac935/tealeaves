import UserProfile from "./UserProfile";

export default function NavBar(){
    return(
        <nav className="flex w-full justify-end">
            <h1 className='inline-block flex-1'>Account</h1>
            <UserProfile></UserProfile>
        </nav>
    )
}