const PrivacyPolicy = () => {
  return (
    <section className="bg-base-100 text-base-content py-20 px-4 md:px-10 lg:px-20">
      <title>Privacy Police</title>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-title font-bold text-primary mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm text-secondary mb-4">
          Last updated: July 8, 2025
        </p>

        <p className="mb-6">
          At Apartment Manager, your privacy is very important to us. This
          Privacy Policy outlines how we collect, use, and protect your
          information when you use our platform.
        </p>

        <h2 className="text-xl font-semibold text-primary mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 mb-6">
          <li>Your name, email address, and contact details</li>
          <li>Apartment details, maintenance requests, and payment history</li>
          <li>Usage data such as logins, activity, and preferences</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 mb-6">
          <li>To manage your apartment records</li>
          <li>To send updates, payment reminders, and alerts</li>
          <li>To improve user experience and platform functionality</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary mb-2">
          3. Data Security
        </h2>
        <p className="mb-6">
          We use encryption and access controls to keep your data safe. Only
          authorized personnel can access sensitive information.
        </p>

        <h2 className="text-xl font-semibold text-primary mb-2">
          4. Third-Party Services
        </h2>
        <p className="mb-6">
          We may use third-party tools for payments or analytics, but we do not
          sell or share your personal data without your consent.
        </p>

        <h2 className="text-xl font-semibold text-primary mb-2">
          5. Your Rights
        </h2>
        <p className="mb-6">
          You can request to update, correct, or delete your data by contacting
          us. We will respond promptly to ensure your rights are respected.
        </p>

        <h2 className="text-xl font-semibold text-primary mb-2">
          6. Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions or concerns about this policy, you can
          contact us at:
          <br />
          <span className="font-medium">support@apartmentmanager.com</span>
        </p>

        <p className="text-sm">
          This privacy policy may be updated from time to time. Please review it
          periodically.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
