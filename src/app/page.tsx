import Head from "next/head";

export default function Home() {
  const name = "@dcai";
  return (
    <div>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center my-12">
          {/* <div className="md:w-1/2"> */}
          {/*   <h2 className="text-4xl font-bold mb-4">Hi, I'm {name}</h2> */}
          {/*   <p className="mb-4"></p> */}
          {/*   <a */}
          {/*     href="#contact" */}
          {/*     className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700" */}
          {/*   > */}
          {/*     Get in Touch */}
          {/*   </a> */}
          {/* </div> */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            {/* Replace with your image */}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="my-12">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            [Write a brief introduction about yourself, your experience, and
            your interests.]
          </p>
          <p>
            [Add more details about your background, skills, and what drives you
            in your professional journey.]
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="mb-4">
                  Brief description of the project, the technologies used, and
                  the purpose.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="mb-4">
                  Brief description of the project, the technologies used, and
                  the purpose.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  View Project
                </a>
              </div>
            </div>

            {/* Add more projects as needed */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
