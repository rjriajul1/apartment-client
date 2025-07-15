import axios from "axios";
import { FaBullhorn } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form?.title?.value;
    const description = form?.description?.value;

    const newAnnouncement = {
      title,
      description,
      date: new Date().toISOString(), // optional
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URL}/announcement`,
        newAnnouncement
      );
      if (res?.data?.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset()
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-base-100 p-8 rounded-2xl shadow-md border mt-8">
      <title>Dashboard || Make Announcement</title>
      <h2 className="text-2xl font-bold flex items-center gap-2 text-primary mb-2">
        <FaBullhorn /> Make an Announcement
      </h2>
      <p className="text-gray-500 mb-6">
        Share important news, updates, or reminders with all residents. Keep it
        clear and relevant.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter announcement title"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Write your announcement details here..."
            className="textarea textarea-bordered w-full min-h-[120px]"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Publish Announcement
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
