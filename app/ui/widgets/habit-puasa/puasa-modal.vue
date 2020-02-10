<style scoped>
.btn-next {
    width: 100%;
    border-radius: 10%;
    color: white;
    font-weight: bold;
    padding: 25px;
    background-color: rgba(255,0,51,0.6);
    text-align: center;
    /* margin-top: 20px; */
    /* margin-bottom: 20px; */
}

</style>
<template>
	<StackLayout>
		<Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" verticalAlignment="middle">
				<Label marginTop="10" textAlignment="center" fontWeight="bold" fontSize="20" verticalAlignment="left" text="Penjelasan" />
				<Label marginBottom="10" textAlignment="center" fontSize="14" verticalAlignment="left" text="
		بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم " />
		</Gradient>

		<ScrolLView height="100%">
			<StackLayout>
				<ContentComponent :content="contentView" />

				<StackLayout padding="10 10" v-shadow="10" >
						<Ripple @tap="onBack" rippleColor="white">
								<!-- <Label horizontalAlignment="right" class="btn-next" text="Tutup" /> -->

								<Label class="btn-next" horizontalAlignment="right">
										<FormattedString>
												<Span :text="'fa-close' | fonticon" fontSize="16" backgroundColor="rgba(255,0,51,0)" class="fa" />
												<Span text=" Tutup" backgroundColor="rgba(255,0,51,0)"/>
										</FormattedString>
								</Label>
						</Ripple>
				</StackLayout>


			</StackLayout>
		</ScrolLView>

	</StackLayout>
</template>

<script>
export default {
	props: ["content"],
	data(){
		return {
			contentView: this.content ? this.content : `
	<StackLayout padding="10 10 0 10">
			<Label text="Tilawah" color="#28BAAA" fontSize="24" paddingBottom="10" />
			<Label textWrap="true">
				<FormattedString>
						<Span text="Pengertian tilawah" fontWeight="bold" />
						<Span> adalah pembacaan ayat-ayat Alquran yang dilakukan dengan baik dan indah. Dalam bahasa Arab kata tilawah memiliki makna yang jauh lebih dalam. Tilawah terbagi dua yakni segi pelafalan dan segi makna. Dari segi pelafalan tilawah berarti kegiatan membaca Alquran dengan baik dan benar sesuai dengan aturan dan kaidah yang ada seperti melafalkan huruf-huruf dengan cara yang benar, memahami sifat masing-masing huruf, serta mempelajari tajwid dan mengaplikasikannya ketika membaca Alquran. Setelah dibaca dengan baik dan benar kemudian dipahami maknanya dan ditaati. Menjalankan semua yang diperintahkan dan menjauhi semua yang dilarang. Dapat kita lihat bahwa tilawah lebih dari sekedar membaca suatu ayat tetapi membaca dengan benar dan menaati isi ayat tersebut.
					</span>
				</FormattedString>
			</Label>

			<Label textWrap="true">
				<FormattedString>
						<Span text="Tilawah Lafdhihi" fontWeight="bold" />
						<Span> yang artinya membaca Al-Qur’an dengan lafadz-lafadznya atau dari segi lafadznya. Tahapan ini sebaiknya dilakukan pada anak-anak ataupun pemula yang baru mengenal Islam, misalnya para mualaf. Karena jenis tilawah ini untuk mengetahui makharijul huruf, yaitu tempat keluarnya huruf melalui lisan. Juga untuk mempelajari hukum-hukum dari tajwid yang nantinya untuk memperbaiki tilawah Al-Qur’an.
					</span>
				</FormattedString>
			</Label>

			<Label textWrap="true">
				<FormattedString>
						<Span text="Tilawah Hukmihi" fontWeight="bold" />
						<Span> yaitu membaca Al-Qur’an dari segi-segi hukumnya. Dengan kata lain, tilawah jenis ini adalah untuk menelaah kandungan dari isi Al-Qur’an tersebut. Sehingga juga mengetahui hukum-hukum yang telah Alloh SWT., tetapkan agar dapat menjalankan perintah dan menjauhi larangannya. Inilah tujuan utama dari diturunkannya Al-Qur’an.
					</span>
				</FormattedString>
			</Label>
</StackLayout>
			`
		}
	},
	components: {
			// belum support looping
			ContentComponent: {
					functional: true,
					render: (h, {props}) => h({
						template: props.content
					})
			}
	},
	methods: {
		onBack() {
			new Promise(resolve => {
					resolve();
			}).then(result => {
					this.$modal.close("Aku Pulang")
			});
		},
	}
}
</script>
