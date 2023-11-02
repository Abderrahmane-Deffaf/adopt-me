import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import { useGetBreedListQuery } from "./features/pets/petApiService";

export default function useBreedList(animal) {
  //const results = useQuery(["breeds", animal], fetchBreedList);
  const {data:breeds, isLoading} = useGetBreedListQuery(animal)  ; 

  return [breeds ?? [], isLoading];
}
