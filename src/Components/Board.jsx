import Squre from "./Square"

const Board = () => {
    
  return (
    <div className="w-96 border-e border-2 border-black p-4 text-6xl grid grid-cols-3 gap-4 ">
        <Squre  />
        <Squre  />
        <Squre  />
        <Squre  />
        <Squre  />
        <Squre  />
        <Squre  />
        <Squre  />
        <Squre  />
    </div>
  )
}

export default Board