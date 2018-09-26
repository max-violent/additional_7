module.exports = function solveSudoku(matrix) {
	var temp=Array.from({length:9},()=>Array.from({length:9},()=>0));
	var solve=solvei=solvekv=false;
	var i=j=q=n=m=p=0;
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			temp[i][j]=matrix[i][j];
		}
	}
	i=j=0;
	while(i<9){
		j=0;
		while(j<9){
			solve=false;
				if (matrix[i][j]==0){
						p=temp[i][j]+1;
						solve=false;
						while((solve==false)&(p<=9)){
						solvei=true;
						out1:for(var q=0;q<9;q++){
							if((temp[i][q]==p)||(temp[q][j]==p)){
								solvei=false;
								break out1;
}
}	
						solvekv=true;
						out:for(var n=parseInt(i/3)*3;n<(parseInt(i/3)+1)*3;n++){
							for(var m=parseInt(j/3)*3;m<(parseInt(j/3)+1)*3;m++){
								if(temp[n][m]==p){
									solvekv=false;
									break out;
}
}
}
if (solvei&solvekv){
temp[i][j]=p;
solve=true;
}
else {
p++;
}
}
}
else {
	solve=true;
	}
if(solve==true) {
	j++;
	}
else { 
		temp[i][j]=0;
	do {
		if(j>0){
		j--;}
		else {
			i--;
			j=8;
		}
	}
	while(matrix[i][j]!=0);
}
}
if(solve) i++;
	else i--;
}
return(temp);
}
