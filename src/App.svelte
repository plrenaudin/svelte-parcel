<Card className="content">
  <h1>Hello {name}!
  <Button on:click="onClickHandler()">test button</Button>
</Card>

<script>
  export default {
    components: {
      Button: "./components/Button",
      Card: "./components/Card"
    },
    methods: {
      onClickHandler() {
        alert("button clicked!");
      }
    }
  };
</script>

<style>
  @import "./styles";

  h1 {
    color: var(--titleColor);
  }
</style>