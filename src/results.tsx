import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets?.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
          id={pet.id}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
        ></Pet>
      ))}
    </div>
  );
};
export default Results;
