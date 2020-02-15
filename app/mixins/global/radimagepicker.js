const { PickerOptions, RadImagepicker } = require("@nstudio/nativescript-rad-imagepicker");
const { screen } = require("tns-core-modules/platform");

module.exports = {
  data() {
    return {
      images_RadImagePicker: [],
      radImagepicker: null,
      imageWidth_RadImagePicker: 0,
      hideHint_RadImagePicker: false,
    }
  },

   mounted() {
     if (screen.mainScreen.widthDIPs >= 350) {
       this.imageWidth_RadImagePicker = screen.mainScreen.widthDIPs / 4;
     } else {
       this.imageWidth_RadImagePicker = screen.mainScreen.widthDIPs / 3;
     }
     this.radImagepicker = new RadImagepicker();
   },

   methods: {
     pickImageRadImagePicker() {
       const opts = {
         doneButtonTitle: "Finish",
         allowVideoSelection: false,
         noImagesTitle: "No images here :(",
         imageLimit: 3
       };

       this.radImagepicker.pick(opts).then(selectedImages => {
         if (selectedImages) {
           this.images_RadImagePicker.length = 0;
           for (let i = 0; i < selectedImages.length; i++) {
             this.images_RadImagePicker.push({
               source: selectedImages[i]
             });
						 console.log('images_RadImagePicker', selectedImages);
           }

					 this.fotoProfile = selectedImages[0];

           // const repeaterView: Repeater = topmost().getViewById("repeaterView");
           // repeaterView.items = this.images;

           // (<any> topmost().getViewById('hint')).visibility = 'collapse';
         } else {
           console.log('User pressed cancel');
         }
       });

     }
   }
 }
