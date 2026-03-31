export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      
      <div className="w-full max-w-md mx-4 p-8 bg-white rounded-lg shadow-lg text-center">
        
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Page Not Found
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          The page you are looking for doesn’t exist.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Go Home
        </a>

      </div>

    </div>
  );
}