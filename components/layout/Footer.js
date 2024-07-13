import Link from "next/link";

export default function Footer () {
    return(
        <div className="container mx-auto">
            <hr className="border-black mt-20"/>
            <p className="mt-3 py-32 font-thin text-center tracking-widest ">© 2024. All rights reserved by<Link className="shadow shadow-3xl" href={"https://linkedin.com/in/ali-ashrafi-b24943299"}> Morgan🤍</Link></p>
        </div>
    )
}