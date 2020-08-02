import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
var Image = Quill.import("formats/image");
Image.className = "lazyon";
Quill.register(Image, true);
class QuillEditor {
  private readonly quill: Quill = null;
  constructor(select: any) {
    this.quill = new Quill(select, {
      modules: {
        toolbar: ["bold", "image", "underline", "clean"],
      },
      theme: "snow",
    });
    const toolbar = this.quill.getModule("toolbar");
    toolbar.addHandler("image", this.imageHandler.bind(this));
  }

  private imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("method", "post");
    input.addEventListener("change", () => {
      const file = input.files[0];
      // const tempURL = URL.createObjectURL(file);
      const tempURL = "https://phinational.org/wp-content/uploads/2017/07/fb-test-image-470x246.jpg";
      const range = this.quill.getSelection(true);
      const style = "width: 100%; min-height: 100px; background-color: gray";

      this.quill.setSelection(range.index, 1);
      this.quill.deleteText(range.index, 1);
      this.quill.pasteHTML(range.index, `<img src="${tempURL}" data-src="${tempURL}" width="100%" />`);
    });
    input.click();
  }
}

export default QuillEditor;
