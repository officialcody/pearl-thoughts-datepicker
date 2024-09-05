import useStore from "../_store/useStore";

export default function Modal({ children }) {
  const { showRecurrenceModal, setShowRecurrenceModal } = useStore();
  const handleModalClose = () => {
    setShowRecurrenceModal(!showRecurrenceModal);
  };
  return (
    <div
      className={
        showRecurrenceModal
          ? `relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`
          : "hidden"
      }
    >
      <div className="bg-white px-4 pb-2">
        <div className="">{children}</div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Save
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={handleModalClose}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
