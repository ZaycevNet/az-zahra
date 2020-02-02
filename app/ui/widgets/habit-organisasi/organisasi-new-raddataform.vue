
<template>
	<StackLayout @loaded="onDateFormat">
		<RadDataForm
			id="dataform"
			ref="dataform"
			:source="laporan"
			:metadata="laporanMetadata"
			@propertyEdited="onPropertyEdited"
			@propertyValidate="onPropertyValidate"
			@propertyValidated="onPropertyValidated">

			<TKEntityProperty v-tkDataFormProperty name="deskripsi">
				<TKPropertyEditor v-tkEntityPropertyEditor type="Text">
				</TKPropertyEditor>
			</TKEntityProperty>

			<!-- <TKEntityProperty v-tkDataFormProperty name="date" index="3">
        <TKPropertyEditor v-tkEntityPropertyEditor type="DatePicker">
          <TKPropertyEditorParams v-tkEditorParams minDate="2020-01-16" maxDate="2020-05-16"></TKPropertyEditorParams>
				</TKPropertyEditor>
      </TKEntityProperty> -->
		</RadDataForm>

	</StackLayout>
</template>

<script>
import { AutoCompleteDisplayMode, DataFormEditorType, DataFormValidationMode, DataFormCommitMode } from 'nativescript-ui-dataform';
const { isIOS } = require("tns-core-modules/platform");

export default {
	props: {
		bus: null,
	},
	watch: {
		laporan(val) {
			console.log(val)
		}
	},
	data() {
    return {
      laporan: {
				tempat: "",
				waktu: "",
				tanggal: "2020-01-22",

				// date: "2020-01-22",
        // deskripsi: "",
				// kategori: "",
				// private: false,
				// agreement: false,
      },
      laporanMetadata: {
      isReadOnly: false,
      commitMode: DataFormCommitMode.Immediate,
      validationMode: DataFormValidationMode.Immediate,

      propertyAnnotations: [
					{
						name: "tempat",
						displayName: "Tempat",
						index: 0,
						editor: "Text",
						hintText: "masjid, sekolah, ...",
						validators: [
							{
								name: "NonEmpty",
								params: {
									'errorMessage': 'Wajib diisi',
								}
							},
							{
								name: "MinimumLength",
								params: {
									length: 6,
									'errorMessage': 'Minimal 6 karakter',
								}
							}
						]
					},
					{
						name: "waktu",
						displayName: "Waktu",
						index: 1,
						editor: "TimePicker",
						validators: [
							{
								name: "NonEmpty",
								params: {
									'errorMessage': 'Wajib diisi',
								}
							},
						]
					},
					{
						name: "tanggal",
						displayName: "Tanggal",
						index: 2,
						editor: "DatePicker",
						maxDate: "2020-02-01",
						minDate: "2010-02-01",
						validators: [
							{
								name: "NonEmpty",
								params: {
									'errorMessage': 'Wajib diisi',
								}
							},
						]
					},
					// {
          //   'name': 'kategori',
          //   'displayName': 'Kategori Kejadian',
          //   'index': 0,
          //   'editor': DataFormEditorType.AutoCompleteInline,
          //   'editorParams': {
					// 		'autoCompleteDisplayMode': AutoCompleteDisplayMode.Tokens,
					// 		'validators': [
					// 				{
					// 					name: "NonEmpty"
					// 		  	},
					// 			  {
					// 					name: "MinimumLength",
					// 					params: {
					// 					  length: 6
					// 					}
					// 			  }
					// 			]
		      //   },
	        //   'valuesProvider': ['sekolah', 'masjid', 'kantor desa'],
          // },
          // {
          //   'name': 'kategori',
          //   'displayName': 'Kategori Kejadian',
          //   'index': 0,
          //   'editor': "Picker",
					// 	'validators': [
					// 		{
					// 				name: "NonEmpty",
	        //         params: {
	        //           'errorMessage': 'Wajib diisi',
	        //         }
					// 	  },
					// 	],
          //   'valuesProvider': ['New York', 'Washington', 'Los Angeles'],
          // },
          {
            name: "deskripsi",
            displayName: "Deskripsi Kejadian",
            index: 1,
						editor: "MultilineText",
            validators: [
              {
                name: "NonEmpty",
                params: {
                  'errorMessage': 'Wajib diisi',
                }
              },
              {
                name: "MinimumLength",
                params: {
                  length: 6,
                  'errorMessage': 'Minimal 6 karakter',
                }
              }
            ]
          },
          {
            'name': 'private',
            'displayName': 'Apakah laporan ini rahasia?',
            'index': 2,
            'editor': 'Switch',
			/*
            'validators': [
              {
                'name': 'IsTrueValidator',
              },
            ],
			*/
          },
          {
            'name': 'agreement',
            'displayName': 'Saya bertanggung jawab atas laporan ini dengan penuh kejujuran',
            'index': 3,
            'validators': [
              {
                'name': 'IsTrueValidator',
                'params': {
                  'errorMessage': 'Wajib dicenteng',
                }
              },
            ],
          }
        ]
      }
    }
	},
	mounted() {
			// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			// untuk meng-trigger onSubmit() dari parent->child perlu mendengar bus.$event
			this.bus.$on('onSubmitParent', this.onSubmit)
					// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	},
	methods: {
		onDateFormat(args){
				// let dataForm = this.$refs.dataForm;
		    var page = args.object;
		    let component = page.getViewById("dataform");
		    let entity = component.getPropertyByName("tanggal");
		    if(isIOS){
		        console.log(entity.editor.ios);
		        var dateFormatter = NSDateFormatter.alloc().init();
		        dateFormatter.dateFormat = "MM-yyyy-dd";
		        entity.editor.ios.dateFormatter = dateFormatter;
		    }else{
		        var simpleDateFormat = new java.text.SimpleDateFormat("dd-MM-yyyy", java.util.Locale.US);
		        entity.editor.android.setDateFormat(simpleDateFormat);
		    }
		},
		onSubmit(){
			console.log(this.laporan.tanggal)
	      // this.$refs.dataform.validateAll()
	      //   .then(result => {
				// console.log(this.result)
	      //   });
		},
		onPropertyEdited(args) {
			console.log(args)
		},
    onPropertyValidate(args) {
      //args.returnValue = validationResult;
    },
    onPropertyValidated({ object, propertyName, entityProperty }) {
      //const validatedValue = entityProperty.valueCandidate;
      //const validationResult = entityProperty.isValid;
    },

	}
}
</script>
