let winopts=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,3],
]
let p1=[];
let p2=[];
let winner='';
let btn=document.getElementsByClassName('btn');
let h=document.getElementsByClassName('mark');
let result=document.getElementById('result');
let a=true;
let display='X';
result.textContent='P1 Turn';
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        console.log('inside func')
    if (a){
        console.log('inside if')
        let hchk=h[i].textContent;
        if ('123456789'.includes(hchk)){
          if(display=='O'){
            h[i].textContent='O';
            p2.push(i+1);
            h[i].style.display = 'block';
            display='X'
            result.textContent='P1 Turn';
          }
          else{
            h[i].textContent='X';
            p1.push(i+1);
            h[i].style.display = 'block';
            display='O';
            result.textContent='P2 Turn';
           }
        }



        for(let i=0;i<winopts.length;i++){
            let c=0;
            for(let j=0;j<winopts[i].length;j++){
                if (p1.includes(winopts[i][j])){
                    c++;
                }
            }
            if(c==3){
                result.textContent='p1 wins';
                a=false;
               
                
            }
        }
        for(let i=0;i<winopts.length;i++){
            let c=0;
            for(let j=0;j<winopts[i].length;j++){
                if (p2.includes(winopts[i][j])){
                    c++;
                }
            }
            if(c==3){
                result.textContent='p2 wins';
                a=false;
                
                
            }
        }
    }



    else{
        alert('Match ended');
    }
    
    })
}