import { X } from "lucide-react";

const ImageModal = ({ url, name, setModal, tags }) => {
  const handleClick = (e) => {
    if (!e.target.classList.contains("modalImage")) setModal(false);
  };
  return (
    <div
      className="fixed top-0 left-0 h-full w-full overflow-y-scroll flex bg-slate-950/50 backdrop-blur-sm  pt-8 modalContainer px-2 sm:px-24"
      onClick={handleClick}
    >
      <div className="w-full mx-auto">
        <div className="modalHeader flex justify-between text-white mb-4 items-center">
          <h5 className="font-semibold text-2xl">{name}</h5>
          <span className="cursor-pointer">
            <X size={30} />
          </span>
        </div>
        <div className="w-full">
          <img src={url} alt={name} className="modalImage" />
        </div>
        <div className="flex flex-wrap gap-2 py-2">{tags}</div>
      </div>
    </div>
  );
};

export default ImageModal;
