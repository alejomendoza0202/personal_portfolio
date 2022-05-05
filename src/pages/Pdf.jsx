import Document from "../docs/CV_FredyAlejandroMendoza.pdf";

const Pdf = () => {
  if (typeof window.orientation !== "undefined") {
    document.getElementById("enlaceDescarga").click();
    window.close();
  }
  return (
    <div className="absolute w-full h-full">
      <object data={Document} type="application/pdf" width="100%" height="100%">
        <br />
        <a
          href={Document}
          id="enlaceDescarga"
          download="CV_FredyAlejandroMendoza.pdf"
        >
          Tu dispositivo no puede visualizar los PDF, da click aquí para
          descargarlo
        </a>
      </object>
    </div>
  );
};

export default Pdf;
