var app = {
  
  player:{
    x:0,
    y:0,
    direction:'right'
    },
  
  targetCell:{
    x:5,
    y:3,
  },
  // boardHtmlElement:'null',
  boardHtmlElement:document.querySelector('#board'),
  drawBoard:function(){  
    for(i=0;i<4;i++){
      var rowHtmlElement=document.createElement('div')
      rowHtmlElement.classList.add('row')
      app.boardHtmlElement.appendChild(rowHtmlElement)

      for(j=0; j<6; j++){
        var cellHTMLElement=document.createElement('div')
        cellHTMLElement.classList.add('cell')
        if(j===app.targetCell.x && i===app.targetCell.y){
          cellHTMLElement.classList.add('targetCell')
        }
        if(j===app.player.x && i===app.player.y){
          var playerHTMLElement=document.createElement('div')
          playerHTMLElement.classList.add('player')
          cellHTMLElement.appendChild(playerHTMLElement)
        }
        rowHtmlElement.appendChild(cellHTMLElement)
        
      }
    }
  },
  clearBoard:function(){
    app.boardHtmlElement.innerHTML=" ";
  },

  redrawBoard:function(){
    app.clearBoard();
    app.drawBoard();
  },

  init: function () {
  // app.boardHtmlElement=document.getElementById('board')

  console.log('init !');
  app.drawBoard()
  app.redrawBoard()
  },

  turnLeft:function(){
    var oldClass=app.player.direction;
    if(app.player.direction==="right"){
      app.player.direction="top"
    }else if(app.player.direction==="top"){
      app.player.direction="left"
    }else if(app.player.direction==="left"){
      app.player.direction="bottom"
    }else if(app.player.direction==="bottom"){
      app.player.direction="right"
    }
    var playerHTMLElement=document.querySelector('.player')
    playerHTMLElement.classList.remove(oldClass);
    playerHTMLElement.classList.add(app.player.direction);

  },
  turnRight:function(){
    var oldClass=app.player.direction;
    if(app.player.direction==="right"){
      app.player.direction="bottom"
    }else if(app.player.direction==="bottom"){
      app.player.direction="left"
    }else if(app.player.direction==="left"){
      app.player.direction="top"
    }else if(app.player.direction==="top"){
      app.player.direction="right"
    }
    
    var playerHTMLElement=document.querySelector('.player')
    playerHTMLElement.classList.remove(oldClass);
    playerHTMLElement.classList.add(app.player.direction);
  },

  moveForward:function(){

  }

};
console.log(app.playerHTMLElement);
console.log(app.targetCell);
document.addEventListener('DOMContentLoaded', app.init);