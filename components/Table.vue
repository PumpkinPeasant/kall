<template>
  <v-table>
    {{variab}}
    <i class="material-icons">add_shopping_cart</i>
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

const { variab } = defineProps(['variab'])

const {data} = await useFetch('/api/test')
console.log(data)
</script>

<style scoped>

</style>
