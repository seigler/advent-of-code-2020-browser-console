I=[9,12,1,4,17,0,18],F=a=>{L=new Map(I.slice(0,-1).map((a,b)=>[a,b]));let b=I[I.length-1];for(let c=I.length;c<a;c++)n=c-1-L.get(b)||0,L.set(b,c-1),b=n;return b},[F(2020),F(3e7)];