module.exports = {
  generate_1d : function (num) {
  var arr=[];
    if(num===undefined) {
      for(var i=0;i<3;i++){        
          arr[i]=Math.round(Math.random());        
      }
        return arr;
    }
    else if(arguments.length===1) {
     if(typeof num === 'string') {
        return [];
     }
      for(var k=0;k<num;k++)
          arr[k]=Math.round(Math.random());
        return  arr;
      }

    },
    
  
};