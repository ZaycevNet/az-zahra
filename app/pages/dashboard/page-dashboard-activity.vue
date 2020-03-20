<style scoped>


</style>

<template>

    <DashboardActivity :habit="habits" height="100%" />

</template>

<script>

// import Vue from 'nativescript-vue'

export default {
    props: ["items"],
    data() {
        return {
          habits:[
            {
              title:"Sholat",
              image:"~/assets/images/ukik.jpg",
              nama:"Ayame",
              description:`Mengisi "Kebiasaan Sholat", 20-12-2020 20:19`
            },
            {
              title:"Puasa",
              image:"~/assets/images/ukik.jpg",
              nama:"Rikimaru",
              description:`Mengisi "Kebiasaan Puasa", 20-12-2020 20:19`
            },
            {
              title:"ZIS",
              image:"~/assets/images/ukik.jpg",
              nama:"Muhamad Duki",
              description:`Mengisi "Kebiasaan Zakat-Infaq-Sedekah", 20-12-2020 20:19`
            },
            {
              title:"Tadarus",
              image:"~/assets/images/ukik.jpg",
              nama:"Rikimaru",
              description:`Mengisi "Kebiasaan Tadarus", 20-12-2020 20:19`
            },
            {
              title:"Membaca",
              image:"~/assets/images/ukik.jpg",
              nama:"Ayame",
              description:`Mengisi "Kebiasaan Membaca", 20-12-2020 20:19`
            },
            {
              title:"Organisasi",
              image:"~/assets/images/ukik.jpg",
              nama:"Muhamad Duki",
              description:`Mengisi "Kebiasaan Organisasi", 20-12-2020 20:19`
            },
            {
              title:"Adab Islami",
              image:"~/assets/images/ukik.jpg",
              nama:"Ayame",
              description:`Mengisi "Kebiasaan Adab Islami", 20-12-2020 20:19`
            },
            {
              title:"Majelis Ilmu",
              image:"~/assets/images/ukik.jpg",
              nama:"Muhamad Duki",
              description:`Mengisi "Kebiasaan Majelis Ilmu", 20-12-2020 20:19`
            },
            {
              title:"Berpikir Positif",
              image:"~/assets/images/ukik.jpg",
              nama:"Ayame",
              description:`Mengisi "Kebiasaan Berpikir Positif", 20-12-2020 20:19`
            },
            {
              title:"Sholat",
              image:"~/assets/images/ukik.jpg",
              nama:"Rikimaru",
              description:`Mengisi "Kebiasaan Sholat", 20-12-2020 20:19`
            },
            {
              title:"Puasa",
              image:"~/assets/images/ukik.jpg",
              nama:"Rikimaru",
              description:`Mengisi "Kebiasaan Puasa", 20-12-2020 20:19`
            },
            {
              title:"ZIS",
              image:"~/assets/images/ukik.jpg",
              nama:"Muhamad Duki",
              description:`Mengisi "Kebiasaan Zakat-Infaq-Sedekah", 20-12-2020 20:19`
            },
            {
              title:"Tadarus",
              image:"~/assets/images/ukik.jpg",
              nama:"Muhamad Duki",
              description:`Mengisi "Kebiasaan Tadarus", 20-12-2020 20:19`
            },
            {
              title:"Membaca",
              image:"~/assets/images/ukik.jpg",
              nama:"Muhamad Duki",
              description:`Mengisi "Kebiasaan Membaca", 20-12-2020 20:19`
            },
            {
              title:"Organisasi",
              image:"~/assets/images/ukik.jpg",
              nama:"Ayame",
              description:`Mengisi "Kebiasaan Organisasi", 20-12-2020 20:19`
            },
            {
              title:"Adab Islami",
              image:"~/assets/images/ukik.jpg",
              nama:"Rikimaru",
              description:`Mengisi "Kebiasaan Adab Islami", 20-12-2020 20:19`
            },
            {
              title:"Majelis Ilmu",
              image:"~/assets/images/ukik.jpg",
              nama:"Muhamad Duki",
              description:`Mengisi "Kebiasaan Majelis Ilmu", 20-12-2020 20:19`
            },
            {
              title:"Berpikir Positif",
              image:"~/assets/images/ukik.jpg",
              nama:"Rikimaru",
              description:`Mengisi "Kebiasaan Berpikir Positif", 20-12-2020 20:19`
            },

          ]
        }
    },
    methods: {

    }
}

</script>
