<template>
  <Page>
    <ActionBar>
        <Label class="title" text="Page 2" />
    </ActionBar>
  <StackLayout>
    <Label class="message" text="Second"/>
    <Button @tap="$router.push('/first')" class="drawer-item" text="Item 1"/>
    <Button @tap="$router.push('/third')" class="drawer-item" text="Item 3"/>
  </StackLayout>
</Page>
</template>
