<template>
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="bg-white p-4 pt-0 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">
          <slot name="title"></slot>
        </div>
        <p class="text-gray-700 text-base">
          <slot name="description"></slot>
        </p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">
            <slot name="institute"></slot>
          </p>
          <p class="text-gray-600">
            <slot name="time"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimelineCard'
  }
</script>
