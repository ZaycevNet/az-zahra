<script type="text/javascript">
	import sideDrawer from "~/components/sideDrawer.vue";
	import drawerContent from "~/components/drawerContent.vue";

	export default {
		render(h) {
	    return h(sideDrawer, [
	      h(drawerContent, { slot: "drawerContent" }),
	      h(this.$views.ViewMain, { slot: "mainContent" })
	    ]);
	  }
	}
</script>
