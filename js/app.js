var app = {
  directions:['right','bottom','left','top'],
  player:{
    x:0,
    y:0,
    direction:directions[0],
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
    if(app.player.direction==='right'){
      app.player.direction=up;
    } else if(direction==='right'){
      direction=top;
    }
  
  }
};
console.log(app.playerHTMLElement);
console.log(app.targetCell);
document.addEventListener('DOMContentLoaded', app.init);