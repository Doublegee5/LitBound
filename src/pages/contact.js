export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="max-w-xl text-center text-gray-700 mb-6">
        Have questions or want to collaborate? Reach out to the LitBound team!
      </p>
      {/* Simple contact form */}
      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 border border-gray-300 rounded"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
