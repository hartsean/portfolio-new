import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold font-mono">Sean Hart</h1>
        <p className="text-lg text-gray-400 font-mono">Software Engineer</p>
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full">
        <section className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          {/* <h2 className="text-2xl font-bold font-mono mb-4">About Me</h2> */}
          <p className="text-lg text-gray-400 font-mono">
          Hello! I&apos;'m Sean, a passionate software engineer residing in the vibrant city of Austin, TX. With a diverse background in both technology and music, I bring a unique perspective to my work.
          </p>
          <br></br>
          <p className="text-lg text-white font-mono">
            <a href="mailto:hartsean@gmail.com">Get in touch!</a>
          </p>
        </section>
      
        <section className="lg:w-1/2 lg:pl-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/headshot.jpg"
              alt="Sean Hart"
              width={500}
              height={500}
            />
          </div>
        </section>

      </main>
      <footer className="text-center mt-8">
        <p className="text-sm text-gray-500 font-mono">© 2024 Sean Hart. All rights reserved.</p>
      </footer>
    </div>
  );
}
