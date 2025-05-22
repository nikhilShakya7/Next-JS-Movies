import React from 'react'

const Home = () => {
  const movies=[
    { id: '1', title: 'Inception', rating: 4.8, comments: 252, description: 'A mind-bending thriller by Christopher Nolan.' },
    { id: '2', title: 'The Dark Knight', rating: 4.9, comments: 310, description: 'Batman faces his greatest foe, the Joker.' },
    { id: '3', title: 'Interstellar', rating: 4.7, comments: 280, description: 'A journey through space and time to save humanity.' },
    { id: '4', title: 'The Matrix', rating: 4.6, comments: 400, description: 'Reality is a simulation in this sci-fi classic.' },
    { id: '5', title: 'The Shawshank Redemption', rating: 4.9, comments: 500, description: 'A story of hope and resilience in prison.' },
    { id: '6', title: 'Forrest Gump', rating: 4.8, comments: 430, description: 'The life of a man who lived through history.' },
    { id: '7', title: 'Gladiator', rating: 4.5, comments: 310, description: 'A Roman general seeks vengeance.' },
    { id: '8', title: 'Avengers: Endgame', rating: 4.7, comments: 620, description: 'The Avengers assemble to defeat Thanos.' },
    { id: '9', title: 'Titanic', rating: 4.6, comments: 580, description: 'A love story aboard the ill-fated ship.' },
    { id: '10', title: 'Pulp Fiction', rating: 4.4, comments: 390, description: 'Interwoven stories of crime and redemption.' },
    { id: '11', title: 'Fight Club', rating: 4.6, comments: 450, description: 'A man forms an underground fight club.' },
    { id: '12', title: 'The Godfather', rating: 4.9, comments: 520, description: 'The rise of a powerful mafia family.' },
    { id: '13', title: 'The Lord of the Rings: The Return of the King', rating: 4.9, comments: 490, description: 'The final battle for Middle-earth.' },
    { id: '14', title: 'Jurassic Park', rating: 4.3, comments: 370, description: 'Dinosaurs are brought back to life.' },
    { id: '15', title: 'The Lion King', rating: 4.7, comments: 410, description: 'A young lion returns to reclaim his throne.' },
    { id: '16', title: 'Spirited Away', rating: 4.8, comments: 290, description: 'A girl discovers a magical world.' },
    { id: '17', title: 'Coco', rating: 4.6, comments: 330, description: 'A boy journeys to the Land of the Dead.' },
    { id: '18', title: 'Whiplash', rating: 4.7, comments: 340, description: 'A student drummer pushed to his limits.' },
    { id: '19', title: 'The Prestige', rating: 4.5, comments: 360, description: 'Two magicians clash in a battle of wits.' },
    { id: '20', title: 'Django Unchained', rating: 4.4, comments: 380, description: 'A freed slave sets out to rescue his wife.' },
    { id: '21', title: 'The Departed', rating: 4.6, comments: 350, description: 'Undercover cops and moles collide in Boston.' },
    { id: '22', title: '1917', rating: 4.5, comments: 300, description: 'Two soldiers race against time in WWI.' },
    { id: '23', title: 'The Grand Budapest Hotel', rating: 4.4, comments: 270, description: 'A concierge and his protégé on a wild adventure.' },
    { id: '24', title: 'Parasite', rating: 4.8, comments: 420, description: 'A poor family infiltrates a wealthy household.' },
    { id: '25', title: 'No Country for Old Men', rating: 4.3, comments: 240, description: 'A hunter finds a suitcase of money and is pursued.' },
    { id: '26', title: 'Blade Runner 2049', rating: 4.5, comments: 260, description: 'A blade runner unearths a long-buried secret.' },
    { id: '27', title: 'The Social Network', rating: 4.4, comments: 290, description: 'The rise of Facebook and its controversies.' },
    { id: '28', title: 'Black Panther', rating: 4.6, comments: 390, description: 'A new king rises in Wakanda.' },
    { id: '29', title: 'Mad Max: Fury Road', rating: 4.7, comments: 350, description: 'A high-octane desert chase.' },
    { id: '30', title: 'The Revenant', rating: 4.5, comments: 300, description: 'A man fights for survival after betrayal.' },
    { id: '31', title: 'A Beautiful Mind', rating: 4.6, comments: 280, description: 'The life of a brilliant but troubled mathematician.' },
    { id: '32', title: 'La La Land', rating: 4.5, comments: 330, description: 'A jazz musician and actress fall in love.' },
    { id: '33', title: 'Shutter Island', rating: 4.7, comments: 360, description: 'A U.S. Marshal investigates a disappearance.' },
    { id: '34', title: 'Her', rating: 4.4, comments: 270, description: 'A man falls in love with an AI assistant.' },
    { id: '35', title: 'The Irishman', rating: 4.3, comments: 240, description: 'A hitman recalls his life in the mob.' },
    { id: '36', title: 'The Wolf of Wall Street', rating: 4.5, comments: 400, description: 'The rise and fall of a stockbroker.' },
    { id: '37', title: 'Tenet', rating: 4.2, comments: 310, description: 'Time inversion is the key to survival.' },
    { id: '38', title: 'Knives Out', rating: 4.6, comments: 360, description: 'A detective investigates a wealthy family’s secrets.' },
    { id: '39', title: 'The Batman', rating: 4.4, comments: 390, description: 'A dark, gritty take on the caped crusader.' },
    { id: '40', title: 'Dune', rating: 4.5, comments: 340, description: 'A noble family battles for control of a desert planet.' },
    { id: '41', title: 'Everything Everywhere All At Once', rating: 4.8, comments: 370, description: 'A woman connects with multiverse versions of herself.' },
    { id: '42', title: 'Oppenheimer', rating: 4.9, comments: 410, description: 'The story of the man behind the atomic bomb.' },
    { id: '43', title: 'Barbie', rating: 4.2, comments: 250, description: 'A satirical journey of identity and gender roles.' },
    { id: '44', title: 'The Whale', rating: 4.4, comments: 230, description: 'A reclusive man seeks redemption and connection.' },
    { id: '45', title: 'The Holdovers', rating: 4.3, comments: 220, description: 'A teacher stays on campus over the holidays.' },
    { id: '46', title: 'The Banshees of Inisherin', rating: 4.4, comments: 260, description: 'Two friends face a mysterious fallout.' },
    { id: '47', title: 'The Fabelmans', rating: 4.3, comments: 210, description: 'A young filmmaker finds his voice.' },
    { id: '48', title: 'John Wick', rating: 4.6, comments: 470, description: 'An ex-hitman seeks vengeance for his dog.' },
    { id: '49', title: 'Mission: Impossible – Fallout', rating: 4.5, comments: 420, description: 'Ethan Hunt faces his toughest mission yet.' },
    { id: '50', title: 'Guardians of the Galaxy Vol. 3', rating: 4.7, comments: 410, description: 'The Guardians face their final mission together.' }
  ];
    
  const totalMovies=movies.length;
  const tolalComments=movies.reduce((sum,movie)=>sum+movie.comments,0)
  const averageRating=(movies.reduce((sum,movie)=>sum+movie.rating,0)/totalMovies).toFixed(1)
  return (
        <div className="min-h-screen bg-black-100 p-6">

      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Dashboard Overview</h2>
      </div>
      <div>
        <div>
          <p> Total Movies</p>
          <p>{totalMovies}</p>
        </div>
         <div>
          <p> Total Comments</p>
          <p>{tolalComments}</p>
        </div>
         <div>
          <p> Average Ratings</p>
          <p>{averageRating}</p>
        </div>
      </div>
                
    </div>
  )
}

export default Home
