module.exports = {
	"id":"1",
	"code":Math.random()*99999999999,
	"initial": "PROFILE-SISWA",

	"jenis":"siswa", 
	"username":"ukik", // table users
	"password":"123", // table users

	"payload_biodata":{ // table profile_siswa
		"id":"1",
		"parent_id":"1",
		"code":Math.random()*99999999999,
		"initial": "PROFILE-SISWA",

		"nama_depan":"Rumah",
		"nama_belakang":"Siang",
		"tempat_lahir":"Bumi",
		"tanggal_lahir":"20-09-1999",
		"kelas":"1",
		"rombel":"A",
		"jenjang":"SD",		
		"nis":"Pengetahuan",
		"telpon":"Guru/Ustad",
		"whatsapp": "Rangkuman/Keterangan",
		"email":"Guru/Ustad",
		"gender":"1",
		"alamat":"Guru/Ustad",
	},
	"payload_orangtua":[ // table profile_siswa
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-SISWA",

			"jenis":"ayah",
			"judul":"Data Ayah",

			"nama_depan":"Rumah",
			"nama_belakang":"Siang",
			"gelar_depan":"",
			"gelar_belakang":"",
			"ktp":"Pengetahuan",
			"telpon":"Guru/Ustad",
			"whatsapp": "Rangkuman/Keterangan",
			"email":"Guru/Ustad",
			"pekerjaan":"Pengetahuan",
			"c":"Pengetahuan",
			"alamat":"Guru/Ustad",
		},
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-SISWA",

			"jenis":"ibu",
			"judul":"Data Ibu",

			"nama_depan":"Rumah",
			"nama_belakang":"Siang",
			"gelar_depan":"Dr",
			"gelar_belakang":"Spd",
			"ktp":"Pengetahuan",
			"telpon":"Guru/Ustad",
			"whatsapp": "Rangkuman/Keterangan",
			"email":"Guru/Ustad",
			"pekerjaan":"Pengetahuan",
			"jabatan":"Pengetahuan",
			"alamat":"Guru/Ustad",
		},
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-SISWA",

			"jenis":"wali",
			"judul":"Data Wali",

			"nama_depan":"Rumah",
			"nama_belakang":"Siang",
			"gelar_depan":"",
			"gelar_belakang":"",
			"ktp":"Pengetahuan",
			"telpon":"Guru/Ustad",
			"whatsapp": "Rangkuman/Keterangan",
			"email":"Guru/Ustad",
			"pekerjaan":"Pengetahuan",
			"jabatan":"Pengetahuan",
			"alamat":"Guru/Ustad",
		},
	],
	'payload_group': [
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-SISWA",

			"jenis":"group",
			"judul":"Kelompok",

			"nama":"Rumah",
			"anggota":"123",
		},
		{
			"id":"1",
			"parent_id":"1",
			"code":Math.random()*99999999999,
			"initial": "PROFILE-SISWA",

			"jenis":"group",
			"judul":"Kelompok",

			"nama":"Rumah",
			"anggota":"123",
		},
	]
}
