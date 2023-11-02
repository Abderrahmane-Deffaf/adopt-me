import { useState, useTransition } from "react";
import useBreedList from "./useBreedList";
import Results from "./results";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
import {useSelector, useDispatch} from 'react-redux'
import { all } from "./features/searchParams/searchParamsSlice";
import { useGetSearchParamsQuery } from "./features/pets/petApiService";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const breeds = useBreedList(animal)[0];
  const dispatch = useDispatch() 

  const searchParams = useSelector((state) => state.searchParams.value);  

  const adoptedPet = useSelector((state)=>state.adoptPet.value) ; 

  const [isPending, startTransition] = useTransition() ; 

  //const results = useQuery(["search", searchParams], fetchSearch);
  const { data: pets} = useGetSearchParamsQuery(searchParams) ; 

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          startTransition(()=> {
            dispatch(all(obj));
          })
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          location
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animals">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breeds">
          Breed
          <select id="breed" name="breed" disabled={breeds.length === 0}>
            <option></option>
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        {
          isPending?(
            <div>loading</div>
          ): (
            <button>Submit</button>
          )
        }
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
