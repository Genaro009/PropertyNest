import { Award, Heart, Home, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Plumtree Property Nest
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded and operated by <span className="font-semibold text-gray-900">Kevin Mupande</span>,
              Plumtree Property Nest is your trusted property partner in Plumtree, Zimbabwe. We are
              dedicated to bringing people and properties together with professionalism, integrity, and
              local expertise.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're looking to buy, sell, or rent, we provide personalized service to ensure
              you find exactly what you're looking for. Our deep understanding of the Plumtree property
              market and commitment to client satisfaction sets us apart.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="text-gray-700 italic">
                "At Plumtree Property Nest, we don't just match you with a property—we help you find
                your home and make your property dreams a reality."
              </p>
              <p className="text-gray-900 font-semibold mt-2">- Kevin Mupande, Founder & Property Agent</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Home className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Plumtree's property market and neighborhoods.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Focused</h3>
              <p className="text-gray-600">
                Your satisfaction and success are our top priorities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600">
                Ethical practices and transparent transactions every time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Driven</h3>
              <p className="text-gray-600">
                Committed to achieving your property goals efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
