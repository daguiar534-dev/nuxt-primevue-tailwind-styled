<template>
  <div class="container">

    <div class="flex flex-row gap-2 pt-2">
      <Button label="Theme works" />
      <Button severity="warn" label="Theme works" />
    </div>
    <div class="pt-4 content-center">
      <Card class="w-64">
        <template #title>Test for Kevin</template>
        <template #content>My name Jeff</template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>