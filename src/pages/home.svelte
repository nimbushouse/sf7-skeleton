<script>
  import {
    theme,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    List,
    ListItem,
    Link,
    Searchbar,
    Card,
  } from "framework7-svelte";
</script>

<Page class="page-home">
  <Navbar large transparent sliding={false}>
    <NavLeft>
      <Link
        panelOpen="left"
        iconIos="f7:menu"
        iconAurora="f7:menu"
        iconMd="material:menu"
      />
    </NavLeft>
    <NavTitle sliding>Framework7 Svelte</NavTitle>
    <NavRight>
      <Link
        searchbarEnable=".searchbar-components"
        iconIos="f7:search"
        iconAurora="f7:search"
        iconMd="material:search"
      />
    </NavRight>
    <NavTitleLarge>Framework7 Svelte</NavTitleLarge>
    <Searchbar
      class="searchbar-components"
      searchContainer=".components-list"
      searchIn="a"
      expandable
      disableButton={!theme.aurora}
    />
  </Navbar>

  <Card>This is an example test.</Card>

  <List class="searchbar-hide-on-search">
    <ListItem
      title="About Framework7"
      reloadDetail={theme.aurora}
      link="/about/"
    >
      <i class="icon icon-f7" slot="media" />
    </ListItem>
  </List>
</Page>
