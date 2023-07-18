AFRAME.registerComponent("trash", {
    tick: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `hurdle${i}`;
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
        var position = { x: posX, y: posY, z: posZ };
        this.flyingBirds(id,position);
    }
    },
    flyingBirds:(id,position) => {
      var birdEl = document.createElement("a-entity");
      var all=document.querySelector("#scene")
      birdEl.setAttribute("id", id);
      birdEl.setAttribute("position",position);
      birdEl.setAttribute("scale", { x:4, y:4, z:4 });
      birdEl.setAttribute("gltf-model","models/satellite/scene.gltf");
      all.appendChild(birdEl)
      //birdEl.setAttribute("cbpc",{cbc:`#${id}`})
    },
  });