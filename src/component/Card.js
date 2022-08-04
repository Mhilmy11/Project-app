export default function Card({ open }) {
    return (
        <div onClick={() => open(true)} className=" bg-emerald-600 w-[400px] h-[150px] rounded-xl flex mt-6">
            <div className=" bg-gray-400 w-[150px] h-[150px] rounded-l-xl"></div>
            <div className=" mt-1 ml-4">
                <h1 className=" font-bold text-lg">TITLE</h1>
                <p className=" text-sm">BODY</p>
            </div>
        </div>
    )
}