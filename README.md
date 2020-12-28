# Graphql TypeScript Basic CRUD Application

## Query and Mutation
```
mutation create {
  createMovie(options: { title: "END GAME", minutes: 180 }) {
    id
    title
    minutes
  }
}

query movies {
  movies {
    id
    title
    minutes
  }
}

mutation update {
  updateMovie(id: 2, input: { title: "Avenger" })
}

mutation delete {
  deleteMovie(id: 3)
}
```
