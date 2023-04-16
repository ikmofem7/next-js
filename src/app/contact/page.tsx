"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      Contact
      <Link href="/">Home</Link>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};

export default Contact;
