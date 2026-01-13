export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Product Data Explorer
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This is a full-stack product exploration platform that scrapes data from 
              World of Books and presents it in an easy-to-navigate interface. Users can 
              browse categories, view product details, and read reviews.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Tech Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Frontend</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Axios</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Backend</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Express.js</li>
                  <li>• TypeScript</li>
                  <li>• MongoDB + Mongoose</li>
                  <li>• Playwright (Web Scraping)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Features
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Live web scraping from World of Books</li>
              <li>✅ Navigation headings display</li>
              <li>✅ Category drilldown pages</li>
              <li>✅ Product grid with pagination</li>
              <li>✅ Detailed product pages with reviews</li>
              <li>✅ Responsive design for all devices</li>
              <li>✅ On-demand data refresh</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-700">
              This project was built as part of a full-stack development assignment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}