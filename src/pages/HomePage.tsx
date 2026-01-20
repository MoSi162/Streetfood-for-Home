// src/pages/HomePage.tsx

export function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-100 via-base-200 to-red-200">
      <div className="mt-24 mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight drop-shadow-md">
          Streetfood for Home
        </h1>
        <p className="text-xl text-gray-700 font-light">
          Scroll and discover mouthwatering global recipes—each with real street kitchen vibes and stunning foodtruck inspiration.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <span className="badge badge-outline badge-lg text-lg bg-yellow-200 text-gray-800 px-5">
          Discover, Cook, Enjoy!
        </span>
      </div>
    </div>
  );
}
