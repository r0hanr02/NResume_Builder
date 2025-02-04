const testimonials = [
  {
    id: 1,
    name: "Alex R.",
    feedback: "This resume builder helped me land my dream job! Easy to use and very professional.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Samantha J.",
    feedback: "I created a perfect resume in minutes. The templates are beautiful and ATS-friendly!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael K.",
    feedback: "A game-changer for job seekers! Highly recommend this tool.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full py-14">
      <h2 className="text-4xl font-bold text-center text-gray-200 mb-10">
        What Our Users Say
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-16 h-16 mx-auto rounded-full border-2 border-blue-500"
            />
            <h3 className="mt-4 text-lg text-red-600 font-semibold">{user.name}</h3>
            <p className="mt-2 text-gray-600">&quot;{user.feedback}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
