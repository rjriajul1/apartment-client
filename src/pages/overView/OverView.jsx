import React from "react";

const OverView = () => {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-[1600px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-10">
            How Our System Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
              <div className="text-primary text-3xl font-bold mb-2">1</div>
              <h3 className="text-xl font-semibold mb-1">Create Account</h3>
              <p className="text-gray-600">
                Start by signing up on the platform to access features.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
              <div className="text-primary text-3xl font-bold mb-2">2</div>
              <h3 className="text-xl font-semibold mb-1">Book Apartment</h3>
              <p className="text-gray-600">
                Choose and request to book an available apartment.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
              <div className="text-primary text-3xl font-bold mb-2">3</div>
              <h3 className="text-xl font-semibold mb-1">Admin Approval</h3>
              <p className="text-gray-600">
                Admin will review your request and accept or decline.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
              <div className="text-primary text-3xl font-bold mb-2">4</div>
              <h3 className="text-xl font-semibold mb-1">Access Dashboard</h3>
              <p className="text-gray-600">
                Once approved, log in to access your personalized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverView;
