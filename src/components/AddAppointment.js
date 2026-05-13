import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

  return (
    <div className="max-w-2xl mx-auto">
      {" "}
      {/* Search bar ile hizalı olması için genişliği sınırladık */}
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className={`bg-blue-400 text-white px-4 py-4 w-full text-left font-medium transition-all
        ${toggleForm ? "rounded-t-md" : "rounded-md"}`}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top text-xl mr-2" />
          Add Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="border-r border-b border-l border-gray-200 rounded-b-md p-6 bg-white shadow-sm">
          {/* Owner Name */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-2">
            <label
              htmlFor="ownerName"
              className="block text-sm font-semibold text-gray-700 sm:pt-4"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                onChange={(e) =>
                  setFormData({ ...formData, ownerName: e.target.value })
                }
                value={formData.ownerName}
                // py-3 ve text-base ile inputu büyüttük
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 text-base"
              />
            </div>
          </div>

          {/* Pet Name */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-4">
            <label
              htmlFor="petName"
              className="block text-sm font-semibold text-gray-700 sm:pt-4"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                onChange={(e) =>
                  setFormData({ ...formData, petName: e.target.value })
                }
                value={formData.petName}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 text-base"
              />
            </div>
          </div>

          {/* Apt Date */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-4">
            <label
              htmlFor="aptDate"
              className="block text-sm font-semibold text-gray-700 sm:pt-4"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                onChange={(e) =>
                  setFormData({ ...formData, aptDate: e.target.value })
                }
                value={formData.aptDate}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 text-base"
              />
            </div>
          </div>

          {/* Apt Time */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-4">
            <label
              htmlFor="aptTime"
              className="block text-sm font-semibold text-gray-700 sm:pt-4"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                onChange={(e) =>
                  setFormData({ ...formData, aptTime: e.target.value })
                }
                value={formData.aptTime}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 text-base"
              />
            </div>
          </div>

          {/* Appointment Notes */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-4">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-semibold text-gray-700 sm:pt-4"
            >
              Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="4"
                onChange={(e) =>
                  setFormData({ ...formData, aptNotes: e.target.value })
                }
                value={formData.aptNotes}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400 text-base"
                placeholder="Detailed comments about the condition"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPublish}
                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-md text-base font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAppointment;
