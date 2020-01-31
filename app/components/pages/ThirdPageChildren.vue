<template>
    <StackLayout>
      <Label class="message" text="Third"></Label>
      <Button @tap="$router.push('/first')" class="drawer-item" text="Item 1"/>
      <Button @tap="$router.push('/second')" class="drawer-item" text="Item 2"/>
    </StackLayout>
</template>
