"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Movie {
  id: string;
  title: string;
  rating: number;
  comments: number;
  description: string;
}

const Home = () => {
  const movies: Movie[] = [
    {
      id: "1",
      title: "Inception",
      rating: 4.8,
      comments: 252,
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: "2",
      title: "The Dark Knight",
      rating: 4.9,
      comments: 310,
      description: "Batman faces his greatest foe, the Joker.",
    },
    {
      id: "3",
      title: "Interstellar",
      rating: 4.7,
      comments: 280,
      description: "A journey through space and time to save humanity.",
    },
    {
      id: "4",
      title: "The Matrix",
      rating: 4.6,
      comments: 400,
      description: "Reality is a simulation in this sci-fi classic.",
    },
    {
      id: "5",
      title: "The Shawshank Redemption",
      rating: 4.9,
      comments: 500,
      description: "A story of hope and resilience in prison.",
    },
    {
      id: "6",
      title: "Forrest Gump",
      rating: 4.8,
      comments: 430,
      description: "The life of a man who lived through history.",
    },
    {
      id: "7",
      title: "Gladiator",
      rating: 4.5,
      comments: 310,
      description: "A Roman general seeks vengeance.",
    },
    {
      id: "8",
      title: "Avengers: Endgame",
      rating: 4.7,
      comments: 620,
      description: "The Avengers assemble to defeat Thanos.",
    },
    {
      id: "9",
      title: "Titanic",
      rating: 4.6,
      comments: 580,
      description: "A love story aboard the ill-fated ship.",
    },
    {
      id: "10",
      title: "Pulp Fiction",
      rating: 4.4,
      comments: 390,
      description: "Interwoven stories of crime and redemption.",
    },
    {
      id: "11",
      title: "Fight Club",
      rating: 4.6,
      comments: 450,
      description: "A man forms an underground fight club.",
    },
    {
      id: "12",
      title: "The Godfather",
      rating: 4.9,
      comments: 520,
      description: "The rise of a powerful mafia family.",
    },
    {
      id: "13",
      title: "The Lord of the Rings: The Return of the King",
      rating: 4.9,
      comments: 490,
      description: "The final battle for Middle-earth.",
    },
    {
      id: "14",
      title: "Jurassic Park",
      rating: 4.3,
      comments: 370,
      description: "Dinosaurs are brought back to life.",
    },
    {
      id: "15",
      title: "The Lion King",
      rating: 4.7,
      comments: 410,
      description: "A young lion returns to reclaim his throne.",
    },
    {
      id: "16",
      title: "Spirited Away",
      rating: 4.8,
      comments: 290,
      description: "A girl discovers a magical world.",
    },
    {
      id: "17",
      title: "Coco",
      rating: 4.6,
      comments: 330,
      description: "A boy journeys to the Land of the Dead.",
    },
    {
      id: "18",
      title: "Whiplash",
      rating: 4.7,
      comments: 340,
      description: "A student drummer pushed to his limits.",
    },
    {
      id: "19",
      title: "The Prestige",
      rating: 4.5,
      comments: 360,
      description: "Two magicians clash in a battle of wits.",
    },
    {
      id: "20",
      title: "Django Unchained",
      rating: 4.4,
      comments: 380,
      description: "A freed slave sets out to rescue his wife.",
    },
    {
      id: "21",
      title: "The Departed",
      rating: 4.6,
      comments: 350,
      description: "Undercover cops and moles collide in Boston.",
    },
    {
      id: "22",
      title: "1917",
      rating: 4.5,
      comments: 300,
      description: "Two soldiers race against time in WWI.",
    },
    {
      id: "23",
      title: "The Grand Budapest Hotel",
      rating: 4.4,
      comments: 270,
      description: "A concierge and his protégé on a wild adventure.",
    },
    {
      id: "24",
      title: "Parasite",
      rating: 4.8,
      comments: 420,
      description: "A poor family infiltrates a wealthy household.",
    },
    {
      id: "25",
      title: "No Country for Old Men",
      rating: 4.3,
      comments: 240,
      description: "A hunter finds a suitcase of money and is pursued.",
    },
    {
      id: "26",
      title: "Blade Runner 2049",
      rating: 4.5,
      comments: 260,
      description: "A blade runner unearths a long-buried secret.",
    },
    {
      id: "27",
      title: "The Social Network",
      rating: 4.4,
      comments: 290,
      description: "The rise of Facebook and its controversies.",
    },
    {
      id: "28",
      title: "Black Panther",
      rating: 4.6,
      comments: 390,
      description: "A new king rises in Wakanda.",
    },
    {
      id: "29",
      title: "Mad Max: Fury Road",
      rating: 4.7,
      comments: 350,
      description: "A high-octane desert chase.",
    },
    {
      id: "30",
      title: "The Revenant",
      rating: 4.5,
      comments: 300,
      description: "A man fights for survival after betrayal.",
    },
    {
      id: "31",
      title: "A Beautiful Mind",
      rating: 4.6,
      comments: 280,
      description: "The life of a brilliant but troubled mathematician.",
    },
    {
      id: "32",
      title: "La La Land",
      rating: 4.5,
      comments: 330,
      description: "A jazz musician and actress fall in love.",
    },
    {
      id: "33",
      title: "Shutter Island",
      rating: 4.7,
      comments: 360,
      description: "A U.S. Marshal investigates a disappearance.",
    },
    {
      id: "34",
      title: "Her",
      rating: 4.4,
      comments: 270,
      description: "A man falls in love with an AI assistant.",
    },
    {
      id: "35",
      title: "The Irishman",
      rating: 4.3,
      comments: 240,
      description: "A hitman recalls his life in the mob.",
    },
    {
      id: "36",
      title: "The Wolf of Wall Street",
      rating: 4.5,
      comments: 400,
      description: "The rise and fall of a stockbroker.",
    },
    {
      id: "37",
      title: "Tenet",
      rating: 4.2,
      comments: 310,
      description: "Time inversion is the key to survival.",
    },
    {
      id: "38",
      title: "Knives Out",
      rating: 4.6,
      comments: 360,
      description: "A detective investigates a wealthy family’s secrets.",
    },
    {
      id: "39",
      title: "The Batman",
      rating: 4.4,
      comments: 390,
      description: "A dark, gritty take on the caped crusader.",
    },
    {
      id: "40",
      title: "Dune",
      rating: 4.5,
      comments: 340,
      description: "A noble family battles for control of a desert planet.",
    },
    {
      id: "41",
      title: "Everything Everywhere All At Once",
      rating: 4.8,
      comments: 370,
      description: "A woman connects with multiverse versions of herself.",
    },
    {
      id: "42",
      title: "Oppenheimer",
      rating: 4.9,
      comments: 410,
      description: "The story of the man behind the atomic bomb.",
    },
    {
      id: "43",
      title: "Barbie",
      rating: 4.2,
      comments: 250,
      description: "A satirical journey of identity and gender roles.",
    },
    {
      id: "44",
      title: "The Whale",
      rating: 4.4,
      comments: 230,
      description: "A reclusive man seeks redemption and connection.",
    },
    {
      id: "45",
      title: "The Holdovers",
      rating: 4.3,
      comments: 220,
      description: "A teacher stays on campus over the holidays.",
    },
    {
      id: "46",
      title: "The Banshees of Inisherin",
      rating: 4.4,
      comments: 260,
      description: "Two friends face a mysterious fallout.",
    },
    {
      id: "47",
      title: "The Fabelmans",
      rating: 4.3,
      comments: 210,
      description: "A young filmmaker finds his voice.",
    },
    {
      id: "48",
      title: "John Wick",
      rating: 4.6,
      comments: 470,
      description: "An ex-hitman seeks vengeance for his dog.",
    },
    {
      id: "49",
      title: "Mission: Impossible – Fallout",
      rating: 4.5,
      comments: 420,
      description: "Ethan Hunt faces his toughest mission yet.",
    },
    {
      id: "50",
      title: "Guardians of the Galaxy Vol. 3",
      rating: 4.7,
      comments: 410,
      description: "The Guardians face their final mission together.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalMovies = filteredMovies.length;
  const totalComments = filteredMovies.reduce(
    (sum, movie) => sum + movie.comments,
    0
  );
  const averageRating = (
    filteredMovies.reduce((sum, movie) => sum + movie.rating, 0) /
    (totalMovies || 1)
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Dashboard Overview
        </h2>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Cards - Stack on mobile, row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Total Movies Card */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <p className="text-gray-600 text-base sm:text-lg font-medium mb-2 hover:text-blue-600 transition-colors duration-300">
              Total Movies
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
              {totalMovies}
            </p>
          </div>

          {/* Total Comments Card */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <p className="text-gray-600 text-base sm:text-lg font-medium mb-2 hover:text-green-600 transition-colors duration-300">
              Total Comments
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-yellow-500 hover:text-green-700 transition-colors duration-300">
              {totalComments}
            </p>
          </div>

          {/* Average Ratings Card */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <p className="text-gray-600 text-base sm:text-lg font-medium mb-2 hover:text-yellow-600 transition-colors duration-300">
              Average Rating
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-green-600 hover:text-yellow-700 transition-colors duration-300">
              {averageRating}
            </p>
          </div>
        </div>

        {/* Movie List - Card layout on mobile, table on desktop */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border-b border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 mb-2 sm:mb-0">
              {searchTerm ? "Search Results" : "Recent Movies"}
            </h3>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-sm text-blue-600 hover:text-blue-500 transition-colors duration-300 hover:cursor-pointer"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden">
            {filteredMovies.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {filteredMovies.map((movie) => (
                  <div
                    key={movie.id}
                    className="p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Link href={`${movie.id}`} className="block">
                      <h4 className="text-base font-medium text-gray-900 hover:text-blue-600 hover:underline transition-colors duration-300">
                        {movie.title}
                      </h4>
                      <div className="mt-2 flex items-center space-x-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {movie.rating}
                        </span>
                        <span className="text-sm text-gray-500">
                          {movie.comments} comments
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                        {movie.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-gray-500">
                No movies found matching your search.
              </div>
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comments
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMovies.length > 0 ? (
                  filteredMovies.map((movie) => (
                    <tr
                      key={movie.id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <Link
                          href={`${movie.id}`}
                          className="hover:text-blue-600 hover:underline transition-colors duration-300"
                        >
                          {movie.title}
                        </Link>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {movie.rating}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {movie.comments}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 line-clamp-2">
                        {movie.description}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 sm:px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No movies found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
