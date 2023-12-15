var a=[]
var b=[]
var size=parseInt(prompt("Enter the size of the array"))
for(i=0;i<size;i++){
    a[i]=parseInt(prompt("Enter the value "+(i+1)))
}
document.write("The given array is : "+a+"<br>")
for(i=0;i<a.length;i++){
    var c=0
for(j=1;j<a[i];j++){
    if(a[i]%j==0){
        c=c+j
        console.log(c)
        }
    }
if(c==a[i]){
    b.push(a[i])
    }
}
document.write("The perfect numbers in the given array is : "+b)


