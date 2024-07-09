"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link";
import { useState } from "react";
import { useDebounceValue } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/router";

function Page() {
       const [username,setUsername] = useState("")
       const [usernameMessage,setUsernameMessage]= useState("")
       const [loading,setLoading]= useState(false)
       const [isSubmitting,setIsSubmitting]= useState()
       const debounceUsername = useDebounceValue(username, 300)
       const { toast } = useToast()
       const router = useRouter()
  return (
    <div></div>
  )
}

export default Page

// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         Signed in as {session?.user?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button
//         className="bg-orange-500 px-3 py-2 m-4 rounded"
//         onClick={() => signIn()}
//       >
//         Sign in
//       </button>
//     </>
//   );
// }
