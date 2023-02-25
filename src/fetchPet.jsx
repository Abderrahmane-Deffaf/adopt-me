const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apisRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apisRes.ok) {
    throw new Error("the correspond id does not ok");
  }
  return apisRes.json();
};

export default fetchPet;
