<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" col="0"/>
        <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
      </GridLayout>
    </ActionBar>

    <StackLayout>
      <Label text="Some Text at 3"></Label>
      <Button @tap="$router.replace('/first')" class="drawer-item" text="Item 1"/>
      <Button @tap="$router.replace('/second')" class="drawer-item" text="Item 2"/>
      <Button @tap="$router.replace('/sda')" class="drawer-item" text="Item 3"/>
      <router-view></router-view>
    </StackLayout>
  </Page>
</template>
