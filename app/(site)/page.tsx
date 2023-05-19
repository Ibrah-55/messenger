import Image from "next/image"
export default function Home() {
    return (
      <div className="flex min-h-full flex-col items-center justify-between bg-gray-200">
        <h1 className="text-blue-600 font-bold">Messenger Application</h1>
        <div className="sm:mx-auto ms:w-full sm-max-w-md">

         <Image
         alt="logo"
         height="48"
         width="48"
         className="mx-auto w-auto"
         src="/images/messenger.png" />

         <h2 className="mt-6
         text-center
         text-3xl
         font-bold
         tracking-tight
         text-gray-900
         "> Sign in</h2>
        </div>
        
      </div>
    )
  }
  