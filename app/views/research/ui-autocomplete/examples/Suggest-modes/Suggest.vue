<template>
<Page>
  <ActionBar :title="title">
    <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
  </ActionBar>
  <StackLayout ios:backgroundColor="#CDCECE" padding="5">
    <Label text="Select country"></Label>
    <RadAutoCompleteTextView ref="autocomplete"
                             :suggestMode="suggestMode"
                             :items="dataItems">
      <SuggestionView ~suggestionView suggestionViewHeight="300">
        <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
          <v-template>
            <StackLayout orientation="vertical">
              <Label :text="item.text" marginLeft="5" android:marginTop="15"></Label>
            </StackLayout>
          </v-template>
        </StackLayout>
      </SuggestionView>
    </RadAutoCompleteTextView>
  </StackLayout>
</Page>
</template>
<script>
import * as frameModule from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
// >> autocomplete-suggest-mode-vue
import { AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount } from '../data';

const description = 'Suggest';

export default {
  name: 'Suggest',
  description: description,
  data () {
    let dataItems = new ObservableArray();

    for (let i = 0; i < getCountriesCount(); i++) {
      dataItems.push(getCountry(i));
    }
    return {
      title: description,
      dataItems: dataItems,
      suggestMode: AutoCompleteSuggestMode.Suggest
    };
  },
  methods: {
    onNavigationButtonTap() {
      frameModule.topmost().goBack();
    }
  }
};
// << autocomplete-suggest-mode-vue
</script>
