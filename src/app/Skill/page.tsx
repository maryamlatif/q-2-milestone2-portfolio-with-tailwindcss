export default function Aboutpage() {
  return (
    <div className="bg-indigo-200 flex flex-col items-center rounded-lg  text-center  shadow-md py-12 px-6 sm:px-12 lg:px-44  p-4 m-8">
      <h1 className="text-indigo-900 py-5 text-3xl sm:text-4xl md:text-5xl font-sans font-bold drop-shadow-md">
        MY SKILLS
      </h1>
      <p className="text-center p-5 m-4 max-w-2xl from-neutral-300 font-medium text-lg sm:text-xl">
        I aspire to become a full-stack developer, actively working towards this
        goal. I have a solid foundation in TypeScript, JavaScript, HTML, and
        CSS, along with proficiency in MS Office. Currently, I am diving deeper
        into modern web development frameworks like Next.js and React.js while
        exploring Tailwind CSS for styling. By honing these skills, I aim to
        create dynamic, responsive web applications that provide a seamless user
        experience.
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-8">
        {[
          "HTML",
          "CSS",
          "JAVASCRIPT",
          "TYPESCRIPT",
          "TAILWIND CSS",
          "NEXT JS",
          "REACT JS",
          "MS OFFICE",
        ].map((skill) => (
          <button
            key={skill}
            className="bg-indigo-500 text-white border-2 rounded-3xl p-4 font-semibold hover:bg-slate-400 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
