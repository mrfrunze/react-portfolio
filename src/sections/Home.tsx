import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="home" className="bg-image relative h-screen scroll-mt-24">
      <div className="absolute inset-0 bg-black/60 md:bg-black/70" aria-hidden="true"></div>
      <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-semibold text-4xl sm:text-5xl md:text-7xl text-white mb-6">
              I am Oleh Stoianov
            </h1>

            {/* <p className="mt-4 text-lg md:text-2xl font-semibold text-white"> */}
              <Typewriter
              options={{
                wrapperClassName:"font-semibold text-white !text-[clamp(2rem,2.5vw+0.5rem,2.5rem)]",
                cursorClassName: "font-semibold text-white !text-[clamp(2rem,2.5vw+0.5rem,2.5rem)]",
                strings:[
                  "Frontend Developer",
                  "React Developer",
                  "SEO Specialist",
                  "HTML & CSS Teacher",
                  "JavaScript & TypeScript Mentor"
                ],
                autoStart: true,
                loop: true,
              }}
            />
            {/* </p> */}
          </div>
      </div>
  </section>
  )
}

export default Home