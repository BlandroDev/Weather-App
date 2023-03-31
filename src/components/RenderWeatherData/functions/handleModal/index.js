export const openModal = (modalRef, contentRef) => {
  modalRef.current.classList.add("transform--ModalBox");
  contentRef.current.classList.add("transform--cardContent");
};

export const closeModal = (modalRef, contentRef) => {
  contentRef.current.classList.remove("transform--cardContent");
  modalRef.current.classList.remove("transform--ModalBox");
};
