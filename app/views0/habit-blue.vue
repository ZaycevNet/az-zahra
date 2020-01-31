<style>

.full-border {
    border-width: 1;
    border-color: black;
}

.off-top-border {
    border-width: 1;
    border-color: black;
    border-top-width: 0;
}

.off-bottom-border {
    border-width: 1;
    border-color: black;
    border-bottom-width: 0;
}

ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}

</style>

<template>

<Page>
    <ActionBar>
        <GridLayout width="100%" columns="auto, *">
            <Label class="title" text="Welcome to NativeScript-Vue!" col="1" />
        </GridLayout>
    </ActionBar>

    <ScrollView>
        <!-- <StackLayout> -->
        <!-- <HabitItemCheckbox class="off-bottom-border" />
				<HabitItemCheckbox class="off-bottom-border" />
				<HabitItemCheckbox class="off-bottom-border" />
				<HabitItemCheckbox class="off-bottom-border" />
				<HabitItemCheckbox class="full-border" /> -->
        <!-- <router-view></router-view> -->
        <!-- </StackLayout> -->

        <Accordion row="2" height="100%" ref="accordion" allowMultiple="true" childItems="children" for="item of items">
            <v-template if="$odd" name="header-odd">
                <StackLayout >
                    <Label backgroundColor="green" fontSize="20px" :text="item.headerText"></Label>
                </StackLayout>
            </v-template>

            <v-template if="$even" name="header-even">
                <StackLayout>
                    <Label backgroundColor="orange" :text="item.headerText"></Label>
                </StackLayout>
            </v-template>

            <v-template if="$odd" name="title-odd">
                <StackLayout backgroundColor="white">
                    <Label :text="item.title"></Label>
                </StackLayout>
            </v-template>

            <v-template if="$even" name="title-even">
                <StackLayout backgroundColor="green">
                    <Label :text="item.title"></Label>
                    <Image height="100" width="100" decodeWidth="400" decodeHeight="400" loadMode="async" :src="item.image"></Image>
                </StackLayout>
            </v-template>


            <v-template if="$odd" name="content-odd">
                <StackLayout>
                    <Image decodeWidth="400" decodeHeight="400" loadMode="async" :src="item.image"></Image>
                    <Label :text="item.text"></Label>
                </StackLayout>
            </v-template>

            <v-template if="$even" name="content-even">
                <StackLayout>
                    <Image decodeWidth="400" decodeHeight="400" loadMode="async" :src="item.image"></Image>
                    <Label :text="item.text"></Label>
                </StackLayout>
            </v-template>

            <v-template if="$odd" name="footer-odd">
                <StackLayout>
                    <Label backgroundColor="yellow" :text="item.footerText"></Label>
                </StackLayout>
            </v-template>

            <v-template if="$even" name="footer-even">
                <StackLayout>
                    <Label backgroundColor="blue" :text="item.footerText"></Label>
                </StackLayout>
            </v-template>
        </Accordion>

    </ScrollView>
</Page>

</template>

<script>

export default {
    components: {
        // HabitItemCheckbox
    },
    data() {
        return {
            items: [{
                title: '1 Title',
                footer: '10',
                headerText: 'First',
                footerText: '4',
                image: 'https://raw.githubusercontent.com/triniwiz/nativescript-accordion/master/demo-vue/app/assets/images/batman.jpg',
                children: [{
                    image: '~/assets/images/a9ff17db85f8136619feb0d5a200c0e4.png',
                    text: 'Someone'
                }, {
                    text: 'Help',
                    image: '~/assets/images/svg.jpg'
                }]
            }, {
                title: '2 Title',
                footer: '20',
                headerText: 'Second',
                footerText: '5',
                image: 'https://raw.githubusercontent.com/triniwiz/nativescript-accordion/master/demo-vue/app/assets/images/batman.jpg',
                children: [{
                    text: 'Me',
                    image: '~/assets/images/shazam.jpg'
                }, {
                    text: 'Stop',
                    image: '~/assets/images/f29.png'
                }]
            }, {
                title: '3 Title',
                footer: '30',
                headerText: 'Third',
                footerText: '6',
                  image: 'https://raw.githubusercontent.com/triniwiz/nativescript-accordion/master/demo-vue/app/assets/images/batman.jpg',
                children: [{
                    text: 'This',
                    image: '~/assets/images/a9ff17db85f8136619feb0d5a200c0e4.png'
                }, {
                    text: 'Thing',
                    image: '~/assets/images/shazam.jpg'
                }]
            }, {
                title: '4 Title',
                footer: '40',
                headerText: 'Fourth',
                footerText: '7',
                image: 'https://raw.githubusercontent.com/triniwiz/nativescript-accordion/master/demo-vue/app/assets/images/batman.jpg',
                children: [{
                    text: 'Now',
                    image: '~/assets/images/batman.png'
                }, {
                    text: 'Please',
                    image: '~/assets/images/batman.jpg'
                }]
            }]

        }
    },
    methods: {
        onCheckedChangeHandler(value) {
                //vuex action
            },
            goBack: function() {
                this.$navigateBack();
            },
            expandAll: function() {
                this.$refs.accordion.nativeView.expandAll();
            }, collapseAll: function() {
                this.$refs.accordion.nativeView.collapseAll();
            }
    }
}

</script>
