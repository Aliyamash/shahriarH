"use client";
export default function Error({ error, reset }) {
   if(error.message = 'fetch failed'){
   error.message = 'Check Your Connection'
   }else{
    error.message = error.message
   }
  return (
    <div className="container mx-auto px-5 mb-50 lg:p-28">
     <div className="text-center aos-init aos-animate py-60">
     <h2 className="mb-20 text-5xl text-redBody shadow-2xl py-16 rounded-xl  transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-15 bg-bgray2 border border-bgray2 rounded-lg shadow-border ">{error.message}</h2>
      <button className="transition relative  duration-700 py-5 px-8 border border-redBody shadow-3xl trasition-btn rounded-lg text-center text-2xl font-bold hover:bg-white hover:text-bgray" onClick={() => reset()}>
      Try Again
     <span className="absolute -top-2 -right-1 inline-flex rounded-full h-6 w-6 bg-redBody"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-redBody opacity-75"></span></span>
      </button>
     </div>
    </div>
  );
}
