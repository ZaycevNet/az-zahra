<style scoped>

.changed-styles {
    padding: 10 0;
    font-size: 14;
		width: auto;
    color: black;
    text-align: left;
}

.default:disabled {
    opacity: 0.5
}

/* StackLayout {
    horizontal-align: center;
} */

Label {
  font-weight: normal;
}
</style>
<template>
  <GridLayout rows="25, auto, *" marginBottom="10">
          <StackLayout ref="textField" row="1" colSpan="2" borderBottomWidth="1" borderBottomColor="#cec8c8" width="auto">
      			<DropDown :items="items" class="changed-styles" hint="" @opened="dropDownOpened" @closed="dropDownClosed" isEnabled="true" paddingLeft="5"
      			 @selectedIndexChanged="dropDownSelectedIndexChanged" />
      		</StackLayout>

          <Label ref="label" paddingBottom="2.5" rowSpan="2" text="Surat" opacity="0.4" verticalAlignment="bottom"  fontSize="14" class="input" />

          <Label text="wajib diisi" horizontalAlignment="right" verticalAlignment="bottom" color="rgba(255,0,51,0.6)" fontSize="12" row="2" />

  </GridLayout>

</template>

<script>
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import {
    Color
} from "color";
export default {
	data(){
		return {
			items: [
        " Surah Al-Fatihah - Pembukaan",
        " Surah Al-Baqarah - Sapi Betina",
        " Surah Ali ‘Imran - Keluarga ‘Imran",
        " Surah An-Nisa’ - Wanita",
        " Surah Al-Ma’idah - Jamuan (Hidangan Makanan)",
        " Surah Al-An’am - Binatang Ternak",
        " Surah Al-A’raf - Tempat Yang Tertinggi",
        " Surah Al-Anfal - Harta Rampasan Perang",
        " Surah At-Taubah - Pengampunan",
        " Surah Yunus - Nabi Yunus",
        " Surah Hud - Nabi Hud",
        " Surah Yusuf - Nabi Yusuf",
        " Surah Ar-Ra’d - Guruh (Petir)",
        " Surah Ibrahim - Nabi Ibrahim",
        " Surah Al-Hijr - Al Hijr (Nama Gunung)",
        " Surah An-Nahl - Lebah",
        " Surah Al-Isra’ - Memperjalankan Di Waktu Malam",
        " Surah Al-Kahf - Penghuni-Penghuni Gua",
        " Surah Maryam - Maryam (Maria)",
        " Surah Ta Ha - Ta Ha",
        " Surah Al-Anbiya - Nabi-Nabi",
        " Surah Al-Hajj - Haji",
        " Surah Al-Mu’minun - Orang-Orang Mukmin",
        " Surah An-Nur - Cahaya",
        " Surah Al-Furqan - Pembeda",
        " Surah Asy-Syu’ara’ - Penyair",
        " Surah An-Naml - Semut",
        " Surah Al-Qasas - Cerita",
        " Surah Al-‘Ankabut - Laba-Laba",
        " Surah Ar-Rum - Bangsa Romawi",
        " Surah Luqman - Keluarga Luqman",
        " Surah As-Sajdah - Sajdah",
        " Surah Al-Ahzab - Golongan-Golongan Yang Bersekutu",
        " Surah Saba’ - Kaum Saba’",
        " Surah Fatir - Pencipta",
        " Surah Ya Sin - Yaasiin",
        " Surah As-Saffat - Barisan-Barisan",
        " Surah Sad - Shaad",
        " Surah Az-Zumar - Rombongan-Rombongan",
        " Surah Al-Mu’min - Orang Yg Beriman",
        " Surah Fussilat - Yang Dijelaskan",
        " Surah Asy-Syura - Musyawarah",
        " Surah Az-Zukhruf - Perhiasan",
        " Surah Ad-Dukhan - Kabut",
        " Surah Al-Jasiya - Yang Bertekuk Lutut",
        " Surah Al-Ahqaf - Bukit-Bukit Pasir",
        " Surah Muhammad - Muhammad",
        " Surah Al-Fath - Kemenangan",
        " Surah Al-Hujurat - Kamar-Kamar",
        " Surah Qaf - Qaaf",
        " Surah Az-Zariyat - Angin Yang Menerbangkan",
        " Surah At-Tur - Bukit",
        " Surah An-Najm - Bintang",
        " Surah Al-Qamar - Bulan",
        " Surah Ar-Rahman - Yang Maha Pemurah",
        " Surah Al-Waqi’ah - Hari Kiamat",
        " Surah Al-Hadid - Besi",
        " Surah Al-Mujadilah - Wanita Yang Mengajukan Gugatan",
        " Surah Al-Hasyr - Pengusiran",
        " Surah Al-Mumtahanah - Wanita Yang Diuji",
        " Surah As-Saff - Satu Barisan",
        " Surah Al-Jumu’ah - Hari Jum’at",
        " Surah Al-Munafiqun - Orang-Orang Yang Munafik",
        " Surah At-Tagabun - Hari Dinampakkan Kesalahan-Kesalahan",
        " Surah At-Talaq - Talak",
        " Surah At-Tahrim - Mengharamkan",
        " Surah Al-Mulk - Kerajaan",
        " Surah Al-Qalam - Pena",
        " Surah Al-Haqqah - Hari Kiamat",
        " Surah Al-Ma’arij - Tempat Naik",
        " Surah Nuh - Nuh",
        " Surah Al-Jinn - Jin",
        " Surah Al-Muzzammil - Orang Yang Berselimut",
        " Surah Al-Muddassir - Orang Yang Berkemul",
        " Surah Al-Qiyamah - Hari Kiamat",
        " Surah Al-Insan - Manusia",
        " Surah Al-Mursalat - Malaikat-Malaikat Yang Diutus",
        " Surah An-Naba’ - Berita Besar",
        " Surah An-Nazi’at - Malaikat-Malaikat Yang Mencabut",
        " Surah ‘Abasa - Ia Bermuka Masam",
        " Surah At-Takwir - Menggulung",
        " Surah Al-Infitar - Terbelah",
        " Surah Al-Tatfif - Orang-Orang Yang Curang",
        " Surah Al-Insyiqaq - Terbelah",
        " Surah Al-Buruj - Gugusan Bintang",
        " Surah At-Tariq - Yang Datang Di Malam Hari",
        " Surah Al-A’la - Yang Paling Tinggi",
        " Surah Al-Gasyiyah - Hari Pembalasan",
        " Surah Al-Fajr - Fajar",
        " Surah Al-Balad - Negeri",
        " Surah Asy-Syams - Matahari",
        " Surah Al-Lail - Malam",
        " Surah Ad-Duha - Waktu Matahari Sepenggalahan Naik (Dhuha)",
        " Surah Al-Insyirah - Melapangkan",
        " Surah At-Tin - Buah Tin",
        " Surah Al-‘Alaq - Segumpal Darah",
        " Surah Al-Qadr - Kemuliaan",
        " Surah Al-Bayyinah - Pembuktian",
        " Surah Az-Zalzalah - Kegoncangan",
        " Surah Al-‘Adiyat - Berlari Kencang",
        " Surah Al-Qari’ah - Hari Kiamat",
        " Surah At-Takasur - Bermegah-Megahan",
        " Surah Al-‘Asr - Masa/Waktu",
        " Surah Al-Humazah - Pengumpat",
        " Surah Al-Fil - Gajah",
        " Surah Quraisy - Suku Quraisy",
        " Surah Al-Ma’un - Barang-Barang Yang Berguna",
        " Surah Al-Kausar - Nikmat Yang Berlimpah",
        " Surah Al-Kafirun - Orang-Orang Kafir",
        " Surah An-Nasr - Pertolongan",
        " Surah Al-Lahab - Gejolak Api/Sabut",
        " Surah Al-Ikhlas - Ikhlas",
        " Surah Al-Falaq - Waktu Subuh",
        " Surah An-Nas - Manusia",
      ],
			selectedIndex: 0,
		}
	},
  mounted(){
    if(this.$refs.label == undefined) return;

    const label = this.$refs.label.nativeView;
    const textField = this.$refs.textField.nativeView;

    setTimeout(() => {
      label
          .animate({
              translate: {
                  x: 0,
                  y: -33
              },
              opacity: 1
          })
          .then(() => {
            textField.borderBottomColor = new Color("#28BAAA");
          }, () => {});
    },500)
  },
	methods: {
		dropDownOpened(args) {
	  console.log("Drop Down opened");
        // get our elments to maninpulate.
        const label = this.$refs.label.nativeView;
        const textField = this.$refs.textField.nativeView;

        // animate the label sliding up and less transparent.
        label
            .animate({
                translate: {
                    x: 0,
                    y: -32
                },
                opacity: 1
            })
            .then(() => {}, () => {});

        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color("#00b47e");
		},

		dropDownClosed(args) {
      return

      setTimeout(() => {
        const label = this.$refs.label.nativeView;
        const textField = this.$refs.textField.nativeView;

        console.log(`Drop Down closed`);

        if (this.selectedIndex == null) {
            label
                .animate({
                    translate: {
                        x: 0,
                        y: 0
                    },
                    opacity: 0.4
                })
                .then(
                    () => {
                        dropdown.selectedIndex = null
                    },
                    () => {}
                );
        }

        // reset border bottom color.
        textField.borderBottomColor = new Color("#cec8c8");
      }, 300);
		},

		dropDownSelectedIndexChanged(args) {
      this.selectedIndex = args.newIndex;
	  console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
		},

	}
}
</script>
