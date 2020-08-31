import React from "react";
import { Grid } from "@chakra-ui/core";
import { gql, useQuery } from "@apollo/client";
import Card from "./card";

const List = () => {
  const GET_CHARACTERS = gql`
    query GetCharacters {
      characters(page: 1) {
        results {
          id
          name
          image
          gender
          status
          location {
            name
            type
            dimension
          }
          species
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2} margin={2}>
      {data.characters.results.map((result) => (
        <div key={result.id}>
          <Card result={result} />
        </div>
      ))}
    </Grid>
  );
};

export default List;
