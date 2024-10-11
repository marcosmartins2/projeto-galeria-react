type Props = {
    image:string;
    closeModal: ()=>void;
}


export const Modal = ({image,closeModal}:Props)=>{


    return (
        <>
            <div onClick={closeModal} className="fixed right-0 left-0 top-0 bottom-0 flex justify-center items-center bg-black/20">

                    <img src={`/assets/${image}`} alt="" className="max-w-screen max-h-screen" />
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-5xl text-white">
                x
            </div>
        
        
        </>
    )

}