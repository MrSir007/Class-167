AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema: {
    isPlaying: {type: "boolean", default: false}
  },
  init: function() {
    this.video_1 = this.el.getAttribute("material").src
    this.onClick = this.onClick.bind(this)
  },
  play: function() {
    window.addEventListener("click", this.onClick)
  },
  onClick: function(event) {
    if (! this.video_1) {
      return
    }
    var isPlaying = this.el.getAttribute("play-on-click").isPlaying
    this.el.object3D.visible = true
    if (! isPlaying) {
      this.el.setAttribute("play-on-click", {isPlaying: true})
      this.video_1.play()
    } else {
      this.el.setAttribute("play-on-click", {isPlaying: false})
      this.video_1.pause()
    }
  }
})