import { FaCreditCard, FaTags, FaTools } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Coupons = ({ coupons }) => {
  return (
    <section className="bg-base-100 py-20 px-4 md:px-10 lg:px-20 text-base-content">
      <div className="max-w-[1600px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-title font-bold text-primary mb-4">
          Special Offers & Coupons
        </h2>
        <p className="text-lg font-body text-secondary mb-10">
          Save on your rent, maintenance, and more — grab a deal today!
        </p>

        <Marquee play={true} pauseOnHover={true} speed={100} >
          <div className=" p-2 flex ">
            {coupons?.map((coupon) => (
              <div
                key={coupon._id}
                className="relative group p-6 bg-white rounded-xl shadow-md border border-transparent hover:border-primary transition duration-500 overflow-hidden ml-30 w-72"
              >
                {/* Icon */}
                <div className="text-4xl text-accent mb-4">
                  <FaTags />
                </div>

                {/* Coupon Info */}
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition">
                  {coupon?.code}
                </h3>
                <p className="text-lg text-gray-800 mb-1 ">
                  {coupon?.discount}% OFF
                </p>
                <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-accent">
                  {coupon?.description}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Coupons;
