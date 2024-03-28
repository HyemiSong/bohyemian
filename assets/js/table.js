function tableCreate() {
	//body reference 
	var UL = document.getElementById("list");
	var txtColor, txtWeight, txtlink, txtFeat;
    
    // create elements <table> and a <tbody>
	var tb1 = document.createElement("table");
	    tb1.style.width = '100%';
	    tb1.style.border ='0px solid black';

    var cellTXT;
    var numofCol = 5;
    var rectColor;
	var url = "../assets/js/archive.csv";
	d3.csv(url, function (error, data){
		
	    // cells creation
		for (var i = 0; i < data.length; i++){
			
			var tr = tb1.insertRow();
			for (var j = 0; j < numofCol+1; j++){
				if (i == data.length && j == numofCol){
					break;
				} else {
					var td = tr.insertCell();
					var eLink = document.createElement('a');
					
                    if(data[i].show == "N"){
							txtColor = "#C0C0C0";
						}else{		
							txtColor = "#000000"; 
					}

                    	tb1.rows[i].cells[j].style.color = txtColor;

					if(j==1){
						cellTXT = data[i].project;	

						if(data[i].show == "N"){	
						}else{	
							tb1.rows[i].cells[j].onmouseover = function(){
								  this.style.color = "red";
								  this.style.cursor = 'pointer';
								}	
							tb1.rows[i].cells[j].onmouseout = function(){
								  this.style.color = "#000000";
							    }	
							tb1.rows[i].cells[j].onclick = function(){
							      //tableText(this); 
							      //td.style = "cursor:pointer";
							      var cellIndex = this.parentNode.rowIndex;
							      txtlink = data[cellIndex].link;
							      txtFeat = data[cellIndex].inout;
							      console.log(txtFeat);

							      if(txtFeat == "IN"){
									window.location.href = txtlink;
							      }else if(txtFeat == "OUT"){
									window.open(txtlink,"_blank");
							      }else{
							      }
							    }
						}

						tb1.rows[i].cells[j].style.fontWeight = "600";

					}else if(j==2){
						cellTXT = data[i].client;
					}else if(j==3){
						cellTXT = data[i].media;
                    }else if(j==4){
						if(data[i].sel=="Y"){
							cellTXT = "#";
						}else{
							cellTXT = "";
						}
					}else if(j==5){
						if(data[i].feat=="Y"){
							cellTXT = "☆";
						}else{
							cellTXT = "";
						}
					}

					function tableText(tableCell) {
				        //window.location.href = 
				        //alert(tableCell.innerHTML);
				    }

					if(j==0){	

						if (data[i].cate=="D"){
								rectColor = "#2f6696";
								}else if(data[i].cate=="UX"){
								rectColor = "#ec4c2a";
							    }else if(data[i].cate=="A"){
								rectColor = "#282828";
							    }else if(data[i].cate=="G"){
								rectColor = "#f0be1f";
							    }else if(data[i].cate=="UN"){
								rectColor = "#f7d8d3";
						    }
						var classRect = document.createElement("div");
	                        classRect.className = "rect";
		                    td.appendChild(classRect);
		                    document.getElementsByClassName("rect")[i].style.backgroundColor= rectColor;
					}else{
						td.appendChild(document.createTextNode(cellTXT));
					}
					
					td.style.border = '0px solid black';
					td.style.height = '23px';

					// if(i == 1 && j == 1){
					// 	td.setAttribute('rowSpan', '2');
					// }
				}
			}
		}

    })

	UL.appendChild(tb1);
}
tableCreate();