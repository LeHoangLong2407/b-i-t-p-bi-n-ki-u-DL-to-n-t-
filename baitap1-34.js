function xuly()
{
	var r =  document.getElementById('r').value;
	console.log('bán kính'+r);
	var S = r*r*3.14;
	var C = 2*r*3.14;
	document.getElementById('S').innerHTML = ('diện tích hình tròn là: '+S);
	document.getElementById('C').innerHTML = ('chu vi hình tròn là: '+C);
}