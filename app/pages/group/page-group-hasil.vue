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
    color: #28BAAA;
    font-family: 'Halcom', 'Halcom_Bold';
    font-weight: bold;
    font-size: 16;
}

.person-title {
    color: #a3a7ad;
    font-family: 'Halcom', 'Halcom_Regular';
    font-size: 13;
    /* text-transform: uppercase; */
}

.ranking-activity {
    color: #28BAAA;
    margin-top:-4;
    font-size: 26;
    text-alignment: right;
    font-weight: bold;
}

.total-activity {

    font-size: 18;
    text-alignment: right;
}

.info-activity {
    font-size: 10;
    text-alignment: right;
    color:#ff4081;
    font-style: italic;
}


/* .divider {
    background-color: lightgray;
} */

.search-bar {
    background-color: #28BAAA;
    /* color: white; */
    font-family: 'Halcom', 'Halcom_Regular';
}

TextField {
    border-bottom-width: 1;
    border-bottom-color: transparent;
    background-color: white;
    padding: 10;
}

Label {
  vertical-alignment: middle;
}

</style>

<template>

<StackLayout>

        <GridLayout class="search-bar" rows="auto" columns="auto,auto,auto,*,auto" padding="10">

            <!-- <Ripple rippleColor="white" row="0" col="0" @tap="onSearchClear">
                <Label verticalAlignment="center" color="white" fontSize="24" class="ion" :text="'ion-ios-arrow-up' | fonticon" margin="0 5" />
            </Ripple>

            <Ripple rippleColor="white" row="0" col="1" @tap="onSearchClear">
                <Label verticalAlignment="center" color="white" fontSize="24" class="ion" :text="'ion-ios-arrow-down' | fonticon" margin="0 5" />
            </Ripple> -->

            <GroupPopupFilter row="0" col="0" />

            <!-- <Ripple rippleColor="white" row="0" col="2" @tap="onSearchClear">
                <Label verticalAlignment="center" color="white" fontSize="24" class="ion" :text="'ion-md-calendar' | fonticon" margin="0 5" />
            </Ripple> -->

            <GroupPopupCalender row="0" col="1" />
            <GroupPopupRanking row="0" col="2" />

            <!-- <Ripple rippleColor="white" row="0" col="3" @tap="onSearchClear">
                <Label verticalAlignment="center" color="white" fontSize="24" class="ion" :text="'ion-ios-trophy' | fonticon" margin="0 5" />
            </Ripple> -->

            <TextField borderRadius="3" :text="filter" @textChange="onSearchSubmit" :hint="String.fromCharCode('0xf375') + ' Cari Siswa...'" row="0" col="4" class="ion" margin="0 5 0 5" />

            <Ripple rippleColor="white" row="0" col="4" @tap="onSearchClear">
                <Label verticalAlignment="center" color="white" fontSize="24" class="ion" :text="String.fromCharCode('0xf2c0')" margin="0 5" />
            </Ripple>
        </GridLayout>

        <RadListView ref="listView" layout="staggered" :gridSpanCount="1" for="item in people" @itemTap="" :itemInsertAnimation="itemInsertAnimation" :itemDeleteAnimation="itemDeleteAnimation">

            <!-- Wajib ada 1 v-template tanpa yang if -->
            <v-template>
              <CardView elevation="7" margin="5 7.5" radius="20">
                <Gradient direction="to left" colors="white, white, white, white,  rgba(40,186,170,0.00)">
                <GridLayout columns="85,*" rows="85" margin="0" padding="5" borderRadius="10"  borderWidth="0" borderColor="rgba(40,186,170,0.5)">
                    <StackLayout col="0" row="0" dock="left" padding="5">
                        <Image :src="item.foto" stretch="aspectFill" width="100%" height="100%" borderRadius="50%" />
                    </StackLayout>
                    <StackLayout col="1" padding="0 10" verticalAlignment="middle">
                        <DockLayout stretchLastChild="true" width="100%">
                            <StackLayout dock="left">
                                <Label>
                                    <FormattedString>
                                        <Span class="person-name" :text="item.nama_depan +' '" />
                                        <Span class="person-name" :text="item.nama_belakang" />
                                    </FormattedString>
                                </Label>
                                <Label :text="'NIS: '+ item.nis" class="person-title" />
                                <Label>
                                    <FormattedString>

                                        <Span class="person-title" :text="item.jenjang+':'" />
                                        <Span class="person-title" :text="' Kelas '+ item.kelas " />
                                        <Span class="person-title" :text="' - '+item.rombel" />
                                    </FormattedString>
                                </Label>

                            </StackLayout>

                            <StackLayout>
                                <Label :text="item.total_aktivitas" class="ranking-activity" />
                                <Label text="10/10" class="total-activity" />
                            </StackLayout>
                        </DockLayout>
                        <Label class="info-activity" text="Perhitungan SKM Harian" />
                    </StackLayout>
                </GridLayout>
              </Gradient>
              </CardView>
            </v-template>

        </RadListView>

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
    computed: {

    },
    mounted() {
        // console.log("this.items", this.items)
        this.people = this.items
    },
    methods: {

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
