const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto p-6 space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-600">Связаться с нами</h2>
          <p className="text-gray-500 mt-2">Мы всегда рады видеть вас в нашем офисе</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.941479200445!2d68.759100115255!3d38.54859757962653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef6de9471e81d%3A0x83b6e9b44eeb1c8!2sHello%20Park%20Dushanbe!5e0!3m2!1sen!2stj!4v1699700000000"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          <div className="lg:w-1/2 w-full bg-white rounded-xl p-6 shadow-lg space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Контактная информация</h3>

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-600 text-white p-2 rounded-lg">📞</span>
                <div>
                  <p>+992 205 12 25 25</p>
                  <p>+992 985 78 84 44</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-pink-500 text-white p-2 rounded-lg">📍</span>
                <p>г. Душанбе, ул. Немат Карабаев, 29</p>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="bg-indigo-500 text-white p-2 rounded-lg">✉️</span>
                <p>info@kavsar.academy</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-white bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform"
              >
                F
              </a>
              <a
                href="#"
                className="text-white bg-linear-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform"
              >
                I
              </a>
              <a
                href="#"
                className="text-white bg-blue-400 p-3 rounded-full hover:scale-110 transition-transform"
              >
                T
              </a>
              <a
                href="#"
                className="text-white bg-black p-3 rounded-full hover:scale-110 transition-transform"
              >
                🎵
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Связаться
              </button>
              <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                Маршрут
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
