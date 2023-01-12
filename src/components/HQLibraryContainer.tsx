import logo from "../../assets/logo.png";

const HQLibraryContainer = () => {
  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column" }}>
      <img width={200} src={logo} />
      <br />
      <h3>AppID is : {window.location.href.split('/')[window.location.href.split('/').length - 1]}</h3>
    </div>
  )
}

export default HQLibraryContainer;
