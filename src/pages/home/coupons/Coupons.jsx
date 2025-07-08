import { FaCreditCard, FaTags, FaTools } from "react-icons/fa";

const Coupons = () => {
  return (
    <section className="bg-base-100 py-20 px-4 md:px-10 lg:px-20 text-base-content">
      <div className="max-w-[1600px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-title font-bold text-primary mb-4">
          Special Offers & Coupons
        </h2>
        <p className="text-lg font-body text-secondary mb-10">
          Save on your rent, maintenance, and more — grab a deal today!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Coupon 1 */}
          <div className="bg-gradient-to-br from-[#E0F7F4] to-[#C8F1EB] 
              hover:from-primary hover:to-[#1F7C73]
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              p-6 rounded-xl shadow-md hover:scale-105">
            <div className="text-3xl mb-3 text-accent">
              <FaTags />
            </div>
            <h3 className="text-xl font-semibold mb-2">10% Off First Rent</h3>
            <p>New tenants get 10% off their first month's rent. Limited-time offer!</p>
          </div>

          {/* Coupon 2 */}
          <div className="bg-gradient-to-br from-[#E0F7F4] to-[#C8F1EB] 
              hover:from-primary hover:to-[#1F7C73]
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              p-6 rounded-xl shadow-md hover:scale-105">
            <div className="text-3xl mb-3 text-accent">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Maintenance Check</h3>
            <p>Get 1 free maintenance visit when you refer a new resident!</p>
          </div>

          {/* Coupon 3 */}
          <div className="bg-gradient-to-br from-[#E0F7F4] to-[#C8F1EB] 
              hover:from-primary hover:to-[#1F7C73]
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              p-6 rounded-xl shadow- hover:scale-105 ">
            <div className="text-3xl mb-3  text-accent">
              <FaCreditCard />
            </div>
            <h3 className="text-xl font-semibold mb-2">5% Off Online Payment</h3>
            <p>Pay your rent online and enjoy a 5% discount instantly.</p>
          </div>
          {/* Coupon 4 */}
          <div className="bg-gradient-to-br from-[#E0F7F4] to-[#C8F1EB] 
              hover:from-primary hover:to-[#1F7C73]
              transition-all duration-500 ease-in-out 
              text-gray-800 hover:text-white 
              p-6 rounded-xl shadow- hover:scale-105 ">
            <div className="text-3xl mb-3  text-accent">
              <FaCreditCard />
            </div>
            <h3 className="text-xl font-semibold mb-2">5% Off Online Payment</h3>
            <p>Pay your rent online and enjoy a 5% discount instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coupons;
