
export default function CategoryFilter({ selectedCategory, onChange }) {
    const categories = ["barchasi", "smartfon", "tv", "noutbuk"]
  
    return (
      <div className="flex gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
              selectedCategory === cat ? "bg-violet-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    )
  }
  