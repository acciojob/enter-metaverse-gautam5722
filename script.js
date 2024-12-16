 document.getElementById("enterBtn").addEventListener("click", () => {
      const statusParagraph = document.getElementById("status");

      const newHeading = document.createElement("h1");
      newHeading.id = "status";
      newHeading.textContent = "Entered Metaverse"; 

      statusParagraph.replaceWith(newHeading);
    });