function App() {
  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      <nav className="bg-[#6F4E37] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-3xl font-bold">
             Recipe Book
          </h1>

          <div className="space-x-6">
            <button className="hover:text-[#D4A373]">Home</button>
            <button className="hover:text-[#D4A373]">Recipes</button>
            <button className="hover:text-[#D4A373]">Login</button>
            <button className="hover:text-[#D4A373]">Register</button>
          </div>
        </div>
      </nav>

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold text-[#3E2723]">
          Discover Homemade Recipes
        </h2>

        <p className="mt-6 text-xl text-gray-700">
          Share, discover and save your favorite recipes.
        </p>

        <button className="mt-10 bg-[#A67C52] hover:bg-[#5C4033] text-white px-8 py-3 rounded-lg transition">
          Explore Recipes
        </button>
      </section>
    </div>
  );
}

export default App;
