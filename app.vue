<template>
  <Table/>
</template>
<script lang="ts" setup>
import Table from "~/components/Table.vue";


type TableData = {
  id: string,
  name: string,
  steam: number,
  market: number,
  roi: number,
  profit: number,
}[]

const data = [
  {
    id: 1,
    name: 'UMP-45 | Gunsmoke (Field-Tested)',
    steam: 2,
    market: 1.35,
    roi: 50,
    profit: 0.04,
  },
  {
    id: 2,
    name: 'PP-Bizon | Facility Sketch (Factory New)',
    steam: 1.99,
    market: 1.56,
    roi: 83.33,
    profit: 0.05,
  },
  {
    id: 3,
    name: 'UMP-45 | Gunsmoke (Field-Tested)',
    steam: 2,
    market: 1.35,
    roi: 50,
    profit: 0.04,
  },
  {
    id: 4,
    name: 'PP-Bizon | Facility Sketch (Factory New)',
    steam: 1.99,
    market: 1.56,
    roi: 83.33,
    profit: 0.05,
  },
  {
    id: 5,
    name: 'UMP-45 | Gunsmoke (Field-Tested)',
    steam: 2,
    market: 1.35,
    roi: 50,
    profit: 0.04,
  },
  {
    id: 6,
    name: 'PP-Bizon | Facility Sketch (Factory New)',
    steam: 1.99,
    market: 1.56,
    roi: 83.33,
    profit: 0.05,
  },
]

// type CharactersResults = {
//   characters: {
//     results: {
//       id: string,
//       name: string,
//       image: string,
//       status: string,
//       species: string,
//       location: {
//         name: string
//       }
//     }[]
//   }
// }

// const query = gql`
//   query getCharacters {
//     characters {
//       results {
//         name
//         image
//         status
//         id
//         species
//         location {
//           name
//         }
//       }
//     }
//   }
//   `
// const { data } = await useAsyncQuery<CharactersResults>(query)
</script>
