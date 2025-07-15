import { FaBullhorn } from "react-icons/fa";
import { useLoaderData } from "react-router";

const Announcements = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <title>Dashboard || Announcement</title>
      <h2 className="text-3xl font-bold text-center text-primary mb-6 flex items-center justify-center gap-2">
        <FaBullhorn /> Latest Announcements
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md border rounded-xl p-5 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-3">{item.description}</p>
            {item.date && (
              <p className="text-sm text-gray-500">
                <span className="font-medium">Published:</span>{" "}
                {new Date(item.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
