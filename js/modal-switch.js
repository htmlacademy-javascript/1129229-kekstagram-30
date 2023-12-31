const hideButton = (button) => {
  button.classList.add('hidden');
};

const showButton = (button) => {
  button.classList.remove('hidden');
};

const showModal = (modal) => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = (modal) => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const removeComments = () => {
  document.querySelectorAll('.social__comment').forEach((commentData) => {
    commentData.remove();
  });
};


export {hideButton, showButton, showModal, hideModal, removeComments};
