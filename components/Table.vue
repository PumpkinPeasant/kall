<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        #
      </th>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Steam
      </th>
      <th class="text-left">
        Market
      </th>
      <th class="text-left">
        ROI
      </th>
      <th class="text-left">
        Profit
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in data"
        :key="item.id"
    >
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.steam }}</td>
      <td>{{ item.market }}</td>
      <td>{{ item.roi }}</td>
      <td>{{ item.profit }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>
type TableData = {
  id: number,
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
] as TableData
</script>

<style scoped>

</style>
