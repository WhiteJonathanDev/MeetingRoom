<template>
  <div>
    <button
      @click="get">
      button get test
    </button>
    <button
        @click="create">
      button create test
    </button>
  </div>
</template>

<script setup>
import axios from 'axios'
const get = async () => {
  const response = await axios.get("api/")
  console.log(response)
}

const create = async () => {
  const response = await axios.post("api/create", {
    roomName: 'roomName 2023',
    location: 'location 2023'
  });
  console.log(response)
}
</script>
