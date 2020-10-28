class Building {

  constructor(buildingX, buildingY, buildingW, buildingH) {

    this.x = buildingX;
    this.y = buildingY;
    this.w = buildingW;
    this.h = buildingH;
    
  }

  buildings(color, tranparency) {
    
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }

  windows(r,g,b){
    
    
    this.r = r;
    this.g = g;
    this.b = b;


    for (let i = this.x+20; i < this.x+this.w; i+=(this.w/2)){
      for (let j = this.y+20; j < this.y + this.h; j+=(this.h/5)){
        
        fill(this.r, this.g, this.b)
        rect(i, j, 30, 30)
   
    }
    
  }

}
}