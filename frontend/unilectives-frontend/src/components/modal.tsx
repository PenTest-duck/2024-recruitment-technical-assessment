const Modal = () => {
  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal?.classList.add("hidden");
  }

  return (
    <div className="modal hidden fixed z-50 flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-96 h-96 bg-white border-solid border-2 border-black rounded-lg">
        <div className="flex flex-col h-32 justify-between">
          <p className="">DevSoc is 1337 :)</p>
          <button 
            className="p-3 bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;