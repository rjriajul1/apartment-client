const AboutBuilding = () => {
  return (
    <section className="bg-base-100 py-20 px-4 md:px-10 lg:px-20 text-base-content">
      <div className="max-w-[1600px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl  font-bold text-primary mb-4">
          About Apartment Manager
        </h2>
        <p className="text-lg  text-secondary mb-10">
          How this platform helps you manage properties efficiently
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-gradient-to-br 
              from-[#D6F4F0] to-[#B3EAE3] 
              hover:from-primary hover:to-[#1F7C73] 
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              rounded-2xl p-6 shadow-md  hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Track Apartments</h3>
            <p>
              Add, update, and monitor all your apartment units in one place. Easily manage availability, rent status, and maintenance requests.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br 
              from-[#D6F4F0] to-[#B3EAE3] 
              hover:from-primary hover:to-[#1F7C73] 
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              rounded-2xl p-6 shadow-md hover:scale-105 ">
            <h3 className="text-xl font-semibold mb-2">Manage Residents</h3>
            <p>
              Keep resident information organized. From lease details to communication, everything stays up-to-date and accessible.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br 
              from-[#D6F4F0] to-[#B3EAE3] 
              hover:from-primary hover:to-[#1F7C73] 
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              rounded-2xl p-6 shadow-md hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Handle Payments</h3>
            <p>
              Track rent collection, payment history, and dues with ease. Generate reports and send reminders — all from your dashboard.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-gradient-to-br 
              from-[#D6F4F0] to-[#B3EAE3] 
              hover:from-primary hover:to-[#1F7C73] 
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              rounded-2xl p-6 shadow-md hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Handle Payments</h3>
            <p>
              Track rent collection, payment history, and dues with ease. Generate reports and send reminders — all from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBuilding;
