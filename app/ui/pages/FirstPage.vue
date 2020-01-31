<template>
  <Page>
    <ActionBar>
        <Label class="title" text="Page 1" />
    </ActionBar>
    <StackLayout>
      <Button @tap="$router.push('/second')" class="drawer-item" text="Item 2"/>
      <Button @tap="$router.push('/third')" class="drawer-item" text="Item 3"/>
    </StackLayout>
  </Page>
</template>
