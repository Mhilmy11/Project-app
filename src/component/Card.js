export default function Card() {
    return (
        <div className=" bg-lime-500 rounded-md w-[500px] h-[150px] flex">
            <div className=" bg-white rounded-md w-[150px] h-[150px]"></div>
            <div className=" ml-3 text-white">
                <h1 className=" font-bold text-lg">TITLE</h1>
                <h6 className=" text-xs">BODY.....</h6>
            </div>
        </div>
    )
}