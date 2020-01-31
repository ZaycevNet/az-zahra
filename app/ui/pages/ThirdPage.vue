<template>
  <Page>
    <ActionBar>
        <Label class="title" text="Page 3"/>
    </ActionBar>
    <StackLayout>
      <Button @tap="$router.push('/first')" class="drawer-item" text="Item 1"/>
      <Button @tap="$router.push('/second')" class="drawer-item" text="Item 2"/>
    </StackLayout>
  </Page>
</template>
