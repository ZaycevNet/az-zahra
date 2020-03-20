<template>
	<Gradient direction="top down" colors="#28ADAA, #28BAAA" color="white" height="auto" verticalAlignment="middle">
			<!-- <Label textAlignment="center" fontWeight="bold" fontSize="20"  :text="habit" /> -->
			<!-- <Label textAlignment="center" marginBottom="5" fontSize="14"  text="Kelola target nilai kebiasaan islami siswa" /> -->


			<GridLayout columns="85,*" rows="85" margin="0" padding="5" borderRadius="10"  borderWidth="0" borderColor="rgba(40,186,170,0.5)">
					<StackLayout col="0" row="0" dock="left" padding="5">
							<Image src="~/assets/images/love.jpg" stretch="aspectFill" width="100%" height="100%" borderRadius="50%" />
					</StackLayout>
					<StackLayout col="1" padding="0 10" verticalAlignment="middle">
							<DockLayout stretchLastChild="true" width="100%">
									<StackLayout dock="left">
											<Label>
													<FormattedString>
															<Span class="person-name" text="item.nama_depan +' '" />
															<Span class="person-name" text="item.nama_belakang" />
													</FormattedString>
											</Label>
											<!-- <Label :text="'NIS: '+ item.nis" class="person-title" />
											<Label>
													<FormattedString>

															<Span class="person-title" :text="item.jenjang+':'" />
															<Span class="person-title" :text="' Kelas '+ item.kelas " />
															<Span class="person-title" :text="' - '+item.rombel" />
													</FormattedString>
											</Label> -->

									</StackLayout>

									<!-- <StackLayout>
											<Label :text="item.total_aktivitas" class="ranking-activity" />
											<Label text="10/10" class="total-activity" />
									</StackLayout> -->
							</DockLayout>
							<Label class="info-activity" text="Perhitungan SKM Harian" />
					</StackLayout>
			</GridLayout>
	</Gradient>
</template>

<script>
export default {
	props: ["habit"]
}
</script>
