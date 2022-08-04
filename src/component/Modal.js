export default function Modal({ open, close }) {
    if (!open) return null
    return (
        <div>
            <div className=" bg-black h-screen w-full absolute opacity-25"></div>
            <div className=" h-screen w-full absolute flex justify-center items-center">
                <div className=" bg-emerald-600 rounded-2xl h-[500px] w-[600px]">
                    <div className=""></div>
                    <div className=" flex h-full justify-center items-end">
                        <button onClick={() => close(false)} className=" font-bold border-2 border-red-700 bg-slate-300 pt-1 pb-1 w-20 mb-4 rounded-lg">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}