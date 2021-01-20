function Myfunction(){
								document.getElementById('hd').style.display='none';
								document.getElementById('bk').style.display='block';
							}
							function Mefunction(){
								document.getElementById('hd').style.display='block';
								document.getElementById('bk').style.display='none';
							}
							function Loginfunction(){
							var txt;
							if(confirm("你是否需要登录账号")){
								txt="登录成功!";
							}
							else {
								txt="你取消了登录账号!"
							}
							document.getElementById('demo1').innerHTML=txt;
							}
							