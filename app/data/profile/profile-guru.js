module.exports = {
	"id":"1",
	"code":Math.random()*99999999999,
	"initial": "PROFILE-GURU",

	"jenis":"siswa",
	"username":"ukik",
	"password":"123",

	"payload_biodata":{
		"id":"1",
		"parent_id":"1",
		"code":Math.random()*99999999999,
		"initial": "PROFILE-GURU",

		"nama_depan":"Rumah",
		"nama_belakang":"Siang",
		"tempat_lahir":"Bumi",
		"tanggal_lahir":"20-09-1999",
		"nip":"Pengetahuan",
		"gelar_depan":"",
		"gelar_belakang":"",
		"ktp":"Pengetahuan",
		"telpon":"Guru/Ustad",
		"whatsapp": "Rangkuman/Keterangan",
		"email":"Guru/Ustad",
		"gender":"1",
		"alamat":"Guru/Ustad",
	},
	'payload_kelas': [
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-GURU",

			"jenis":"kelas",
			"judul":"Kelas",

			"kelas":"1",
			"rombel":"A",
			"jenjang":"SD"
		},
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-GURU",

			"jenis":"kelas",
			"judul":"Kelas",

			"kelas":"1",
			"rombel":"B",
			"jenjang":"SD"
		},
	],
	'payload_group': [
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-GURU",

			"jenis":"group",
			"judul":"Kelompok X",

			"nama":"Rumah",
			"anggota":"123",
		},
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-GURU",

			"jenis":"group",
			"judul":"Kelompok",

			"nama":"Rumah",
			"anggota":"123",
		},
	]
}
