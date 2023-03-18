<script>
  import { App, Panel, View } from "framework7-svelte";
  import routes from "./routes";

  import "framework7/css/bundle";
  import "./css/app.css";

  const f7Params = {
    id: "io.framework7.sf7-skeleton",
    theme: "auto",
    routes,
    dark: true,
    popup: {
      closeOnEscape: true,
    },
    sheet: {
      closeOnEscape: true,
    },
    popover: {
      closeOnEscape: true,
    },
    actions: {
      closeOnEscape: true,
    },
  };
</script>

<App {...f7Params}>
  <Panel left cover resizable>
    <View url="/panel-left/" links-view=".view-main" />
  </Panel>
  <Panel right reveal resizable>
    <View url="/panel-right/" />
  </Panel>
  <View url="/" main={true} class="safe-areas" masterDetailBreakpoint={768} />
</App>
