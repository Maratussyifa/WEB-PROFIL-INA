import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/background1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Konten */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-6 text-hpGold font-semibold border-b border-yellow-600/40">
          <Image
            src="/tulisan.png"
            alt="Hogwarts Logo"
            width={160}
            height={50}
            className="drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
          />
          <ul className="flex gap-8 text-lg font-harry">
            {["About", "Houses", "Quidditch", "Gallery", "Locations"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 hover:scale-105 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="text-center mt-16 mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-harry text-hpGold drop-shadow-[0_0_15px_rgba(255,223,0,0.8)]">
            ✨ Welcome to the Wizarding World ✨
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto font-harry leading-relaxed">
            Explore the magic of Harry Potter, the houses of Hogwarts, and the
            enchanting world created by J.K. Rowling.
          </p>
        </div>

        {/* Profile + Gambar Harry */}
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-10">
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-3xl font-harry text-hpGold">
              Harry Potter Series
            </h2>
            <p className="text-gray-300 max-w-md font-harry leading-relaxed">
              A magical journey filled with adventures, friendships, and
              unforgettable spells. Dive into the stories that shaped
              generations.
            </p>
            <button
              className="mt-4 px-6 py-3 border-2 border-hpGold text-hpGold rounded font-harry 
              hover:bg-yellow-400 hover:text-black 
              transition duration-300 shadow-md"
            >
              Explore More
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/harry2.png"
              alt="Harry Potter"
              width={500}
              height={500}
              className="rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* About JK Rowling */}
        <section
          className="relative text-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10 bg-cover bg-center rounded-xl mt-10"
          style={{ backgroundImage: "url('/background1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/80 rounded-xl"></div>

          <div className="relative z-10 md:w-1/3 flex justify-center">
            <Image
              src="/pencipta.png"
              alt="JK Rowling"
              width={400}
              height={400}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="relative z-10 md:w-2/3 space-y-6">
            <h3 className="uppercase text-yellow-400 tracking-widest text-sm font-harry">
              About JK Rowling
            </h3>
            <h2 className="text-3xl font-harry text-hpGold">
              J.K. Rowling{" "}
              <span className="text-yellow-400">– Author of Harry Potter</span>
            </h2>
            <p className="text-gray-300 leading-relaxed font-harry">
              J.K. Rowling, born Joanne Rowling on July 31, 1965, is a British
              author best known for creating the Harry Potter series, which has
              become one of the best-selling book series in history.
            </p>

            <div className="grid grid-cols-2 gap-y-2 text-gray-200 font-harry">
              <p>✔ Author of Harry Potter series</p>
              <p>✔ Philanthropist</p>
              <p>✔ Advocate for literacy</p>
              <p>✔ Creator of Wizarding World</p>
            </div>

            <button className="mt-4 px-6 py-3 bg-yellow-500 text-black rounded font-semibold hover:bg-yellow-400 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Contact + Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6 md:px-20 text-gray-300 text-sm">
          <div>
            <h4 className="font-semibold text-yellow-400 mb-2">Contact Now</h4>
            <p>@hogwarts.2001</p>
            <p>+123 345 678 910</p>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-400 mb-2">Address</h4>
            <p>123 West 10th Street, Suite 456</p>
            <p>New York, NY 123456</p>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-400 mb-2">Social Media</h4>
            <p>Find us on:</p>
            <div className="flex gap-4 mt-2">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>

        {/* Houses Section */}
        <section
          className="relative px-6 md:px-20 py-16 rounded-xl mt-10 text-center"
          style={{ backgroundImage: "url('/background1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-harry text-hpGold mb-4">
              ⚡ Hogwarts Houses ⚡
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 font-harry">
              Discover the four legendary houses of Hogwarts, each with its own
              values, traits, and magical history.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Gryffindor */}
              <div className="bg-[#7F0909] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 border-2 border-yellow-400 flex flex-col items-center">
                <Image
                  src="/Gryffindor.png"
                  alt="Gryffindor"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-2xl font-harry text-yellow-400 mb-3">
                  Gryffindor
                </h3>
                <p className="text-gray-200 text-sm">
                  Home of the brave and daring. Founded by Godric Gryffindor.
                </p>
              </div>

              {/* Hufflepuff */}
              <div className="bg-[#FFDB00] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 border-2 border-black flex flex-col items-center">
                <Image
                  src="/Huffepuff.png"
                  alt="Hufflepuff"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-2xl font-harry text-black mb-3">
                  Hufflepuff
                </h3>
                <p className="text-gray-800 text-sm">
                  Loyal and fair, valuing hard work and honesty. Founded by
                  Helga Hufflepuff.
                </p>
              </div>

              {/* Ravenclaw */}
              <div className="bg-[#0E1A40] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 border-2 border-blue-400 flex flex-col items-center">
                <Image
                  src="/Ravenclaw.png"
                  alt="Ravenclaw"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-2xl font-harry text-blue-300 mb-3">
                  Ravenclaw
                </h3>
                <p className="text-gray-200 text-sm">
                  The house of wisdom and creativity. Founded by Rowena
                  Ravenclaw.
                </p>
              </div>

              {/* Slytherin */}
              <div className="bg-[#1A472A] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 border-2 border-green-400 flex flex-col items-center">
                <Image
                  src="/Slytherrin.png"
                  alt="Slytherin"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-2xl font-harry text-green-300 mb-3">
                  Slytherin
                </h3>
                <p className="text-gray-200 text-sm">
                  Ambitious and cunning, striving for greatness. Founded by
                  Salazar Slytherin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Timeline Harry Potter */}
        <section
          className="relative bg-[#012B24] text-white px-6 md:px-20 py-16 mt-12 rounded-xl"
          style={{ backgroundImage: "url('/background1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/80 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-harry text-hpGold mb-6 text-center drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
              ✨ Timeline of the Wizarding World ✨
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-center font-harry leading-relaxed">
              Journey through the magical years of Harry Potter and the Wizarding World, from the first book to the latest adventures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-harry">
              <div className="space-y-6">
                <div>
                  <h4 className="text-yellow-400 text-xl">1997</h4>
                  <p className="text-gray-300">Harry Potter and the Philosopher’s Stone (Book)</p>
                </div>
                <div>
                  <h4 className="text-yellow-400 text-xl">2001</h4>
                  <p className="text-gray-300">First Harry Potter Movie Released</p>
                </div>
                <div>
                  <h4 className="text-yellow-400 text-xl">2007</h4>
                  <p className="text-gray-300">Deathly Hallows (Final Book)</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-yellow-400 text-xl">2011</h4>
                  <p className="text-gray-300">Deathly Hallows Part 2 Movie Released</p>
                </div>
                <div>
                  <h4 className="text-yellow-400 text-xl">2016</h4>
                  <p className="text-gray-300">Fantastic Beasts Series Begins</p>
                </div>
                <div>
                  <h4 className="text-yellow-400 text-xl">2022</h4>
                  <p className="text-gray-300">Fantastic Beasts: Secrets of Dumbledore Released</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button className="px-8 py-3 bg-yellow-500 text-black font-harry text-lg rounded-lg hover:bg-yellow-400 transition shadow-md">
                📜 Explore Full Timeline
              </button>
            </div>

            {/* Newsletter */}
            <div className="mt-14 bg-black/60 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
              <h3 className="text-xl font-harry text-hpGold">Subscribe to Hogwarts Newsletter</h3>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-l-lg w-full md:w-80 text-black focus:outline-none"
                />
                <button className="bg-yellow-500 text-black px-6 rounded-r-lg font-harry hover:bg-yellow-400 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
