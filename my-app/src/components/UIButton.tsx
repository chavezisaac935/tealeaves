
export default function UIButton({children, id, onAddItem}: {children:React.ReactNode, id: number, onAddItem: (id: number) => void}){
    return (
        <button onClick={(e) => { e.stopPropagation(); onAddItem(id); }} className="border-solid border-1 mx-1 my-1 px-1 rounded-full">
            {children}
        </button>
    )
}