<template>

		    <RadSideDrawer ref="drawerBottom" drawerContentSize="Auto" drawerLocation="Bottom" showOverNavigation="true" @drawerOpening="onOpeningDrawerTriggered($event)" @drawerClosed="onClosedDrawerTriggered($event)" @drawerClosing="onClosingDrawerTriggered($event)"
		    :gesturesEnabled="gesturesEnabled">

		        <ScrollView ~drawerContent ref="drawerContent" style="margin-top:0;horizontal-alignment:center;">

		            <StackLayout height="50%" backgroundColor="#28ADAA">

		                <Gradient direction="top down" colors="#28ADAA, #28BAAA" borderRadius="0">
											<GridLayout rows="50" columns="*,auto">

												<StackLayout col="0" verticalAlignment="middle">
													<Label color="white" fontSize="16" textAlignment="left" text="Tulis Komentar" padding="0 10" />
												</StackLayout>

												<StackLayout col="1" horizontalAlignment="right" verticalAlignment="middle">
													<ButtonRipple margin="0 10" />
												</StackLayout>

											</GridLayout>
		                </Gradient>

		                <DockLayout style="background-color:rgba(242, 242, 235, 1);height:100%;padding:10" stretchLastChild="true">

		                    <DashboardNewTextView dock="top" placeholder="Isikan dengan nama kelompok" />

		                </DockLayout>

		            </StackLayout>
		        </ScrollView>

						<DockLayout ~mainContent style="height:50; font-size:24; padding: 10 18 10 0; border-top-width:1; border-top-color:rgba(219, 219, 211, 1); vertical-align: bottom; background-color:rgba(242, 242, 235, 1);" stretchLastChild="true" >

							<Label dock="left" width="15%" style="text-alignment:center;" :text="'fa-home' | fonticon" class="fa" />

					    <Label @tap="onOpenDrawerTap" dock="left" width="41%" style="background-color:white; padding:4,30,0,5; font-size:14; color:rgba(219, 219, 211, 0.75); border-width:1; border-color:rgba(219, 219, 211, 1); border-radius: 5;" marginRight="10" text="Tulis Komenter..." />

					    <Label dock="left" width="12%" style="text-alignment:center;" :text="'fa-heart' | fonticon" class="fa"  />
					    <Label dock="left" width="12%" style="text-alignment:center;" :text="'fa-tags' | fonticon" class="fa"  />

							<GridLayout rows="*,auto">
								<StackLayout style="vertical-align:top; horizontal-align:right;">
									<Label text="1" style="color:white;border-radius:10; padding:0 4; font-size:9; background-color:rgba(255, 0, 102, 1);" />
								</StackLayout>
						    <Label row="0" style="text-alignment:center;" :text="'fa-comments' | fonticon" class="fa"  />
							</GridLayout>

					  </DockLayout>


		    </RadSideDrawer>

</template>


<script>

import {
    isIOS, isAndroid
}
from 'platform';
import {
    EventData
}
from 'data/observable';
import {
    Page
}
from 'ui/page';
import {
    ContentView
}
from 'ui/content-view';
import {
    Label
}
from 'ui/label';

const application = require('tns-core-modules/application')

export default {
    data() {
        return {
            isDrawer: false,
            gesturesEnabled: false,
            drawerBottom: null,
        }
    },
    mounted() {
        this.drawerBottom = this.$refs.drawerBottom;

        const application = require('tns-core-modules/application');
        application.android.on('activityBackPressed', args => {

            if(this.isDrawer) {
              this.onCloseDrawerTap()
              return
            }

            // new Promise(resolve => {
            //     this.rendering0 = true;
            //     resolve();
            // }).then(result => {
            //     this.$navigateBack();
            //     // this.$modal.close("Aku Pulang")
            // });

            args.cancel = true //
        })

    },
    methods: {
        onBubbleEvent(args) {
					this.onOpenDrawerTap()
        },

				/**
				* Sidedrawer Event
				*/
				// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				onOpenDrawerTap() {
				    this.$refs.drawerBottom.nativeView.showDrawer();

				    this.gesturesEnabled = true
				},
				onCloseDrawerTap() {
				    this.$refs.drawerBottom.nativeView.closeDrawer();
				},
				onOpeningDrawerTriggered(arg) {
				    // trigger when sidedrawer opening
				},
				onClosedDrawerTriggered(arg) {
				    // trigger when sidedrawer closed

				    this.gesturesEnabled = false
				},
				onClosingDrawerTriggered(arg) {
				    // trigger when sidedrawer closing
				},
				// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    }
}

</script>
