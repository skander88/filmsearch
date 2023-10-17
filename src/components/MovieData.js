import { v4 as uuidv4 } from "uuid";
const MovieData = [
  {
    id: uuidv4(),
    Title: "Annabelle",
    Description: "Horror",
    PosterURL:
      "https://assets1.ignimgs.com/2019/05/28/annabelle-comes-home-ver2-poster-button-1559085417970.jpg",
    Rating: 4,
  },
  {
    id: uuidv4(),
    Title: "Spider-Man 3",
    Description: "Action",
    PosterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnWQV-_lMvTFXrQbrgpu8y1j6qaeouFqKzQ&usqp=CAU",
    Rating: 5,
  },
  {
    id: uuidv4(),
    Title: "Ted",
    Description: "Comedy",
    PosterURL:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Ted_%28film%29.png",
    Rating: 4.5,
  },
  {
    id: uuidv4(),
    Title: "Jumanji",
    Description: "Adventure",
    PosterURL:
      "https://m.media-amazon.com/images/I/61KPF16khwS._AC_UF1000,1000_QL80_.jpg",
    Rating: 4,
  },
];
export default MovieData;
