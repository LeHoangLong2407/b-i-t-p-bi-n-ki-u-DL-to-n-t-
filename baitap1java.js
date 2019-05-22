function xuly()
{	
	var sinh = document.getElementById('sinh').value;
	var ly = document.getElementById('ly').value;
	var hoa = document.getElementById('hoa').value;
	var doC = document.getElementById('doC').value;
	console.log('sinh:'+sinh+' lý:'+ly+' hoá:'+hoa+' Độ C: '+doC);
	var doF = 9/5*doC+32;	
	var tong = parseInt(sinh) + parseInt(ly) + parseInt(hoa);
	var Diemtb = (parseInt(sinh) + parseInt(ly) + parseInt(hoa))/3;
	document.getElementById('tong').innerHTML = 'Điểm tổng là: '+tong;
	document.getElementById('diemtrungbinh').innerHTML = 'Điểm trung bình là: '+Diemtb;
	document.getElementById('doF').innerHTML = 'Độ F là: '+doF;
}