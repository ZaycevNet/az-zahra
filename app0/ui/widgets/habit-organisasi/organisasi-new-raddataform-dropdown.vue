<style scoped>
/* PropertyEditor {
    background-color: #00BCD4;
    color: #303F9F;
    border-color: #303F9F;
    border-width: 5;
    border-radius: 5;
    margin: 10;
    padding: 10;
    font-size: 14;
}

PropertyEditor:focus {
    background-color: #303F9F;
}

DataFormEditorLabel {
    color:#212121;
    background-color: white;
    font-style: italic;
    padding: 10;
    margin: 10;
    border-color: #303F9F;
    border-width: 5;
    border-radius: 5;
    width: 150;
    position: left;
}

DataFormEditorCore {
    margin: 10;
    padding: 10;
    background-color: white;
    border-color: #303F9F;
    border-width: 5;
    border-radius: 5;
    font-family: 'Times New Roman', Times, serif;
}

PropertyEditor[type='Text'] {
    font-weight: bold;
}

EntityProperty[name='name'] DataFormEditorLabel {
    width: 0;
    visibility: collapsed;
} */
</style>

<template>
	<GridLayout rows="25, auto" marginBottom="0">
			<Label ref="label" row="1" :text="placeholder" opacity="0.4"
					fontSize="14" class="input" />

					<RadDataForm
						ref="dataform" row="1" fontSize="14" borderBottomWidth="0" borderBottomColor="#cec8c8"
						padding="0"
						id="dataform"
						:source="laporan"
						:metadata="laporanMetadata"
						@propertyEdited="onPropertyEdited"
						@propertyValidate="onPropertyValidate"
						@propertyValidated="onPropertyValidated">

						<!-- <TKEntityProperty v-tkDataFormProperty name="name">
		          <TKPropertyEditor v-tkEntityPropertyEditor type="Text">
		            <TKPropertyEditorStyle v-tkPropertyEditorStyle labelFontStyle="red"></TKPropertyEditorStyle>
		          </TKPropertyEditor>
		        </TKEntityProperty> -->

					</RadDataForm>
	</GridLayout>
</template>

<script>
import { AutoCompleteDisplayMode, DataFormEditorType, DataFormValidationMode, DataFormCommitMode } from 'nativescript-ui-dataform';

import {
		Color
} from "color";

export default {
	props: {
			bus: null,
			placeholder: {
					type: String
			},
	},
	watch: {
		laporan(val) {
			console.log(val)
		}
	},
	data() {
    return {
      laporan: {
				kategori: "",
				// name: "",
      },
      laporanMetadata: {
      isReadOnly: false,
      commitMode: DataFormCommitMode.Immediate,
      validationMode: DataFormValidationMode.Immediate,

      propertyAnnotations: [
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
          {
            'name': 'kategori',
            'displayName': 'XXX',
            'index': 0,
            'editor': "Picker",
						'validators': [
							{
									name: "NonEmpty",
	                params: {
	                  'errorMessage': 'Wajib diisi',
	                }
						  },
						],
            'valuesProvider': ['osis','ekstrakurikuler','pramuka','umum'],
          },
        ]
      }
    }
	},
	mounted(){
			let dataForm = this.$refs.dataform;
	    this._nameEditor = dataForm.getPropertyByName('kategori').editor;

			setTimeout(() => {
				const label = this.$refs.label.nativeView;
				const textField = this.$refs.dataform.nativeView;
				label
						.animate({
								translate: {
										x: 0,
										y: -25
								},
								opacity: 1
						})
						.then(() => {
							textField.borderBottomColor = new Color("#28BAAA");

							this._nameEditor.propertyEditorStyle.labelTextColor = "orange";

						}, () => {});
			},500)

			// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			// untuk meng-trigger onSubmit() dari parent->child perlu mendengar bus.$event
			this.bus.$on('onSubmitParent', this.onSubmit)
			// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	},
	methods: {
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
