var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width = window.innerWidth,
  h = canvas.height = window.innerHeight;
ctx.fillStyle = "white";
function starObj(){
  this.maxStars=700;
  this.widthBOX=[];
  this.heightBOX=[];
  this.speedx=[];
  this.speedy=[];
  this.getHeight=function () {
    var height = Math.random() * h+window.innerHeight;
    return height;
  }
  this.getwidth=function () {
    var width = Math.random() * w;
    return width
  }
  this.starInt=function () {
    for (var a = 0; a <this.maxStars; a++) {
      var w2 = this.getwidth();
      var h2 = this.getHeight();
      ctx.fillRect(w2, h2, 2, 2);
      this.speedy.push(Math.random() * (3 - 1) + 1);
      this.speedx.push((Math.random()-Math.random())* (3 - 1) + 1);
      this.widthBOX.push(w2);
      this.heightBOX.push(h2);
    }
  };
  this.move=function () {
    ctx.clearRect(0,0,w,h);
    for (var a=0;a<this.maxStars;a++){
      this.heightBOX[a]=this.heightBOX[a]-this.speedy[a];
      this.widthBOX[a]=this.widthBOX[a]+this.speedx[a];
      if (this.heightBOX[a] <= 0){
        this.widthBOX[a]=this.getwidth();
        this.heightBOX[a]=this.getHeight();
      }
      if (this.widthBOX[a]>=w||this.widthBOX[a]<= 0){
        this.widthBOX[a]=this.getwidth();
        this.heightBOX[a]=this.getHeight();
      }
      ctx.fillRect(this.widthBOX[a],this.heightBOX[a],2,2)
    }
  }
}
var star=new starObj();
star.starInt();
star.move()
setInterval(()=>{
  star.move()
},10);
