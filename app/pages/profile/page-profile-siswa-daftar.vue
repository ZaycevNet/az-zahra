<style scoped>

.subtitle-border {
    border-width: 1;
    border-color: #28BAAA;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
}

.full-border-last-item {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
    border-top-width: 0;
    padding-bottom: 15;
}

.off-bottom-border {
    border-width: 1;
    border-color: #28BAAA;
    border-bottom-width: 0;
    border-top-width: 0;
}

.person-name {
    /* color: #28BAAA; */
    font-family: 'Halcom', 'Halcom_Bold';
    font-weight: bold;
    font-size: 16;
}

.person-title {
    /* color: #a3a7ad; */
    font-family: 'Halcom', 'Halcom_Regular';
    font-size: 13;
    /* text-transform: uppercase; */
}


/* .divider {
    background-color: lightgray;
} */

.search-bar {
    /* background-color: #28BAAA; */
    /* color: white; */
    font-family: 'Halcom', 'Halcom_Regular';
}

TextField {
    border-bottom-width: 1;
    border-bottom-color: transparent;
    background-color: white;
    padding: 10;
}

</style>

<template>

<StackLayout>

    <Gradient direction="top down" colors="#28ADAA, #28BAAA">
        <GridLayout class="search-bar" rows="auto" columns="*,auto" padding="10">

            <TextField borderRadius="5" :text="filter" @textChange="onSearchSubmit" :hint="String.fromCharCode('0xf375') + ' Cari Siswa...'" row="0" col="0" class="ion" marginRight="10 5 10 10" />

            <Ripple rippleColor="white" row="0" col="1" @tap="onSearchClear">
                <Label verticalAlignment="center" color="white" fontSize="24" class="ion" :text="String.fromCharCode('0xf2c0')" margin="0 5" />
            </Ripple>
        </GridLayout>
    </Gradient>

    <StackLayout padding="5 5 0 0">
        <RadListView ref="listView" layout="staggered" :gridSpanCount="2" for="item in people" @itemTap="" :itemInsertAnimation="itemInsertAnimation" :itemDeleteAnimation="itemDeleteAnimation">

            <!-- Wajib ada 1 v-template tanpa yang if -->
            <v-template>
              <Ripple @tap="goTo({ path:'/view-profile-siswa' })" rippleColor="#fff">
                <StackLayout marginLeft="5">
                    <Image borderWidth="0" borderColor='#28BAAA' :src="item.foto" stretch="aspectFill" height="200" />

                    <StackLayout padding="5" marginBottom="5" backgroundColor="White" borderWidth="0" borderColor='#28BAAA' borderTopWidth="0">
                        <Label>
                            <FormattedString>
                                <Span class="person-name" :text="item.nama_depan+' '" />
                                <Span class="person-name" :text="item.nama_belakang" />
                            </FormattedString>
                        </Label>
                        <Label :text="'NIS: '+ item.nis" class="person-title" />
                    </StackLayout>

                    <StackLayout height="1" backgroundColor="#28BAAA" marginBottom="10" />
                </StackLayout>
              </Ripple>
            </v-template>

        </RadListView>
    </StackLayout>
</StackLayout>


</template>

<script>

import Vue from 'nativescript-vue'

const delayrendering = require("@/mixins/delayrendering");

import {
    ListViewEventData, ListViewItemAnimation
}
from "nativescript-ui-listview";

export default {
    mixins: [delayrendering],
    props: ["items"],
    data() {
        return {
            // searchPhrase: "",
            itemInsertAnimation: undefined, //ListViewItemAnimation.Scale,
            itemDeleteAnimation: undefined, //ListViewItemAnimation.Scale,

            filter: "",
            people: [],

            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
            // untuk mengetahui jika parent sedang memanggil event
            bus: new Vue(),
            // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }
    },
    mounted() {
        // console.log("this.items", this.items)
        this.people = this.items
    },
    methods: {
      goTo({path}){
        this.$navigator.navigate(path, { transition: 'slideLeft' })
      },
        _refilter() {
                let people = []

                if (this.filter) {

                    let f = this.filter.trim().toLowerCase();

                    for (var i = 0; i < this.items.length; i++) {
                        let word = `${this.items[i].nama_depan} ${this.items[i].nama_belakang} ${this.items[i].nis}`.toLowerCase();

                        if (word.includes(f)) {
                            // console.log("XXXX")
                            people.push(this.items[i])
                        }
                    }

                    // this.people = this.items.filter(function(e) {
                    //     // console.log(e.name.toLowerCase());
                    //     // console.log(e.name.toLowerCase().includes(f));
                    //     let word = `${e.nama_depan} ${e.nama_belakang} ${e.nis}`.toLowerCase();
                    //     // word.search(f)
                    //     // word.indexOf(f)
                    //     // console.log(word, e.nama_depan.toLowerCase().includes(f));
                    //     e.nama_depan.toLowerCase().includes(f)
                    // });
                }

                //console.log(this.people.length);
                return this.people = people;
            },

            onSearchSubmit(args) {
                let searchBar = args.object;
                this.filter = searchBar.text; //.trim().toLowerCase();

                if (this.filter.length <= 0) return this.onSearchClear();

                this._refilter().slice(0)

                // console.log(this.people);
                // this.set("people", this._refilter().slice(0));
            },

            onSearchClear() {
                this.people = this.items;
                this.filter = "";
                //this.set("people", this.allPeople);
            },

            onNext() {
                // console.log(this.$refs.dataform.nativeView)
                console.log('onSubmit')
                    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    // untuk mengakses event onSubmit() dari parent->child perlu mengirim bus.$event
                    // untuk mengetahui jika parent sedang memanggil event
                this.bus.$emit('onSubmitParent')
                    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            },
    }
}

</script>
