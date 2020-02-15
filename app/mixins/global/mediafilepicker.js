const { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } = require('nativescript-mediafilepicker');

let options = {
    android: {
        isCaptureMood: false, // if true then camera will open directly.
        isNeedCamera: true,
        maxNumberFiles: 1,
        isNeedFolderList: true
    }, ios: {
        isCaptureMood: false, // if true then camera will open directly.
        maxNumberFiles: 1
    }
};

module.exports = {
		// data(){
		// 	return {
		// 		fotopicker:"",
		// 	}
		// },
		// watch: {
		// 	fotopicker(val) {
		// 		alert(val)
		// 	}
		// },
		methods: {
			onImageFilePicker(){
				const vm = this

				let mediafilepicker = new Mediafilepicker();
				mediafilepicker.openImagePicker(options);

				mediafilepicker.on("getFiles", function (res) {
				    let results = res.object.get('results');
				    console.dir(results);

						// vm.fotopicker = results;
						vm.fotoProfile = results[0].file

				});

				mediafilepicker.on("error", function (res) {
				    let msg = res.object.get('msg');
				    console.log(msg);
				});

				mediafilepicker.on("cancel", function (res) {
				    let msg = res.object.get('msg');
				    console.log(msg);
				});

			}
		}
}
