<template>
  <StackLayout>
    <Label class="message" text="First" />
    <Button @tap="$router.push('/second')" class="drawer-item" text="Item 2"/>
    <Button @tap="$router.push('/third')" class="drawer-item" text="Item 3"/>    
  </StackLayout>
</template>
