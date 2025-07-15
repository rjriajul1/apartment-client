const FAQs = () => {
  return (
    <section className="bg-base-100 text-base-content py-16 px-4 md:px-10 lg:px-20">
      <title>FAQs</title>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl  font-bold text-primary mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-secondary mb-10 text-center">
          Find answers to common questions about using Apartment Manager
        </p>

        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How do I add a new apartment unit?
            </div>
            <div className="collapse-content text-sm">
              Navigate to the dashboard, click on "Apartments", then click "Add
              New". Fill in the details and save.
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Can I manage multiple buildings with one account?
            </div>
            <div className="collapse-content text-sm">
              Yes! You can manage multiple buildings and units from a single
              account. Use building groups to organize them easily.
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Is there a way to automate rent reminders?
            </div>
            <div className="collapse-content text-sm">
              Yes, our platform includes automated SMS and email reminders to
              tenants before rent due dates.
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How secure is my tenant data?
            </div>
            <div className="collapse-content text-sm">
              We use encrypted databases and secure access control. Only
              authorized users can access sensitive data.
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-plus bg-base-200 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Can I export reports?
            </div>
            <div className="collapse-content text-sm">
              Absolutely. You can export rent history, maintenance logs, and
              resident data as PDF or Excel.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
