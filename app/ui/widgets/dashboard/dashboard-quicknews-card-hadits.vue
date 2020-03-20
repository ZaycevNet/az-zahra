

<template>

<StackLayout>
    <CardView row="0" elevation="15" radius="15" margin="5">
        <Gradient direction="to right" colors="rgb(165,150,255), rgb(210,184,255)" color="white" height="auto">

            <GridLayout columns="40,*" rows="50" margin="0" borderRadius="10" borderWidth="0" padding="5">

                <Label col="0" row="0" textWrap="true" verticalAlignment="middle" textAlignment="center" color="" fontSize="36" class="fa" :text="'fa-clock-o' | fonticon" fontWeight="normal"/>

                <StackLayout paddingLeft="5" col="1" row="0" verticalAlignment="middle">
                    <Label fontSize="14" fontWeight="bold" text="Al-Hadits Harian" />
                    <Label textWrap="true" fontWeight="normal" fontSize="12" text="Belajar Al-Hadits minimal 1 kali setiap hari" />
                </StackLayout>

            </GridLayout>

        </Gradient>

    </CardView>
    <StackLayout borderRadius="8" backgroundColor="rgb(242,246,252)" borderWidth="0" margin="5" padding="5">
      <RadListView height="100%" padding="5" for="item in [1]" @itemTap="" >
        <v-template>
          <!-- <ScrollView height="100%" padding="5" scrollBarIndicatorVisible="false"> -->
              <HtmlView :html="html" textWrap="true" fontSize="14" />
          <!-- </ScrollView> -->
        </v-template>
      </RadListView>
    </StackLayout>
</StackLayout>

</template>

<script>

export default {
    props: ["habit"],
    data() {
        return {
            html: `
<div>
Hadits Riwayat Ibnu Hibban
<p>
<b>
عَنْ عَائِشَةَ قَالَتْ: كَانُوْا فِى اْلجَاهِلِيَّةِ اِذَا عَقُّوْا عَنِ الصَّبِيّ خَضَبُوْا قُطْنَةً بِدَمِ اْلعَقِيْقَةِ. فَاِذَا حَلَقُوْا رَأْسَ الصَّبِيّ وَضَعُوْهَا عَلَى رَأْسِهِ، فَقَالَ النَّبِيُّ ص: اِجْعَلُوْا مَكَانَ الدَّمِ خَلُوْقًا. ابن حبان
</b>
</p>
<p>
Dari ‘Aisyah, ia berkata, “Dahulu orang-orang pada masa jahiliyah apabila mereka ber’aqiqah untuk seorang bayi, mereka melumuri kapas dengan darah ‘aqiqah, lalu ketika mencukur rambut si bayi mereka melumurkan pada kepalanya”. Maka Nabi SAW bersabda, “Gantilah darah itu dengan minyak wangi“
</p>
</div>`
        }
    }
}

</script>
